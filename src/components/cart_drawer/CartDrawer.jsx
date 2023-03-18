import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CartDrawer = ({activate}) =>{

    const [activeDrawer, setDrawer] = useState(false); // state of the drawer

    // handle the click to close the drawer
    const HandleCloseDrawer = () => {
        setDrawer(activeDrawer => !activeDrawer)
    }

    useEffect(() => {
        setDrawer(activate)
    },[activate])

    // will fetch the choosen products from the database
    // if there's nothing the drawer will give the possibility to go to the shop
    //  -> and the user will see a 'Cart Empty' message

    // ternary to toggle or not the drawer
    let toggleCartDrawer = activeDrawer? '' : '-top-full';

    return(
        <>
            <div className={`absolute right-0 ${toggleCartDrawer} h-5/6 w-3/4 border-2 border-black rounded-tl-lg rounded-b-lg duration-300`}>
                <div className="relative">
                    <motion.i whileTap={{ scale: 0.70 }} className="fa-sharp fa-solid fa-xmark text-2xl ml-3" onClick={HandleCloseDrawer}></motion.i>
                </div>
                <div className="flex flex-row justify-center items-center h-full w-full">
                    <div className="flex flex-col justify-around h-40">
                        <h2 className="text-3xl">Your cart is empty</h2>
                        <motion.button whileTap={{ scale: 0.90 }} className="p-2 mx-auto my-1 text-lg text-white rounded-xl bg-black ">go back shopping</motion.button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartDrawer;