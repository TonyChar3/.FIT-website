import { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import CartDrawer from './Cart/cart_drawer/CartDrawer';
import { UserAuth } from '../../context/AuthContext';
import { useSelector } from 'react-redux';
import AlertModal from '../modal/modal';
import CookieConsent from 'react-cookie-consent';

const Navbar = () => {

    const { user, setCookieConsent } = UserAuth();// logged in from AuthContext

    const cartCounter = useSelector(state => state.cart.amount);

    const [open_nav_menu, setOpenNavMenu] = useState(false);// state of the nav menu tabs
    const [open_cart, setOpenCart] = useState(false);// state of the cart drawer

    return(
        <>
            {/* Navigation menu */}
            <nav className="grid lg:grid-cols-3 grid-cols-3 p-3 sticky z-10 top-0 left-0 w-full border-b-2 border-black bg-white md:p-4">
                <div className="ml-1 self-center lg:hidden">
                    <i onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)} className={`fa-sharp fa-solid fa-${open_nav_menu? 'xmark' : 'bars'} text-3xl md:text-4xl ${open_nav_menu? 'rotate-180' : ''} duration-300`}></i>
                </div>
                <div className="text-center lg:justify-self-start lg:ml-6">
                    <h1 className="text-4xl lg:text-6xl md:text-5xl"><Link to="/">.FIT</Link></h1>
                </div>

                <div className={`
                    absolute 
                    top-16 
                    ${open_nav_menu ? 'left-0' : '-left-full'} 
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
                        <li className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer active:scale-[0.85] hover:scale-[1.1] transform-all ease duration-100">
                            <NavLink to="/" onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)}>Home</NavLink>
                        </li>
                        <li className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer active:scale-[0.85] hover:scale-[1.1] transform-all ease duration-100">
                            <NavLink to="/shop" onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)}>Shop</NavLink>
                        </li>
                        <li className="my-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:px-1 lg:my-auto cursor-pointer active:scale-[0.85] hover:scale-[1.1] transform-all ease duration-100">
                            <NavLink to="/about" onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)}>About</NavLink>
                        </li>
                        <li className="mt-2 mb-2 p-1 text-center text-2xl md:text-3xl lg:text-4xl lg:p-0 lg:my-auto cursor-pointer active:scale-[0.85] hover:scale-[1.1] transform-all ease duration-100">
                            <NavLink to="/contact" onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={user !== null ? '/profile' : '/login'} onClick={() => setOpenNavMenu(open_nav_menu => !open_nav_menu)} className="lg:hidden">
                                <i className="pl-4 fa-solid fa-user text-xl md:text-2xl"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="lg:block hidden lg:flex lg:flex-row lg:justify-between lg:my-auto">
                    <Link to={user !== null? '/profile' : '/login'}><i className="fa-solid fa-user text-3xl cursor-pointer active:scale-[0.90] hover:scale-[1.1] transform-all ease duration-100"></i></Link>
                    <i onClick={() => setOpenCart(open_cart => !open_cart)} className="fa-regular fa-cart-shopping text-4xl hidden lg:inline lg:mr-20 cursor-pointer active:scale-[0.90] hover:scale-[1.1] transform-all ease duration-100"></i>
                    <span className="lg:absolute lg:right-[4%] lg:top-3 lg:text-xl lg:p-1 lg:rounded-xl">{cartCounter}</span>
                </div>
                <div className="mr-1 justify-self-end self-center lg:hidden">
                    <i className="fa-regular fa-cart-shopping text-3xl md:text-4xl active:scale-[0.90] hover:scale-[1.1] transform-all ease duration-100" onClick={() => setOpenCart(open_cart => !open_cart)}></i>
                    <span className="absolute right-[.1em] top-0 text-xl p-1 rounded-xl">{cartCounter}</span>
                </div>
                <AlertModal />
            </nav>
            {/* Cart */}
            <CartDrawer activate={open_cart} closing={() => setOpenCart(open_cart => !open_cart)} />
            <div className={`${open_nav_menu? 'bg-black absolute h-full w-full bg-opacity-25 transform-all ease duration-300 lg:hidden' : 'hidden' }`}></div>
            {/* Route Outlet */}
            <Outlet />
            {/* Cookie consent pop-up */}
            <CookieConsent
                location='bottom'
                enableDeclineButton
                buttonText="Accept"
                buttonStyle={{ backgroundColor: 'white', borderRadius: '15px' }}
                declineButtonStyle={{ borderRadius: '15px' }}
                declineButtonText="Decline"
                style={{ backgroundColor: 'black', border: '2px solid white' }}
                onAccept={() => setCookieConsent(true)}
                onDecline={() => setCookieConsent(false)}
            >
            This website uses cookies to enhance the user experience.
            Read our <Link to="/policy" className="underline">privacy policy</Link>
            </CookieConsent>             
        </>
    );
}

export default Navbar;