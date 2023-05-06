import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, getCartItems, incrementQty, removeItem } from '../../../../store/slice/cartSlice.js';
import { UserAuth } from '../../../../context/AuthContext.jsx';
import axios from 'axios';

const CartDrawer = ({activate, closing}) =>{

    const { user } = UserAuth();
    
    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.cart.cartItems)

    const [activeDrawer, setDrawer] = useState(false); // state of the drawer
    const [activeBlackScreen, setBlackScreen] = useState(false); // state of the black screen behind the drawer
    

    // handle the click to close the drawer
    const HandleCloseDrawer = () => {
        setDrawer(activeDrawer => !activeDrawer)
        setTimeout(() => {
            closing(activeDrawer => !activeDrawer)
        },300)
    }

    // handle the minus
    const handleQuantityMinus = (item) => {

        const token = Cookies.get('fit-user') || Cookies.get('fit-customer')

        dispatch(decrementQty(item))

        axios.put('http://localhost:3001/cart/modify-item',{
            prodct_id: item._id,
            modif_action: 'decrement'
        },
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        })
        .then(resp => {
            console.log(resp.data.msg)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    // handle the plus
    const handleQuantityPlus = (item) => {

        const token = Cookies.get('fit-user') || Cookies.get('fit-customer')

        dispatch(incrementQty(item))

        axios.put('http://localhost:3001/cart/modify-item',{
            prodct_id: item._id,
            modif_action: 'increment'
        },
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        })
        .then(resp => {
            console.log(resp.data.msg)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    // handle the delete item from the cart
    const handleItemDelete = (item) => {

        const token = Cookies.get('fit-user') || Cookies.get('fit-customer')
        const hashID = Cookies.get('fit-hash') || user._id

        dispatch(removeItem(item))

        axios.delete('http://localhost:3001/cart/remove-item',{
            data: {
                cartID: hashID,
                prodct_id: item._id
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        .then(resp => {
            if(resp){
                console.log(resp)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setBlackScreen(activate)
        setTimeout(() => {
            setDrawer(activate)
        },100)
    },[activate])

    useEffect(() => {
        dispatch(getCartItems(user));
    }, [user])

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
                        {
                            cartItems.length === 0?
                            <div className="flex flex-col justify-around h-40 lg:justify-center lg:items-center">
                                <h2 className="text-3xl lg:text-3xl md:text-4xl lg:text-center lg:mb-2">Your cart is empty</h2>
                                <motion.button onClick={HandleCloseDrawer} whileTap={{ scale: 0.90 }} className="p-2 mx-auto my-1 text-lg text-white rounded-xl bg-black lg:text-xl md:text-2xl"><Link to="/shop">go back shopping</Link></motion.button>
                            </div>
                            :
                                cartItems.map((prodct,i) => (
                                    <div key={i} className="flex flex-row justify-around items-center w-full p-2 my-2">
                                        <div className="w-2/6 h-[100px]">
                                            <img src={prodct.img} alt="product image" width="100" height="100" className="w-full h-full border border-black rounded-xl object-cover object-center lg:w-[120px]" />
                                        </div>

                                        <div className="flex flex-col justify-center items-center w-1/4 lg:w-2/4">
                                            <span className="text-center mb-2 lg:text-xl">{prodct.name}</span>
                                            <p className="text-sm lg:text-base">{prodct.price}$</p>
                                            
                                        </div>
                                        
                                        <div className="flex flex-col justify-around items-center w-1/6 mx-3 lg:mx-0">
                                            <div className="w-full flex flex-row justify-around items-center mb-2">
                                                <i onClick={() => handleQuantityMinus(prodct)} className="fa-solid fa-chevron-left text-sm p-1 cursor-pointer lg:text-lg"></i>
                                                <span className="text-lg p-1 lg:text-xl">{prodct.qty}</span>
                                                <i onClick={() => handleQuantityPlus(prodct)} className="fa-solid fa-chevron-right text-sm p-1 cursor-pointer lg:text-lg"></i>
                                            </div>
                                            <div className="w-full flex flex-row justify-center items-center">
                                                <i onClick={() => handleItemDelete(prodct)} className="fa-regular fa-circle-xmark text-lg cursor-pointer lg:text-xl"></i>
                                            </div>
                                        </div>

                                    </div>
                                ))
                        }
                        {
                            cartItems.length === 0?
                            ''
                            :
                            <div className="w-full flex flex-row justify-center items-center">
                                <Link to="/checkoutpay"><motion.button whileTap={{ scale: 0.90 }} onClick={HandleCloseDrawer} className="bg-black text-white p-1 w-40 rounded-xl my-2 lg:w-60 lg:text-lg lg:my-3">Checkout</motion.button></Link>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </>

    );
}

export default CartDrawer;

// The object for when the cart is empty

