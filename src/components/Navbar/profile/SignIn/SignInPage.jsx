import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserAuth } from '../../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { showModal, closeModal } from '../../../../store/slice/modalSlice.js';

const SignInPage = () => {

    // to redirect to another route
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // import Context user, LogIn function
    const { GoogleLogIn, FacebookLogIn, user }= UserAuth();

    // handle the log in
    const GoogleSignIn = async(e) => {
        e.preventDefault();
        try{
            await GoogleLogIn();
        }catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    };

     // handle the log in
    const FacebookSignIn = async(e) => {
        e.preventDefault();
        try{
            // call the facebook login
            await FacebookLogIn();
        }catch(err){
            dispatch(showModal(err))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    };

    useEffect(() => {
        if(user){
            navigate('/profile')
        }
    },[user]);


    return(
        <>
            <motion.div
                className="flex flex-col w-full h-[100%] justify-center items-center"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className="w-full h-auto flex flex-col justify-center items-center">
                    <div className="w-full text-center flex flex-col justify-center p-2">
                        <h2 className="text-4xl lg:text-6xl">Connect.</h2>
                        <h3 className="text-lg">become a official .FIT client</h3>
                    </div>
                    <div onClick={GoogleSignIn} className="flex flex-row justify-center items-center bg-black text-white w-[65%] p-4 lg:p-4 rounded-lg lg:w-60 my-4 cursor-pointer active:scale-[0.90] transform-all ease duration-100">
                        <span className="w-1/2 flex flex-row justify-end items-center"> 
                            <h3 className="text-2xl">Google</h3>
                        </span>
                        <span className="w-1/2 flex flex-row justify-end items-center">
                            <i className="fa-brands fa-google text-3xl"></i>
                        </span>
                    </div>
                    <div onClick={FacebookSignIn} className="flex flex-row justify-center items-center bg-black text-white w-[65%] p-4 rounded-lg lg:w-60 my-4 cursor-pointer active:scale-[0.90] transform-all ease duration-100">
                        <span className="w-1/2 flex flex-row justify-end items-center"> 
                            <h3 className="text-2xl">Facebook</h3>
                        </span>
                        <span className="w-1/2 flex flex-row justify-end items-center">
                            <i className="fa-brands fa-facebook text-3xl"></i>
                        </span>
                    </div>
                </div>
                <div className="lg:w-[30%] my-4">
                    <p className="text-center text-lg lg:text-xl">
                        <span className="font-bold">.FIT</span> users have access to our <span className="underline">weekly newsletter</span>, <span className="underline">monthly deals</span> and much much more!
                        You will also have access to a wishlist option and NEVER see your cart disappear.
                    </p>
                </div>
            </motion.div>
        </>
    );
}

export default SignInPage;