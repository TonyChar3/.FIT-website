import { UserAuth } from '../../../../context/AuthContext';
import { motion } from 'framer-motion';
import WishList from './Wishlist/wishlist';
import { useState, useEffect } from 'react';

const ProfilePage = () => {
    // User auth Context
    const { user, LogOut } = UserAuth();

    const [profile_img, setProfileImg] = useState(null); 
    const [facebook_user_name, setFacebookUserName] = useState('');
    // handle the user log out
    const logOutUser = async() => {
        try{
            await LogOut()
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        if(user.photos){
            setProfileImg(user.photos[0].value)
        } else {
            const username = user.name.givenName + ' ' + user.name.familyName
            setProfileImg('https://res.cloudinary.com/dskpbps9l/image/upload/v1701657393/ProductsImage/user-solid_tlhk4d.svg');
            setFacebookUserName(username);
        }
    },[user])

    return(
        <>        
            <motion.div 
                className={`w-full min-h-[100%] flex flex-col justify-center items-center p-5`}

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className="w-full flex justify-center my-2 lg:my-4">
                    <h2 className="text-3xl lg:text-5xl">User profile</h2>
                </div>
                <img src={`${profile_img}`} alt="profile img" width={100} height={100} className="rounded-full"/>
                <div className="w-full flex justify-center items-center my-2 my-4">
                    <input 
                    type="text" 
                    name="username"  
                    placeholder={user.displayName || facebook_user_name} 
                    disabled='disabled' 
                    className="w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl bg-black placeholder-white text-white
                    active:scale-[1.1] hover:scale-[1.1] transform-all ease duration-100"
                    />
                </div>
                <div className="w-full flex justify-center items-center my-2 my-4">
                    <input 
                    type="email" 
                    name="username" 
                    placeholder={user.emails[0].value} 
                    disabled='disabled' 
                    className="w-60 p-1 rounded-lg border-2 border-black outline-none text-black lg:w-80 lg:p-2 lg:text-xl bg-black placeholder-white
                    active:scale-[1.1] hover:scale-[1.1] transform-all ease duration-100"
                    />
                </div>
                <button type="button" onClick={logOutUser} className="hover:text-red-500 text-xl mt-2 lg:my-4 active:scale-[0.90] hover:scale-[1.1] transform-all ease duration-100">Disconnect<i className="fa-solid fa-right-from-bracket ml-2"></i></button>
                <WishList/>
            </motion.div>
        </>
    );
}

export default ProfilePage;