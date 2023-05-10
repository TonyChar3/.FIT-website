import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ErrorCheckoutPage = () => {
    return(
        <>
            <div className="flex flex-col justify-center items-center p-2 w-full h-[60vh]">
                <div className="flex flex-row justify-center w-full">
                    <h2 className="text-3xl">OoOps...</h2>
                </div>
                <p className="text-center my-2 text-lg">
                    Something went wrong, please try again or contact
                    support for assistance.
                </p>
                <motion.button whileTap={{ scale: 0.70 }} className="bg-black text-white p-1 w-60 my-3 rounded-lg text-lg"><Link to="/">Go back to Menu</Link></motion.button>
            </div>
        </>
    );
}

export default ErrorCheckoutPage;