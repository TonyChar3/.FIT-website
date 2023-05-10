import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { showModal, closeModal } from '../store/slice/modalSlice.js';
import { getCartItems } from '../store/slice/cartSlice.js';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState({})

    const dispatch = useDispatch();

    const token = Cookies.get('fit-user');
    
    const LogIn = async(u_email, u_passwd) => {
        try{
            const response = await axios.post('http://localhost:3001/user/login',{
                email: u_email,
                password: u_passwd
            },{
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if(response.data){
                
                setUser(response.data.user)

                const wishList = [];

                response.data.user.wishlist.forEach(prodct => {
                    wishList.push({ _id: prodct._id })
                }) 
                    
                localStorage.setItem(`${response.data.user._id}`, JSON.stringify(wishList))

                const oldToken = Cookies.get('fit-customer')
                const oldHash = Cookies.get('fit-hash')

                if(oldToken && oldHash){
                    Cookies.set('fit-customer', oldToken, {expires: new Date(0) });
                    Cookies.set('fit-hash', oldHash, {expires: new Date(0) });
                }

                Cookies.set('fit-user', response.data.token, { expires: 1/24, sameSite: 'strict' })

                dispatch(showModal(response.data.message))
                
                setTimeout(() => {
                    dispatch(closeModal())
                },[5000])
            }
        }catch(err){

            dispatch(showModal(err))

            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const LogOut = () => {
        localStorage.removeItem(`${user._id}`)

        const oldToken = Cookies.get('fit-user')

        if(oldToken){
            Cookies.set('fit-user', oldToken, {expires: new Date(0) });
        }

        dispatch(showModal("Logging out..."))
        setTimeout(() => {
            dispatch(closeModal())
        },[3000])
        
        window.location.reload();
    }

    const Register = async(u_username, u_email, u_password) => {
        try{
            const response = await axios.post('http://localhost:3001/user/register',{
                username: u_username,
                email: u_email,
                password: u_password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response){
                return response.data.message
            }

        } catch(err){
            console.log("Register error: ", err)
        }
    }

    useEffect(() => {
        
        axios.get('http://localhost:3001/user/current', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        .then(resp => {
            setUser(resp.data)
        })
        .catch(err => {
            setUser(null)
            
            const isRefresh = Cookies.get('fit-customer')
            
            if(!isRefresh){
                axios.get('http://localhost:3001/fit-user',{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
                .then(resp => {
                    Cookies.set('fit-customer', resp.data.token, { expires: 1/24, sameSite: 'strict' })
                    Cookies.set('fit-hash', resp.data.hashToken, { expires: 1/24, sameSite: 'strict' })
                    dispatch(getCartItems())
                })
                .catch(err => {
                    console.log(err.message)
                })
            }

        })
    },[token])

    return(
        <UserContext.Provider value={{ user, LogIn, LogOut, Register }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}