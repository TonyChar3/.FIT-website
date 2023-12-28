import { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImgCarouselComponent from './Image_carousel/ImgCarousel';

const MenuPage = memo(() => {

    return(
        <>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="w-full h-[100%]"
            >
                <div className="w-full h-full flex flex-row justify-center items-center bg-blend-multiply bg-gray-400 bg-menu-top-section bg-cover bg-center bg-no-repeat lg:bg-desk-menu-top-section lg:relative lg:bg-fixed">
                    <div className="lg:absolute text-center lg:left-96 lg:top-80 ">
                        <h2 className="mb-2 text-6xl lg:text-9xl text-white uppercase">Get FIT</h2>
                        <h3 className="text-2xl lg:text-3xl text-white uppercase underline">New collection out now</h3>
                    </div>
                </div>
            </motion.div>
            <div className="flex flex-col h-auto lg:h-[75%] p-2 lg:flex-row lg:items-center lg:justify-center lg:mb-12">
                <div className={`flex justify-center w-full mt-12 mb-5 lg:w-2/4 lg:justify-center lg:items-center lg:mr-6`}>
                    <img 
                        src="https://ik.imagekit.io/bqofr3ncj/tr:w-500/ProductsImage_2023-12-09_20_46/man-doing-yoga_jvpprt.jpg?updatedAt=1702251631671" 
                        alt="hero section image" 
                        width="150" 
                        height="150"
                        className={`w-3/4 rounded-2xl lg:w-4/6 transform-all ease duration-100`} 
                    />
                </div>
                <div className="flex flex-col justify-center items-center mb-12 p-4 lg:w-2/6 lg:mb-0">
                    <h3 className="text-3xl capitalize lg:text-5xl">About the brand</h3>
                    <p className="my-4 p-1 text-md text-center lg:text-left lg:text-xl lg:my-4 2xl:my-5 2xl:text-2xl"> 
                        Our high-quality activewear is designed to keep you comfortable and confident as you crush your fitness goals. 
                        Made from premium materials that are durable and long-lasting. 
                        Our stylish designs are perfect for any type of workout!
                        We're committed to providing you with the best workout gear, so you can look and feel your best while you sweat it out. 
                        Take your fitness wardrobe to the next level!
                    </p>
                    <Link to="/shop" className="p-2 my-1 w-40 bg-black text-xl text-center text-white rounded-lg lg:text-2xl">
                        Shop now
                    </Link>
                </div>
            </div>
            <ImgCarouselComponent />
        </>
    );
})

export default MenuPage;

