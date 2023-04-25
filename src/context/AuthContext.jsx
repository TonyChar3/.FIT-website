import { useContext, createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser ] = useState({})

    const token = localStorage.getItem('jwtToken');
    
    const LogIn = (u_email, u_passwd) => {

        try{
            fetch('https://localhost:3001/user/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email: u_email, password: u_passwd })
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    setUser(data)
                    localStorage.setItem('jwtToken', data.token)
                }
            })
        }catch(err){
            console.log(err)
        }
    }

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
            setUser(data)
        })
        .catch(err => {
            setUser(null)
            console.log(err)
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