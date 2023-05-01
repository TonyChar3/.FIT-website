import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const RegisterPage = () => {

    const navigate = useNavigate()
    // Set the States
    const [ username, setUsername ] = useState('');// The username input value
    const [ email, setEmail ] = useState('');// The email input value
    const [ password, setPassword ] = useState('');// The password input value

    // handle email input change
    const handleEmail = (e) => {
        setEmail(e);
    }

    // handle username input change
    const handleUsername = (e) => {
        setUsername(e);
    }

    // handle password input change
    const handlePassword = (e) => {
        setPassword(e);
    }

    // Register the user on submit
    const registerUser = (e) => {
        e.preventDefault();
        try{

            fetch('http://localhost:3001/user/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username, email: email, password: password })
            })
            .then(response => response.json())
            .then(data => {
                
                if(data){
                    navigate('/login')
                }
            })
            setEmail('')
            setUsername('')
            setPassword('')


        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <form onSubmit={registerUser} className="flex flex-col w-full h-[54vh] justify-center items-center mt-5 mb-[50px] lg:mt-10 lg:mb-[100px]">

                <div className="w-full flex flex-row justify-center p-2">
                    <h2 className="text-3xl lg:text-5xl">Register</h2>
                </div>

                <div className="flex flex-row justify-center w-80 p-1 my-4 lg:my-6">
                    <motion.input whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} type="text" onChange={(e) => handleUsername(e.target.value)} className="border-[1px] border-black rounded-lg p-1 w-60 outline-none lg:w-[95%] lg:p-2" placeholder="User Name" />
                </div>

                <div className="flex flex-row justify-center w-80 p-1 my-4 lg:my-6">
                    <motion.input whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} type="email" onChange={(e) => handleEmail(e.target.value)} className="border-[1px] border-black rounded-lg p-1 w-60 outline-none lg:w-[95%] lg:p-2" placeholder="Your email" />
                </div>

                <div className="flex flex-row justify-center items-center w-80 p-1 mt-2 lg:mt-4">
                    <motion.input whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} type="text" onChange={(e) => handlePassword(e.target.value)} className="border-[1px] border-black rounded-lg p-1 w-60 outline-none lg:w-[95%] lg:p-2" placeholder="Password" />
                </div>

                <motion.button type="submit" whileTap={{ scale: 0.70 }} className="bg-black text-white w-40 p-1 rounded-lg text-lg mt-5 mb-2 lg:w-60 lg:text-xl lg:my-6">Register</motion.button>
                
                <Link to="/login" className="text-lg my-2 underline">Already registered ?</Link>
            </form>
        </>
    );
}

export default RegisterPage;