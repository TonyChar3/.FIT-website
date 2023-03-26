import { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';



const ProductPage = () => {

    //const location = useLocation()

    //const {name, price} = location.state

    const [description, setDescription] = useState(false); // the description chevron state
    const [colors, setColors] = useState(false);// the colors chevron state
    const [size, setSize] = useState(false);// the size chevron state
    const [MainImg, setImg] = useState('/images/products/black-mi-band-smartwatch.jpg');// the image to show in the big square

    // handle the click of the description chevron
    const handleDescripClick = () => {
        setDescription(description => !description)
    }

    // handle the click of the colors chevron
    const handleColorsClick = () => {
        setColors(colors => !colors)
    }

    // handle the click of the size chevron
    const handleSizeClick = () => {
        setSize(size => !size)
    }

    // handle the product img change
    const handleImgChange = (img) => {
        setImg(img)
    }


    return(
        <div>
            <div className="flex flex-row p-3 justify-center border-b-2 border-black lg:w-1/2 lg:p-8">
                <h2 className="text-3xl lg:text-5xl">Product Page</h2>
            </div>
            <div>
                <div className="flex flex-col lg:flex-row lg:justify-center lg:w-full lg:my-[50px]">
                    <div className="flex justify-center lg:justify-end p-3">
                        <img src={MainImg} alt="Main product image" width="500" height="500" className="w-5/6 h-[229px] border-[1px] border-black object-cover object-center rounded-md lg:h-full lg:w-4/6"/>
                    </div>
                    <div className="flex flex-row justify-around w-full my-3 lg:flex-col lg:items-center">
                        <motion.img whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} onClick={() => handleImgChange("/images/products/light-blue-mi-band.jpg")} src="/images/products/light-blue-mi-band.jpg" alt="secondary product image" width="500" height="500" className="w-1/4 border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5" />
                        <motion.img whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} onClick={() => handleImgChange("/images/products/lime-green-fitness-tracker.jpg")} src="/images/products/lime-green-fitness-tracker.jpg" alt="secondary product image" width="500" height="500" className="w-1/4 border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5" />
                        <motion.img whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} onClick={() => handleImgChange("/images/products/black-mi-band-smartwatch.jpg")} src="/images/products/black-mi-band-smartwatch.jpg" alt="secondary product image" width="500" height="500" className="w-1/4 border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5" />
                    </div>
                </div>

                <div className="mt-5 mb-[50px] lg:grid lg:grid-cols-2 lg:gap-5 lg:w-4/6 lg:mx-auto lg:mb-[100px]">
                    <div className="lg:w-full lg:justify-self-center">
                        <div className="flex flex-row justify-center items-center p-4 text-lg w-full border-y-2 border-black lg:border-t-0 lg:justify-start">
                            <div className="text-center w-1/4 mr-2">
                                <h3 className="text-xl lg:text-3xl">Description</h3>
                            </div>
                            <div className="flex justify-center ml-2 lg:hidden">
                                <i onClick={handleDescripClick} className={`fa-sharp fa-solid fa-chevron-up ${description? 'rotate-180' : ''} duration-300`}></i>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-start items-center p-2 ${description? 'static translate-y-0 h-auto duration-300' : 'absolute translate-y-[200px] h-0 -z-20 duration-700'} lg:static lg:translate-y-0 lg:z-0 lg:h-auto overflow-hidden`}>
                            <p className={`relative ${description? 'translate-x-0 w-full z-0 duration-700' : '-translate-x-[200px] w-0 -z-20'} lg:translate-x-0 lg:w-full lg:z-0 lg:text-xl`}>accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div>
                    </div>
                    <div className="lg:flex lg:flex-col lg:justify-between lg:w-full lg:items-end">
                        <div className="lg:w-1/2 lg:justify-self-end">
                            <div className={`flex flex-row justify-center items-center p-4 text-lg w-full border-${description? 'y' : 'b'}-2 border-black lg:border-t-0 lg:justify-start`}>
                                <div className="text-center w-1/4 mr-2">
                                    <h3 className="text-xl lg:text-3xl">Colors</h3>
                                </div>
                                <div className="flex justify-center ml-2 lg:hidden">
                                    <i onClick={handleColorsClick} className={`fa-sharp fa-solid fa-chevron-up ${colors? 'rotate-180' : ''} duration-300`}></i>
                                </div>
                            </div>

                            <div className={`flex flex-row items-center p-2  ${colors? 'static translate-y-0 z-0 h-16 duration-300' : 'absolute translate-y-[200px] -z-20 h-0 duration-700'} lg:static lg:translate-y-0 lg:z-0 lg:h-16 lg:mt-2`}>
                                <div className={` flex flex-row justify-evenly ${colors? 'translate-x-0 z-0 w-full duration-700' : 'relative -translate-x-[200px] w-0 -z-20'} lg:translate-x-0 lg:z-0 lg:w-full`}>
                                    <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fas fa-light fa-circle text-cyan-500 text-2xl cursor-pointer lg:text-3xl"></motion.i>
                                    <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fas fa-light fa-circle text-lime-400 text-2xl cursor-pointer lg:text-3xl"></motion.i>
                                    <motion.i whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="fas fa-light fa-circle text-black text-2xl cursor-pointer lg:text-3xl"></motion.i>
                                </div>
                            </div>
                        </div>
                        <div className="order-2 lg:w-1/2 lg:justify-self-end">
                            <div className={`flex flex-row justify-center items-center p-4 text-lg w-full border-${colors? 'y' : 'b'}-2 border-black lg:border-t-0 lg:justify-start`}>
                                <div className="text-center w-1/4 mr-2">
                                    <h3 className="text-xl lg:text-3xl">Size</h3>
                                </div>
                                <div className="flex justify-center ml-2 lg:hidden">
                                    <i onClick={handleSizeClick} className={`fa-sharp fa-solid fa-chevron-up ${size? 'rotate-180' : ''} duration-300`}></i>
                                </div>
                            </div>
                            <div className={`flex flex-row items-center p-2 ${size? 'static translate-y-0 z-0 h-16 duration-300' : 'absolute translate-y-[200px] -z-20 h-0 duration-700'} lg:static lg:translate-y-0 lg:z-0 lg:h-16 lg:mt-2`}>
                                <div className={`flex flex-row justify-evenly ${size? 'translate-x-0 z-0 w-full duration-700' : 'relative -translate-x-[90px] w-0 -z-20'} lg:translate-x-0 lg:z-0 lg:w-full`}>
                                    <motion.div whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="p-1 mx-2 border-2 border-black rounded-xl w-8 text-center cursor-pointer lg:w-10">
                                        <span className="text-md lg:text-xl">S</span>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="p-1 mx-2 border-2 border-black rounded-xl w-8 text-center cursor-pointer lg:w-10">
                                        <span className="text-md lg:text-xl">M</span>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="p-1 mx-2 border-2 border-black rounded-xl w-8 text-center cursor-pointer lg:w-10">
                                        <span className="text-md lg:text-xl">L</span>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="p-1 mx-2 border-2 border-black rounded-xl w-8 text-center cursor-pointer lg:w-10">
                                        <span className="text-md lg:text-xl">XL</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1">
                        <div className="flex flex-row my-4 justify-center lg:justify-start lg:ml-6">
                            <h4 className="text-2xl lg:text-4xl">Price$$</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <motion.button whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="w-60 my-2 p-1 bg-gray-300 text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3">Add to cart</motion.button>
                            <motion.button whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="flex flex-row justify-center items-center w-60 my-2 p-1 bg-black text-white text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3">Buy with <i className="fa-brands fa-google-pay mx-2 text-2xl"></i></motion.button>
                            <Link to="/customerinfo" className="my-2 border-b-2 border-black text-center text-sm lg:text-lg">More payment options</Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ProductPage;