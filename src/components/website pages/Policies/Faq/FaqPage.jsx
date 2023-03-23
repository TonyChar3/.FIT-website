import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FaqPage = () => {
    return(
        <div className="mt-4 mb-[50px]">
            <div className="flex flex-row justify-center w-full p-2 border-b-2 border-black">
                <h3 className="text-3xl">FAQ</h3>
            </div>
            
            <div className="flex flex-col justify-center items-center p-2 m-3">
                
                    <div className="flex flex-row w-80 border-2 border-black">
                        <div className="w-60 text-center">
                            <span className="text-lg">What is your return policy?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20">
                            <i className="fa-sharp fa-solid fa-chevron-down text-xl"></i>
                        </div>
                    </div>
                    <div>
                        <span>
                            We offer a 30-day return policy for all unworn and unwashed items. 
                            Customers are responsible for the cost of return shipping. 
                            Refunds will be issued once the item has been received and inspected.
                        </span>
                    </div>
                

               
                    <div className="flex flex-row w-80 border-2 border-black">
                        <div className="w-60 text-center">
                            <span className="text-lg">How do I care for my apparel?</span>
                        </div>
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20">
                            <i className="fa-sharp fa-solid fa-chevron-down text-xl"></i>
                        </div>
                    </div>
                    <div>
                        <span>
                            We recommend following the care instructions on the label of each item. 
                            Most items can be machine washed in cold water and tumble dried on low. 
                            Avoid using fabric softeners, bleach, or high heat.
                        </span>
                    </div>
               

                
                    <div className="flex flex-row w-80 border-2 border-black">
                        <div className="w-60 text-center">
                            <span className="text-lg">How can I track my order?</span>
                        </div>
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20">
                            <i className="fa-sharp fa-solid fa-chevron-down text-xl"></i>
                        </div>
                    </div>
                    <div>
                        <span>
                            Once your order has shipped, you will receive a tracking number via email. 
                            You can use this number to track the status of your delivery.
                        </span>
                    </div>
               

                
                    <div className="flex flex-row w-80 border-2 border-black">
                        <div className="w-60 text-center">
                            <span className="text-lg">Do you offer international shipping?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20">
                            <i className="fa-sharp fa-solid fa-chevron-down text-xl"></i>
                        </div>
                    </div>
                    <div>
                        <span>
                            Yes, we offer international shipping to select countries. 
                            Shipping rates and times vary depending on the destination.
                        </span>
                    </div>
               

               
                    <div className="flex flex-row w-80 border-2 border-black">
                        <div className="w-60 text-center">
                            <span className="text-lg">How can I contact customer service?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20"> 
                            <i className="fa-sharp fa-solid fa-chevron-down text-xl"></i>
                        </div>
                    </div>
                    <div>
                        <span>
                            You can contact us via email or phone, and we strive to respond to all inquiries within 24 hours. 
                            Our customer service hours are Monday through Friday, 9am to 5pm EST.
                        </span>
                    </div>
                
            </div>
            <div className="flex flex-row justify-center w-full">
                <motion.button whileTap={{ scale: 0.90 }} whileHover={{ scale: 1.1 }} className="w-40 bg-black text-white p-2 text-xl rounded-xl">Ask a question</motion.button>
            </div>
        </div>
    );
}

export default FaqPage;