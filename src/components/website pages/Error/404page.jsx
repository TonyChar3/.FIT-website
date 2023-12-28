import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Error404Page = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }} 
                className="w-full h-full flex flex-row justify-center items-center border-2 border-black"
            >
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="text-6xl my-6">Error 404</h2>
                    <Link to="/" className="bg-[#E94E77] p-3 text-xl text-white rounded-xl active:scale-[0.90] transform-all ease duration-300">
                        Go back to safety
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

export default Error404Page;