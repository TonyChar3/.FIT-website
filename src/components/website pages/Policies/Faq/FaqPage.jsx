import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const FaqPage = () => {

    const [arrowQ1, setQ1] = useState(false);// state chevron of the first question
    const [arrowQ2, setQ2] = useState(false);// state chevron of the second question
    const [arrowQ3, setQ3] = useState(false);// state chevron of the third question
    const [arrowQ4, setQ4] = useState(false);// state chevron of the fourth question
    const [arrowQ5, setQ5] = useState(false);// state chevron of the fifth question

    // handle the click action of the chevron
    const handleQ1chevronClick = () => {
        setQ1(arrowQ1 => !arrowQ1)
    }

    // handle the click action of the chevron
    const handleQ2chevronClick = () => {
        setQ2(arrowQ2 => !arrowQ2)
    }

    // handle the click action of the chevron
    const handleQ3chevronClick = () => {
        setQ3(arrowQ3 => !arrowQ3)
    }

    // handle the click action of the chevron
    const handleQ4chevronClick = () => {
        setQ4(arrowQ4 => !arrowQ4)
    }

    // handle the click action of the chevron
    const handleQ5chevronClick = () => {
        setQ5(arrowQ5 => !arrowQ5)
    }



    return(
        <div className="mt-4 mb-[50px]">
            <div className="flex flex-row justify-center w-full p-2 border-b-2 border-black lg:w-1/2 lg:p-4">
                <h3 className="text-3xl lg:text-5xl">FAQ</h3>
            </div>
            
            <div className="flex flex-col justify-center items-center p-2 m-3 lg:m-5">
                
                    <div className={`flex flex-row w-80 lg:my-5 border-2 ${arrowQ1? '' : 'border-b-0 lg:border-b-2'} border-black w-80 h-[3.8rem] lg:w-2/4`}>
                        <div className="w-60 text-center flex flex-row justify-center items-center lg:w-5/6">
                            <span className="text-lg lg:text-2xl">What is your return policy?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20 lg:w-40">
                            <i onClick={handleQ1chevronClick} className={`fa-sharp fa-solid fa-chevron-up text-xl ${arrowQ1? 'rotate-180' : ''} duration-300 lg:text-3xl cursor-pointer`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-row w-full p-2 my-2 justify-center items-center ${arrowQ1? 'static translate-x-0 z-0 h-40 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'}`}>
                        <span className={`text-center text-lg ${arrowQ1? 'static translate-x-0 w-full z-0 duration-300 lg:w-1/2' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                            We offer a 30-day return policy for all unworn and unwashed items. 
                            Customers are responsible for the cost of return shipping. 
                            Refunds will be issued once the item has been received and inspected.
                        </span>
                    </div>
                

               
                    <div className={`flex flex-row w-80 lg:my-5 border-2 border-black w-80 h-[3.8rem] ${arrowQ2? '' : 'border-b-0 lg:border-b-2'} lg:w-2/4`}>
                        <div className="w-60 text-center flex flex-row justify-center items-center lg:w-5/6">
                            <span className="text-lg lg:text-2xl">How do I care for my apparel?</span>
                        </div>
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20 lg:w-40">
                            <i onClick={handleQ2chevronClick} className={`fa-sharp fa-solid fa-chevron-up text-xl ${arrowQ2? 'rotate-180' : ''} duration-300 lg:text-3xl cursor-pointer`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-row w-full p-2 my-2 justify-center items-center ${arrowQ2? 'static translate-x-0 z-0 h-40 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'}`}>
                        <span className={`text-center text-lg ${arrowQ2? 'static translate-x-0 w-full z-0 duration-300 lg:w-1/2' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                            We recommend following the care instructions on the label of each item. 
                            Most items can be machine washed in cold water and tumble dried on low. 
                            Avoid using fabric softeners, bleach, or high heat.
                        </span>
                    </div>
               

                
                    <div className={`flex flex-row w-80 lg:my-5 border-2 border-black w-80 h-[3.8rem] ${arrowQ3? '' : 'border-b-0 lg:border-b-2'} lg:w-2/4`}>
                        <div className="w-60 text-center flex flex-row justify-center items-center lg:w-5/6">
                            <span className="text-lg lg:text-2xl">How can I track my order?</span>
                        </div>
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20 lg:w-40">
                            <i onClick={handleQ3chevronClick} className={`fa-sharp fa-solid fa-chevron-up text-xl ${arrowQ3? 'rotate-180' : ''} duration-300 lg:text-3xl cursor-pointer`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-row w-full p-2 my-2 justify-center items-center ${arrowQ3? 'static translate-x-0 z-0 h-40 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'}`}>
                        <span className={`text-center text-lg ${arrowQ3? 'static translate-x-0 w-full z-0 duration-300 lg:w-1/2' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                            Once your order has shipped, you will receive a tracking number via email. 
                            You can use this number to track the status of your delivery.
                        </span>
                    </div>
               

                
                    <div className={`flex flex-row w-80 lg:my-5 border-2 border-black w-80 h-[3.8rem] ${arrowQ4? '' : 'border-b-0 lg:border-b-2'} lg:w-2/4`}>
                        <div className="w-60 text-center lg:w-5/6 lg:flex lg:flex-row lg:justify-center lg:items-center">
                            <span className="text-lg lg:text-2xl">Do you offer international shipping?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20 lg:w-40">
                            <i onClick={handleQ4chevronClick} className={`fa-sharp fa-solid fa-chevron-up text-xl ${arrowQ4? 'rotate-180' : ''} duration-300 lg:text-3xl cursor-pointer`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-row w-full p-2 my-2 justify-center items-center ${arrowQ4? 'static translate-x-0 z-0 h-40 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'}`}>
                        <span className={`text-center text-lg ${arrowQ4? 'static translate-x-0 w-full z-0 duration-300 lg:w-1/2' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                            Yes, we offer international shipping to select countries. 
                            Shipping rates and times vary depending on the destination.
                        </span>
                    </div>
               

               
                    <div className={`flex flex-row w-80 lg:my-5 border-2 border-black w-80 h-[3.8rem] lg:w-2/4`}>
                        <div className="w-60 text-center lg:w-5/6 lg:flex lg:flex-row lg:justify-center lg:items-center">
                            <span className="text-lg lg:text-2xl">How can I contact customer service?</span>
                        </div>
                        
                        <div className="flex flex-row justify-center items-center border-l-2 border-black w-20 lg:w-40"> 
                            <i onClick={handleQ5chevronClick} className={`fa-sharp fa-solid fa-chevron-up text-xl ${arrowQ5? 'rotate-180' : ''} duration-300 lg:text-3xl cursor-pointer`}></i>
                        </div>
                    </div>
                    <div className={`flex flex-row w-full p-2 my-2 justify-center items-center ${arrowQ5? 'static translate-x-0 z-0 h-40 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'}`}>
                        <span className={`text-center text-lg ${arrowQ5? 'static translate-x-0 w-full z-0 duration-300 lg:w-1/2' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                            You can contact us via email or phone, and we strive to respond to all inquiries within 24 hours. 
                            Our customer service hours are Monday through Friday, 9am to 5pm EST.
                        </span>
                    </div>
                
            </div>
            <div className="flex flex-row justify-center w-full lg:w-1/2 lg:ml-40">
                <motion.button whileTap={{ scale: 0.90 }} whileHover={{ scale: 1.1 }} className="w-40 bg-black text-white p-2 text-xl rounded-xl lg:text-2xl lg:w-60"><Link to="/contact">Ask a question</Link></motion.button>
            </div>
        </div>
    );
}

export default FaqPage;