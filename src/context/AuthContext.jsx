import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState({})

    const token = localStorage.getItem('jwtToken');
    
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
                    setUser(data)
                    console.log(data)

                    const wishList = [];

                    data.user.wishlist.forEach(prodct => {
                        wishList.push({ _id:prodct._id })
                    }) 

                    console.log(wishList)
                    
                    localStorage.setItem(`${data.user._id}`, JSON.stringify(wishList))
                    localStorage.setItem('jwtToken', data.token)
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
            console.log(resp)
            setUser(resp.data)
        })
        .catch(err => {
            setUser(null)
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