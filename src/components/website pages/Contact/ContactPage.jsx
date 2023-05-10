import { motion } from 'framer-motion';

const ContactPage = () => {
    return(
        <>
            <motion.form 
                className="flex flex-col items-center justify-center mt-5 mb-[50px] lg:w-2/6 lg:mx-auto"
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className="w-full flex flex-row justify-center my-4 lg:justify-start">
                    <motion.input whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} type="text" className="p-2 w-60 border-[1px] border-black rounded-lg text-md outline-none lg:w-[70%] lg:p-3" placeholder="Your Name"/>
                </div >
                <div className="w-full flex flex-row justify-center my-4 lg:justify-start">
                    <motion.input whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }} type="email" className="p-2 w-60 border-[1px] border-black rounded-lg text-md outline-none lg:w-[70%] lg:p-3" placeholder="email@adress.com"/>
                </div>
                <div className="w-full flex flex-row justify-center my-4">
                    <motion.textarea whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.05 }} name="user_message" id="contact-text" cols="30" rows="10" className="p-2 w-80 border-[1px] border-black rounded-lg text-md outline-none resize-none lg:w-full" placeholder="Your message..."></motion.textarea>
                </div>
                <div className="w-full flex flex-row justify-center my-4">
                    <motion.button whileTap={{ scale: 0.90 }} className="bg-black text-white w-40 p-1 rounded-lg text-lg lg:text-2xl lg:w-60" type="button">Submit</motion.button>
                </div>
            </motion.form>
        </>
    );
}   

export default ContactPage;