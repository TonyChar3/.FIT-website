import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignInPage = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');// state for the user email
    const [passwd, setPasswd] = useState('');// state for the user password
    const [seePasswrd, setSeePasswrd] = useState(false);// state to the see password eye icon

    // handle the click of the eye icon
    const handleEyePassword = () => {
        setSeePasswrd(seePasswrd => !seePasswrd)
    }

    // handle the email input value
    const handleEmail = (e) => {
        setEmail(e)
    }

    // handle the password input value
    const handlePassword = (e) => {
        setPasswd(e)
    }

    // handle the log in
    const LogIn = (e) => {
        e.preventDefault();
        try{
            fetch('https://localhost:3001/user/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email: email, password: passwd })
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    console.log(data.token)
                    console.log('User log in')
                    localStorage.setItem('jwtToken', data.token)
                    navigate('/profile')
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <form onSubmit={LogIn} className="flex flex-col w-full h-[54vh] justify-center items-center mt-5 mb-[50px]">

                <div className="w-full flex flex-row justify-center p-2">
                    <h2 className="text-3xl lg:text-5xl">Login</h2>
                </div>

                <div className="flex flex-row justify-center w-80 p-1 my-4 lg:my-6">
                    <motion.input whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} onChange={(e) => handleEmail(e.target.value)} type="email" className="border-[1px] border-black rounded-lg p-1 w-60 outline-none lg:w-[95%] lg:p-2" placeholder="Your email" />
                </div>

                <div className="flex flex-row justify-center items-center w-80 p-1 mt-2 lg:mt-4">
                    <motion.input whileFocus={{ scale: 1.1 }} whileHover={{ scale: 1.1 }} onChange={(e) => handlePassword(e.target.value)} type={`${seePasswrd? 'text' : 'password'}`} className="border-[1px] border-black rounded-lg p-1 w-60 outline-none lg:w-[95%] lg:p-2" placeholder="Password" />
                </div>
                <div className="flex flex-row w-80 justify-center p-1">
                    <span><motion.i onClick={handleEyePassword} whileTap={{ scale: 0.90 }} className={`fa-light fa-eye${seePasswrd? '' : '-slash'} text-xl lg:text-lg`}></motion.i></span>
                </div>

                <motion.button type="submit" whileTap={{ scale: 0.70 }} className="bg-black text-white w-40 p-1 rounded-lg text-lg my-2 lg:w-60 lg:text-xl lg:my-4">Submit</motion.button>

                <Link to="/register" className="text-lg my-2 underline">No account?</Link>
            </form>
        </>

    );
}

export default SignInPage;