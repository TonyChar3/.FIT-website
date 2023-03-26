import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CartDrawer = ({activate, closing}) =>{

    const [activeDrawer, setDrawer] = useState(false); // state of the drawer
    const [activeBlackScreen, setBlackScreen] = useState(false); // state of the black screen behind the drawer
    const [quantity, setQuantity] = useState(0);// state of the quantity counter of a selected item in the cart

    // handle the click to close the drawer
    const HandleCloseDrawer = () => {
        setDrawer(activeDrawer => !activeDrawer)
        setTimeout(() => {
            closing(activeDrawer => !activeDrawer)
        },300)
    }

    // handle the minus
    const handleQuantityMinus = () => {
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }

    // handle the plus
    const handleQuantityPlus = () => {
        setQuantity(quantity + 1);
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
                <div className={`absolute ${toggleCartDrawer} z-10 h-[98%] w-3/4 border-2 border-black rounded-tl-lg rounded-b-lg duration-700 bg-white lg:w-1/4`}>
                    <div className="">
                        <motion.i whileTap={{ scale: 0.70 }} className="fa-sharp fa-solid fa-xmark text-3xl ml-4 p-1 cursor-pointer lg:text-4xl md:text-4xl" onClick={HandleCloseDrawer}></motion.i>
                    </div>
                    <div className="flex flex-col justify-around items-center w-full lg:w-3/4 lg:mx-auto my-1">

                        <div className="flex flex-row justify-around items-center w-full p-2 my-1">
                            <img src="/images/products/black-mi-band-smartwatch.jpg" alt="product image" width="100" height="100" className="border border-black rounded-xl lg:w-[120px]" />
                        
                            <div className="flex flex-row justify-around items-center w-12 mx-3">
                                <i onClick={handleQuantityMinus} className="fa-sharp fa-solid fa-minus text-sm p-1 cursor-pointer"></i>
                                <span className="text-xl p-1">{quantity}</span>
                                <i onClick={handleQuantityPlus} className="fa-sharp fa-solid fa-plus-large text-sm p-1 cursor-pointer"></i>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-sm lg:text-lg">FIT smartwatch</span>
                                <p className="text-sm lg:text-base">Price$$</p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-around items-center w-full p-2 my-2">
                            <img src="/images/products/black-mi-band-smartwatch.jpg" alt="product image" width="100" height="100" className="border border-black rounded-xl lg:w-[120px]" />
                        
                            <div className="flex flex-row justify-around items-center w-12 mx-3">
                                <i onClick={handleQuantityMinus} className="fa-sharp fa-solid fa-minus text-sm p-1"></i>
                                <span className="text-xl p-1">{quantity}</span>
                                <i onClick={handleQuantityPlus} className="fa-sharp fa-solid fa-plus-large text-sm p-1"></i>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-sm lg:text-lg">FIT smartwatch</span>
                                <p className="text-sm lg:text-base">Price$$</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CartDrawer;

// The object for when the cart is empty

{/* <div className="flex flex-col justify-around h-40">
<h2 className="text-3xl lg:text-5xl md:text-4xl">Your cart is empty</h2>
<motion.button onClick={HandleCloseDrawer} whileTap={{ scale: 0.90 }} className="p-2 mx-auto my-1 text-lg text-white rounded-xl bg-black lg:text-2xl md:text-2xl"><Link to="/shop">go back shopping</Link></motion.button>
</div> */}