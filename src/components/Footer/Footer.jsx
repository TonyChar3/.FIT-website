import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {

    const [arrowSocials, setSocials] = useState(false);// arrow Socials
    const [arrowMenu, setMenu] = useState(false);// arrow Menu
    const [arrowPolicy, setPolicy] = useState(false);// arrow Policy

    // handle the click of the arrow
    const handleArrowSocials = (e) => {
        e.preventDefault();

        setSocials(arrowSocials => !arrowSocials)
    }

    // handle the click of the arrow
    const handleArrowMenu = (e) => {
        e.preventDefault();

        setMenu(arrowMenu => !arrowMenu)
    }

    // handle the click of the arrow
    const handleArrowPolicy = (e) => {
        e.preventDefault();

        setPolicy(arrowPolicy => !arrowPolicy)
    }
    
    return(
        <>
            <Outlet />
            <div className=" lg:flex lg:flex-row lg:justify-around border-t-2 border-black">
                <div className="lg:flex lg:flex-col lg:my-[100px]">
                    <div className="flex flex-row justify-center items-center border-b-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start">
                        <div className="text-center w-1/4 z-10">
                            <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">Menu</h3>
                        </div>
                        <div className="flex justify-center ml-2 lg:hidden">
                            <i onClick={(e) => handleArrowMenu(e)} className={`fa-sharp fa-solid fa-chevron-${arrowMenu? 'down' : 'up'} text-xl`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-col justify-center items-center w-full p-2 ${arrowMenu? '' : 'hidden'} lg:flex`}>
                        <ul className={`relative w-full left-0 right-0 ${arrowMenu? '' : 'bottom-96 -z-10'} flex flex-col justify-center items-center lg:bottom-0 lg:items-start lg:z-0`}>
                            <motion.li whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/">Home</Link></motion.li>
                            <motion.li whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/shop">Shop</Link></motion.li>
                            <motion.li whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/contact">Contact us</Link></motion.li>
                            <motion.li whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/about">About</Link></motion.li>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex lg:flex-col lg:my-[100px]">
                    <div className={`flex z-10 flex-row justify-center items-center border-${ arrowMenu? 'y' : 'b' }-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start`}>
                        <div className="text-center w-1/4 ">
                            <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">Policy</h3>
                        </div>
                        <div className="flex justify-center ml-2 lg:hidden">
                            <i onClick={(e) => handleArrowPolicy(e)} className={`fa-sharp fa-solid fa-chevron-${arrowPolicy? 'down' : 'up'} text-xl `}></i>
                        </div>
                    </div>
                    <div className={`flex flex-col justify-center items-center w-full p-2 ${arrowPolicy? '' : 'hidden'} duration-300 lg:flex`}>
                        <ul className={`relative w-full left-0 right-0 ${arrowPolicy? '' : 'bottom-[450px] -z-10'} flex flex-col justify-center items-center duration-700 lg:bottom-0 lg:items-start lg:z-0`}>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.70 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/faq">Faq</Link></motion.li>
                            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.70 }} className="text-2xl my-1 lg:my-4 cursor-pointer"><Link to="/policy">Policy</Link></motion.li>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex lg:flex-col lg:my-[100px]">
                    <div className={`flex flex-row justify-center items-center border-${ arrowPolicy? 'y' : 'b' }-2 border-black p-5 lg:border-0 lg:p-0 lg:justify-start`}>
                        <div className="text-center w-1/4 z-10 mr-1">
                            <h3 className="text-3xl capitalize lg:text-4xl lg:my-2">Socials</h3>
                        </div>
                        <div className="flex justify-center ml-2 lg:hidden">
                            <i onClick={(e) => handleArrowSocials(e)} className={`fa-sharp fa-solid fa-chevron-${arrowSocials? 'down' : 'up'} text-xl`}></i>
                        </div>
                    </div>
                    <div className={`left-0 right-0 ${arrowSocials? '' : 'absolute top-96 -z-10'} flex flex-col justify-center items-center w-full p-2 lg:static lg:items-start lg:z-0`}>
                        <div className="flex flex-row justify-center w-full">
                            <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fa-brands fa-snapchat text-3xl mx-4 lg:my-4 lg:text-4xl cursor-pointer"></motion.i>
                            <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fa-brands fa-instagram text-3xl mx-4 lg:my-4 lg:text-4xl cursor-pointer"></motion.i>
                            <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fa-brands fa-tiktok text-3xl mx-4 lg:my-4 lg:text-4xl cursor-pointer"></motion.i>
                        </div>
                        <h4 className="text-xl my-1 lg:text-2xl lg:my-4"><i className="fa-regular fa-envelope lg:text-3xl lg:mr-2 lg:fa hidden sm:inline"></i>email@random.com</h4>
                        <h4 className="text-xl my-1 lg:text-2xl lg:my-4"><i className="fa-regular fa-phone lg:text-3xl lg:mr-2 lg:fa hidden sm:inline"></i>(444) 444-4444</h4>
                    </div>
                </div>

            </div>
            <div className="w-full bg-black text-center p-1 lg:p-2">
                    <span className="text-sm text-white lg:text-md">&copy;.FIT all rights reserved</span>
            </div>
        </>

    );
}

export default Footer;