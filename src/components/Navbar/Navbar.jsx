import { useState } from 'react';
import { motion } from 'framer-motion';
import CartDrawer from '../cart_drawer/CartDrawer';

const Navbar = () => {

    const [navMenu, setNavMenu] = useState(false);// state of the nav menu tabs
    const [activeCart, setCart] = useState(false);// state of the cart drawer

    // handle the click of the hamburger icon
    const HandleMenuClick = () => {
        setNavMenu(navMenu => !navMenu)
    }

    // handle the click of the cart icon
    const HandleCartClick = () => {
        setCart(activeCart => !activeCart)
    }

    // ternary for to toggle the menu
    let toggleNavMenu = navMenu ? 'left-0' : '-left-full';

    return(
        <>
            <nav className="grid lg:grid-cols-3 grid-cols-3 p-3 border-b-2 border-black z-10 md:p-4">
                <div className="ml-1 self-center lg:hidden">
                    <motion.i whileTap={{ scale: 0.70 }} className="fa-sharp fa-solid fa-bars text-3xl md:text-4xl" onClick={HandleMenuClick}></motion.i>
                </div>
                <div className="text-center lg:justify-self-start lg:ml-6">
                    <h1 className="text-4xl lg:text-6xl md:text-5xl">.FIT</h1>
                </div>

                <div className={`
                    absolute 
                    top-16 
                    ${toggleNavMenu} 
                    duration-300 
                    border-2 
                    border-black 
                    rounded-tr-lg 
                    rounded-b-lg 
                    p-1 
                    w-2/3
                    md:top-20
                    md:w-2/4
                    lg:w-full
                    lg:static 
                    lg:flex 
                    lg:flex-cols 
                    lg:top-0
                    lg:p-0 
                    lg:border-0  
                    `
                }>
                    <div className="flex justify-end w-full lg:hidden">
                        <i className="fa-sharp fa-solid fa-xmark mr-2 text-2xl md:text-4xl md:mr-4" onClick={HandleMenuClick}></i>
                    </div>
                    <ul className="flex flex-col justify-center lg:flex-row lg:justify-around lg:w-full">
                        <motion.li whileTap={{ scale: 0.85 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer">Menu</motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer">Shop</motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer">About</motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} className="mt-2 mb-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:p-0 lg:my-auto cursor-pointer">Contact</motion.li>
                        <li><i className="pl-4 mb-4 fa-solid fa-user text-xl md:text-2xl lg:hidden"></i></li>
                    </ul>
                </div>
                <div className="lg:block hidden lg:flex lg:flex-row lg:justify-between lg:my-auto">
                    <motion.i whileTap={{ scale: 0.90 }} className="fa-solid fa-user text-3xl cursor-pointer"></motion.i>
                    <motion.i whileTap={{ scale: 0.90 }} className="fa-regular fa-cart-shopping text-4xl hidden lg:inline lg:mr-20 cursor-pointer" onClick={(e) => HandleCartClick(e)}></motion.i>
                </div>
                <div className="mr-1 justify-self-end self-center lg:hidden">
                    <motion.i whileTap={{ scale: 0.90 }} className="fa-regular fa-cart-shopping text-3xl md:text-4xl" onClick={HandleCartClick}></motion.i>
                </div>
            </nav>
            <CartDrawer activate={activeCart} func={HandleCartClick} />
        </>

    );
}

export default Navbar;