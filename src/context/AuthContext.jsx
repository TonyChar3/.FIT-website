import { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState({})

    const token = localStorage.getItem('jwtToken');
    console.log(token)

    useEffect(() => {
        fetch('https://localhost:3001/user/current', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
        }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUser(data)
        })
        .catch(err => {
            console.log(err)
            setUser(null)
        })
    },[])

    return(
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}