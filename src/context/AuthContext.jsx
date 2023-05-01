import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState({})

    const token = Cookies.get('fit-user');
    
    const LogIn = (u_email, u_passwd) => {

        try{

            fetch('http://localhost:3001/user/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email: u_email, password: u_passwd })
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    console.log(data.token)
                    setUser(data)

                    const wishList = [];

                    data.user.wishlist.forEach(prodct => {
                        wishList.push({ _id: prodct._id })
                    }) 
                    
                    localStorage.setItem(`${data.user._id}`, JSON.stringify(wishList))

                    const oldToken = Cookies.get('fit-customer')

                    if(oldToken){
                        Cookies.set('fit-customer', oldToken, {expires: new Date(0) });
                    }

                    Cookies.set('fit-user', data.token, { expires: 1/24, sameSite: 'strict' })
                }
            })
        }catch(err){
            console.log(err)
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
            console.log(isRefresh)
            if(!isRefresh){
                axios.get('http://localhost:3001/fit-user',{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
                .then(resp => {
                    console.log(resp.data.token)
                    Cookies.set('fit-customer', resp.data.token, { expires: 1/24, sameSite: 'strict' })
                })
                .catch(err => {
                    console.log(err.message)
                })
            }

        })
    },[token])

    return(
        <UserContext.Provider value={{ user, LogIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}