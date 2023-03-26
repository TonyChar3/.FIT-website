import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const PayCheckoutPage = () => {
    return(
        <div className="flex flex-col justify-center items-center mb-[50px] h-[55vh]">
            <div className="flex flex-row w-full justify-center p-1 mt-5 lg:mt-10 lg:p-4">
                <h2 className="text-3xl lg:text-5xl">Your Cart</h2>
            </div>
            <div className="flex flex-row p-3 my-2 w-[95%] border border-black lg:w-1/2 lg:p-5 lg:border-2">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-center items-center justify-self-start">
                        <motion.img whileHover={{ scale: 1.2 }} src="/images/products/black-mi-band-smartwatch.jpg" alt="image product" width="100" height="100" className="border border-black object-cover object-center rounded-xl lg:w-[150px] lg:h-[150px]" />
                        <div className="flex flex-col justify-center items-center ml-5">
                            <h3 className="text-sm lg:text-lg">FIT smartwatch</h3>
                            <span className="text-sm lg:text-lg">Size</span>
                            <span className="text-sm lg:text-lg">Lime</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-[26%]">
                        <h4 className="text-lg lg:text-xl">Price$$</h4>
                        <motion.span whileTap={{ scale: 0.70 }}><i className="fa-sharp fa-solid fa-xmark text-xl lg:text-2xl"></i></motion.span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl p-1 lg:text-2xl lg:p-2">Total:</h3>
                <p className="text-2xl lg:text-3xl">Price $$</p>
            </div>
            <motion.button whileTap={{ scale: 0.70 }} className="p-1 bg-black text-white w-40 rounded-lg my-3 lg:w-56 lg:text-lg lg:my-5"><Link to="/success">Pay Now</Link></motion.button>
        </div>
    );
}

export default PayCheckoutPage;