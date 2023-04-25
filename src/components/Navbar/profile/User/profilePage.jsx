import { useEffect, useState } from 'react';
import { UserAuth } from '../../../../context/AuthContext';
import { motion } from 'framer-motion';

const ProfilePage = () => {

    // User auth Context
    const { user } = UserAuth();
   
    const [edit, setEdit] = useState(false);// set editing mode
    const [newName, setName] = useState('');// New username state
    const [newEmail, setEmail] = useState('');// New email state
    const [newPasswd, setPasswd] = useState('');// New password state
    const [confirm, setConfirm] = useState('');// Confirm the password
    const [error, setError] = useState('');// error
    
    // handle the user log out
    const LogOut = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    // handle the edit event
    const handleEdit = () => {
        setEdit(edit => !edit);
    }

    // handle the email change
    const handleEmail = (e) =>{
        setEmail(e)
    }

    // handle the username change
    const handleUserName = (e) => {
        setName(e)
    }

    // handle the password change
    const handlePassword = (e) => {
        setPasswd(e)
    }
    
    // handle the confirm password
    const handleConfirm = (e) => {
        setConfirm(e)
    }

    // handle the save of the updated profile


    return(
        <>        
            <form className="w-full h-[61vh] flex  flex-col justify-center items-center p-5">
                <div className="w-full flex justify-center my-2">
                    <h2 className="text-3xl">User profile</h2>
                </div>
                <div className="w-full flex justify-center items-center my-2">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="text" 
                    name="username" 
                    value={newName} 
                    placeholder={user.username} 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={(e) => handleUserName(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center items-center my-2">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="email" 
                    name="username" 
                    value={newEmail} 
                    placeholder={user.email} 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black  ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={(e) => handleEmail(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center items-center mt-6">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="password" 
                    name="password" 
                    value={newPasswd} 
                    placeholder="Change Password" 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={(e) => handlePassword(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center items-center my-2">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="password" 
                    name="confirm-password" 
                    value={confirm} 
                    placeholder="Confirm Password" 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={(e) => handleConfirm(e.target.value)}
                    />
                </div>
                <div className={`w-full flex flex-row justify-center my-3 ${edit? 'hidden' : ''}`}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={() => handleEdit()} className="bg-white border-2 border-black text-black text-lg p-1 w-20 rounded-2xl">Edit</motion.button>
                </div>
                <div className={`w-full flex flex-row justify-around my-6 ${edit? '' : 'hidden'}`}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="submit" className="bg-green-500 text-white p-1 w-20 rounded-2xl">Save</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={() => handleEdit()} className="bg-red-500 text-white p-1 w-20 rounded-2xl">Cancel</motion.button>
                </div>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={() => LogOut()} className="hover:text-red text-xl my-2">Logout<i className="fa-solid fa-right-from-bracket ml-2"></i></motion.button>
            </form>
        </>

    );
}

export default ProfilePage;