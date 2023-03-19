import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CartDrawer = ({activate, closing}) =>{

    const [activeDrawer, setDrawer] = useState(false); // state of the drawer
    const [activeBlackScreen, setBlackScreen] = useState(false); // state of the black screen behind the drawer

    // handle the click to close the drawer
    const HandleCloseDrawer = () => {
        setDrawer(activeDrawer => !activeDrawer)
        setTimeout(() => {
            closing(activeDrawer => !activeDrawer)
        },300)
    }

    useEffect(() => {
        setBlackScreen(activate)
        setTimeout(() => {
            setDrawer(activate)
        },100)
    },[activate])

    // will fetch the choosen products from the database
    // if there's nothing the drawer will give the possibility to go to the shop
    //  -> and the user will see a 'Cart Empty' message

    // ternary to toggle or not the drawer
    let toggleCartDrawer = activeDrawer? 'right-0' : '-right-full';

    // ternary to toggle or no the black screen behind the drawer
    let toggleBlackScreen = activeBlackScreen? 'bg-black bg-opacity-25' : 'hidden';

    return(
        <>
            <div className={`fixed ${toggleBlackScreen} z-20 h-[91%] w-full duration-700`}>
                <div className={`absolute ${toggleCartDrawer} z-10 h-[98%] w-3/4 border-2 border-black rounded-tl-lg rounded-b-lg duration-700 bg-white lg:w-2/4`}>
                    <div className="">
                        <motion.i whileTap={{ scale: 0.70 }} className="fa-sharp fa-solid fa-xmark text-3xl ml-4 p-1 cursor-pointer lg:text-5xl md:text-4xl" onClick={HandleCloseDrawer}></motion.i>
                    </div>
                    <div className="flex flex-row justify-center items-center h-full w-full">
                        <div className="flex flex-col justify-around h-40">
                            <h2 className="text-3xl lg:text-5xl md:text-4xl">Your cart is empty</h2>
                            <motion.button whileTap={{ scale: 0.90 }} className="p-2 mx-auto my-1 text-lg text-white rounded-xl bg-black lg:text-2xl md:text-2xl">go back shopping</motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartDrawer;