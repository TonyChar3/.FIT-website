import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MenuPage = () => {

    const [currentImage, setCurrentImage] = useState(0);// state for the image slider

    // array of images for the slider of the menu page
    const images = [
        '/images/pexels-cesar-galeão-3289711.jpg',
        '/images/pexels-leon-ardho-1552106.jpg',
        '/images/pexels-mister-mister-3490348.jpg'
    ]

    // next image
    const handleNextImage = () => {
        const isLastSlide = currentImage === images.length - 1;
        const newIndex = isLastSlide? 0 : currentImage + 1;
        setCurrentImage(newIndex);
    }

    // previous image
    const handlePrevImage = () => {
        const isFirstSlide = currentImage === 0;
        const newIndex = isFirstSlide? images.length - 1 : currentImage - 1;
        setCurrentImage(newIndex);
    }

    // to directly to an image
    const goToSlideImg = (index) => {
        setCurrentImage(index)
    }

    return(
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                <div className="h-[95vh]">
                    <div className="flex flex-col justify-center items-center h-full bg-blend-multiply bg-gray-400 bg-menu-top-section bg-cover bg-center bg-no-repeat lg:bg-desk-menu-top-section lg:bg-fixed">
                        <div className="text-center lg:absolute lg:left-96 lg:top-80">
                            <h2 className="mb-2 text-6xl lg:text-9xl text-white uppercase">Get FIT</h2>
                            <h3 className="text-2xl lg:text-3xl text-white uppercase underline">New collection out now</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col h-2/4 p-2 lg:flex-row lg:items-center lg:justify-center lg:mb-12">
                    <div className="flex justify-center w-full mt-12 mb-5 lg:w-2/4 lg:justify-center lg:mr-6">
                        <img src="/images/pexels-li-sun-2294363.jpg" alt="hero section image" className="w-3/4 rounded-2xl lg:w-4/6" />
                    </div>
                    <div className="flex flex-col justify-center items-center mb-12 p-1 lg:w-2/6 lg:mb-0">
                        <h3 className="text-3xl capitalize lg:text-5xl">About the brand</h3>
                        <p className="my-4 p-1 text-md text-center lg:text-left lg:text-xl lg:my-4"> 
                            Our high-quality activewear is designed to keep you comfortable and confident as you crush your fitness goals. 
                            Made from premium materials that are durable and long-lasting. 
                            Our stylish designs are perfect for any type of workout!
                            We're committed to providing you with the best workout gear, so you can look and feel your best while you sweat it out. 
                            Take your fitness wardrobe to the next level!
                        </p>
                        <motion.button whileTap={{ scale: 0.70 }} className="p-2 my-1 w-40 bg-black text-xl text-white rounded-lg lg:text-2xl">
                            <Link to="/shop">Shop now</Link>
                        </motion.button>
                    </div>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-center lg:w-full lg:h-2/4">
                    <div className="flex justify-center h-2/4 relative overflow-hidden lg:w-1/4 lg:hidden">
                        <img src={images[currentImage]} alt="" className="w-full lg:h-1/2"/>
                        
                        <div className="absolute flex flex-row justify-between w-full bottom-1/2">
                            <motion.i whileTap={{ scale: 0.90, opacity: 1 }} className="fa-sharp fa-solid fa-chevron-left text-white text-5xl ml-2 opacity-30" onClick={handlePrevImage}></motion.i>
                            <motion.i whileTap={{ scale: 0.90 }} className="fa-sharp fa-solid fa-chevron-right text-white text-5xl mr-2 opacity-40" onClick={handleNextImage}></motion.i>
                        </div>
                        <div className="absolute flex justify-around bottom-0 w-40  mb-2">
                            {images.map((image, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    onClick={() => goToSlideImg(imgIndex)}
                                    className={`opacity-${imgIndex === currentImage? '0' : '40'}`}
                                >
                                    <i className="fa-duotone fa-circle text-white text-sm"></i>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-row lg:justify-center lg:w-2/6">
                        <img src="/images/pexels-cesar-galeão-3289711.jpg" alt="" className="object-cover"/>
                        <img src="/images/pexels-leon-ardho-1552106.jpg" alt="" className="object-cover"/>
                        <img src="/images/pexels-mister-mister-3490348.jpg" alt="" className="object-cover"/>
                    </div>
                </div>
            </motion.div>

        </>
    );
}

export default MenuPage;

