import { useEffect, useState } from 'react';
import { UserAuth } from '../../../../context/AuthContext';
import { motion } from 'framer-motion';
import WishList from '../Wishlist/wishlist';
import axios from 'axios';

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
        localStorage.removeItem(`${user._id}`)
        window.location.reload();
    }

    // handle the edit event
    const handleEdit = () => {
        setEdit(edit => !edit);
    }

    // handle cancel event
    const handleCancel = (e) => {
        e.preventDefault();
        setEdit(edit => !edit);
        setName('');
        setEmail('');
        setPasswd('');
        setConfirm('');
    }

    // handle the email change
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    // handle the username change
    const handleUserName = (e) => {
      
        setName(e.target.value)
    }

    // handle the password change
    const handlePassword = (e) => {
        setPasswd(e.target.value)
    }
    
    // handle the confirm password
    const handleConfirm = (e) => {
        setConfirm(e.target.value)
    }


    // handle the save of the updated profile
    const saveUpdate = async(e) => {
       e.preventDefault();
        const token = localStorage.getItem('jwtToken')

        try{ 
            
            const res = await axios.put('http://localhost:3001/user/update', {
                u_id: user._id,
                u_name: newName,
                u_email: newEmail,
                u_password: newPasswd,
                u_confirmPasswd: confirm
            }, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `${token}`
                }
            });
            
            if(res){
                console.log(res.data.msg);
                setEdit(edit => !edit);
            }

        } catch(error){
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        setName(newName)

        setEmail(newEmail)

        setPasswd(newPasswd)

        setConfirm(confirm)
    },[newName, newEmail, newPasswd, confirm])

    return(
        <>        
            <form onSubmit={saveUpdate} className="w-full h-[55vh] flex  flex-col justify-center items-center p-5 lg:my-4">
                <div className="w-full flex justify-center my-2 lg:my-4">
                    <h2 className="text-3xl lg:text-5xl">User profile</h2>
                </div>
                <div className="w-full flex justify-center items-center my-2 my-4">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="text" 
                    name="username" 
                    value={newName} 
                    placeholder={user.username} 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl ${edit? 'placeholder-black' : 'bg-black placeholder-white text-white'}`}
                    onChange={handleUserName}
                    />
                </div>
                <div className="w-full flex justify-center items-center my-2 my-4">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="email" 
                    name="username" 
                    value={newEmail} 
                    placeholder={user.email} 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={handleEmail}
                    />
                </div>
                <div className="w-full flex justify-center items-center mt-6 lg:mt-9">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="password" 
                    name="password"
                    value={newPasswd} 
                    placeholder="Change Password" 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={handlePassword}
                    />
                </div>
                <div className="w-full flex justify-center items-center my-2 my-4">
                    <motion.input 
                    whileHover={{ scale: 1.1 }} 
                    whileFocus={{ scale: 1.1 }} 
                    type="password"
                    value={confirm} 
                    name="confirm-password"  
                    placeholder="Confirm Password" 
                    disabled={edit? '': 'disabled'} 
                    className={`w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl ${edit? 'placeholder-black' : 'bg-black placeholder-white'}`}
                    onChange={handleConfirm}
                    />
                </div>
                <div className={`w-full flex flex-row justify-center my-3 ${edit? 'hidden' : ''}`}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={() => handleEdit()} className="bg-white border-2 border-black text-black text-lg p-1 w-20 rounded-2xl lg:w-40 lg:p-2 lg:text-xl">Edit</motion.button>
                </div>
                <div className={`w-full flex flex-row justify-around my-6 lg:w-80 ${edit? '' : 'hidden'}`}>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="submit" className="bg-green-500 text-white p-1 w-20 rounded-2xl lg:p-2 lg:text-lg">Save</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={(e) => handleCancel(e)} className="bg-red-500 text-white p-1 w-20 rounded-2xl lg:p-2 lg:text-lg">Cancel</motion.button>
                </div>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.90 }} type="button" onClick={() => LogOut()} className="hover:text-red-500 text-xl mt-2 lg:my-4">Logout<i className="fa-solid fa-right-from-bracket ml-2"></i></motion.button>
            </form>
            <WishList />
        </>

    );
}

export default ProfilePage;