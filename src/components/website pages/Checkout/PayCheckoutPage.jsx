import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../../store/slice/cartSlice';
import { showModal, closeModal } from '../../../store/slice/modalSlice';
import { checkOutStripe } from '../../../utils/checkoutUtils';

const PayCheckoutPage = () => {

    const dispatch = useDispatch();// use the cart redux stores functions

    const cartItems = useSelector(store => store.cart.cartItems);
    const cartTotal = useSelector(store => store.cart.total);
   
    // handle the stripe checkout session
    const handleCheckout = async() => {
        try{
            let items_array = [];
            // get the info needed
            cartItems.forEach(item => {
                items_array.push({
                    _id:item._id,
                    stripe_ID: item.stripe_ID,
                    qty: item.qty
                })
            });
            // checkout
            const checkout = await checkOutStripe(items_array)
            if(checkout){
                window.location.href = checkout
            }
        } catch(err){
            dispatch(showModal(err.message))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        }
    }

    useEffect(() => {
        dispatch(getCartItems())
    },[dispatch])
 
    return(
        <>
            <div 
                className="flex flex-col justify-center items-center mb-[50px] h-full"
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className={`flex flex-row w-full justify-center p-1 mt-5 lg:mt-10 lg:p-4 ${cartItems.length === 0? 'hidden' : ''}`}>
                    <h2 className="text-3xl lg:text-5xl">Order summary</h2>
                </div>
                <div className={`flex flex-col mt-3 items-center p-3 my-2 w-[95%] h-[80%] overflow-y-auto border border-black rounded-lg lg:w-1/2 lg:p-5 lg:border-2 ${cartItems.length === 0? 'hidden' : ''}`}>
                    {
                        cartItems.length === 0?
                        ''
                        :
                        cartItems.map((prodct,i) => (
                            <div key={i} className="flex flex-row justify-between items-center my-2 lg:w-[80%] w-full">
                                <div className="w-2/6 h-[100px] lg:h-[160px]">
                                    <motion.img whileHover={{ scale: 1.2 }} src={prodct.img} alt="image product" width="100" height="100" className="w-full h-full border border-black object-cover object-center rounded-xl" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-2/4">
                                    <h3 className="text-lg text-center lg:text-2xl">{prodct.name}</h3>
                                    <h4 className="text-sm text-center lg:text-xl">{prodct.price}$</h4>
                                </div>
                                
                                <div className="flex flex-col justify-between items-center w-1/4">
                                    <span className="flex flex-row text-lg p-1 lg:text-2xl">qty:<h3 className="ml-2">{prodct.qty}</h3></span>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={`w-full flex flex-col justify-center items-center ${cartItems.length === 0? '' : 'hidden'}`}>
                    <h2 className="text-3xl mb-4 lg:text-6xl lg:mb-6">Your cart is empty</h2>
                    <Link to="/shop"><motion.button whileTap={{ scale: 0.90 }} className="bg-black text-white text-lg lg:text-2xl p-2 rounded-xl">Go back to the shop</motion.button></Link>
                </div>

                <div className={`flex flex-col justify-center items-center ${cartItems.length === 0? 'hidden' : ''}`}>
                    <h3 className="text-xl p-1 lg:text-2xl lg:p-2">Total:</h3>
                    <p className="text-2xl lg:text-3xl">{cartTotal.toFixed(2)}$</p>
                </div>
                <motion.button whileTap={{ scale: 0.70 }} onClick={() => handleCheckout()} className={`p-1 bg-black text-white w-40 rounded-lg my-3 lg:w-56 lg:text-xl lg:my-5 ${cartItems.length === 0? 'hidden' : ''}`}>Pay Now</motion.button>
            </div>
        </>
    );
}

export default PayCheckoutPage;