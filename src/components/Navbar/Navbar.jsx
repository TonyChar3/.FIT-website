import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CartDrawer from './Cart/cart_drawer/CartDrawer';
import { UserAuth } from '../../context/AuthContext';
import { useSelector } from 'react-redux';
import AlertModal from '../modal/modal';

const Navbar = () => {

    const { user } = UserAuth();// logged in from AuthContext

    const cartCounter = useSelector(state => state.cart.amount);

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
            <nav className="grid lg:grid-cols-3 grid-cols-3 p-3 sticky z-10 top-0 left-0 w-full border-b-2 border-black bg-white md:p-4">
                <div className="ml-1 self-center lg:hidden">
                    <i onClick={HandleMenuClick} className={`fa-sharp fa-solid fa-${navMenu? 'xmark' : 'bars'} text-3xl md:text-4xl ${navMenu? 'rotate-180' : ''} duration-300`}></i>
                </div>
                <div className="text-center lg:justify-self-start lg:ml-6">
                    <h1 className="text-4xl lg:text-6xl md:text-5xl"><Link to="/">.FIT</Link></h1>
                </div>

                <div className={`
                    absolute 
                    top-16 
                    ${toggleNavMenu} 
                    duration-700 
                    border-2 
                    border-black 
                    rounded-tr-lg 
                    rounded-b-lg 
                    p-1 
                    w-2/3
                    bg-white
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
                    <ul className="flex flex-col justify-center my-2 lg:my-0 lg:flex-row lg:justify-around lg:w-full">
                        <motion.li whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.1 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer"><Link to="/">Home</Link></motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.1 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer"><Link to="/shop">Shop</Link></motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.1 }} className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer"><Link to="/about">About</Link></motion.li>
                        <motion.li whileTap={{ scale: 0.85 }} whileHover={{ scale: 1.1 }} className="mt-2 mb-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:p-0 lg:my-auto cursor-pointer"><Link to="/contact">Contact</Link></motion.li>
                        <li><Link to={user? '/profile' : '/login'}><i className="pl-4 fa-solid fa-user text-xl md:text-2xl lg:hidden"></i></Link></li>
                    </ul>
                </div>
                <div className="lg:block hidden lg:flex lg:flex-row lg:justify-between lg:my-auto">
                    <Link to={user? '/profile' : '/login'}><motion.i whileTap={{ scale: 0.90 }} whileHover={{ scale: 1.1 }} className="fa-solid fa-user text-3xl cursor-pointer"></motion.i></Link>
                    <motion.i whileTap={{ scale: 0.90 }} whileHover={{ scale: 1.1 }} className="fa-regular fa-cart-shopping text-4xl hidden lg:inline lg:mr-20 cursor-pointer" onClick={(e) => HandleCartClick(e)}></motion.i>
                    <span className="lg:absolute lg:right-[4%] lg:top-3 lg:text-xl lg:p-1 lg:rounded-xl">{cartCounter}</span>
                </div>
                <div className="mr-1 justify-self-end self-center lg:hidden">
                    <motion.i whileTap={{ scale: 0.90 }} className="fa-regular fa-cart-shopping text-3xl md:text-4xl" onClick={HandleCartClick}></motion.i>
                    <span className="absolute right-[.1em] top-0 text-xl p-1 rounded-xl">{cartCounter}</span>
                </div>
                <AlertModal />
            </nav>
            <CartDrawer activate={activeCart} closing={HandleCartClick} />
            <Outlet />
        </>
    );
}

export default Navbar;