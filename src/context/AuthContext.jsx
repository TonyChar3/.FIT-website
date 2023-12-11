import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showModal, closeModal } from '../store/slice/modalSlice.js';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState(null);
    const [products_array, setProductsArray] = useState(null);
    const [selected_product, setSelectedProduct] = useState(null);
    const [cookie_consent, setCookieConsent] = useState(null);
    const [wishlist_array, setWishList] = useState(null);

    const dispatch = useDispatch();
    
    const GoogleLogIn = async() => {
        try{
            // clear the httpOnly customer hash + jwt token
            const response = await axios.get('https://fit-shop-api.onrender.com/user/clear-session',{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials: true
            });
            if(response){
                // redirect to google login
                window.location.href = 'https://fit-shop-api.onrender.com/user/google-login'
            }
        }catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const FacebookLogIn = async() => {
        try{
            // clear the httpOnly customer hash + jwt token
            const response = await axios.get('https://fit-shop-api.onrender.com/user/clear-session',{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials: true
            });
            if(response){
                // redirect to google login
                window.location.href = 'https://fit-shop-api.onrender.com/user/facebook-login'
            }
        }catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const LogOut = async() => {
        // make a request to logout
        await axios.post('https://fit-shop-api.onrender.com/user/logout',{},{
            headers: {
                'Content-Type':'application/json'
            },
            withCredentials: true
        });
        dispatch(showModal("Logging out..."))
        setTimeout(() => {
            dispatch(closeModal())
        },[3000])
        window.location.reload();
    }

    const FetchProducts = async() => {
        try{
            // fetch all store products
            const response = await axios.get('https://fit-shop-api.onrender.com/shop/product',{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials: true
            });
            // set the array
            setProductsArray(response.data)
        } catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const ClearCookies = async() => {
        try{
            // clear the httpOnly customer hash + jwt token
            await axios.get('https://fit-shop-api.onrender.com/user/clear-session',{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials: true
            });
        } catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const fetchWishList = async() => {
        try{
            const response = await axios.get('https://fit-shop-api.onrender.com/wishlist/wishlist', {
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            setWishList(response.data)
        } catch(err){
            dispatch(showModal(err.message))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    const GetFitUserInfo = () => {
        axios.get('https://fit-shop-api.onrender.com/user/current', {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then(resp => {
            setUser(resp.data)
            FetchProducts();
        })
        .catch(err => {
            setUser(null)
            if(cookie_consent !== false){
                axios.get('https://fit-shop-api.onrender.com/fit-user',{
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                })
                .then(resp => {
                    FetchProducts();
                })
                .catch(err => {
                    dispatch(showModal(err.message))
                    setTimeout(() => {
                        dispatch(closeModal())
                    },[5000])
                })
            }
        })
    }

    useEffect(() => {
        // get the consent of cookies from the storage
        const cookie_state_consent = Cookies.get('CookieConsent');
        setCookieConsent(cookie_state_consent);
        // get the user info
        GetFitUserInfo();
    },[window])

    useEffect(() => {
        if(cookie_consent === false){
            ClearCookies();
        }
    },[cookie_consent])

    useEffect(() => {
        if(user !== null){
            fetchWishList();
        }
    },[user])

    return(
        <UserContext.Provider value={{ 
            user, 
            GoogleLogIn, 
            FacebookLogIn, 
            LogOut, 
            products_array, 
            selected_product, 
            setSelectedProduct,
            cookie_consent, 
            setCookieConsent,
            wishlist_array,
            setWishList
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}