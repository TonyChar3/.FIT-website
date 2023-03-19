import { useState } from 'react';
import { motion } from 'framer-motion';

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
      
            <div className="h-[95vh]">
                <div className="flex flex-col justify-center items-center h-full bg-blend-multiply bg-gray-400 bg-menu-top-section bg-cover bg-center bg-no-repeat">
                    <div className="text-center">
                        <h2 className="mb-2 text-6xl text-white uppercase">Get FIT</h2>
                        <h3 className="text-2xl text-white uppercase underline">New collection out now</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-2/4 p-2">
                <div className="flex justify-center w-full mt-12 mb-5">
                    <img src="/images/pexels-li-sun-2294363.jpg" alt="hero section image" className="w-5/6 rounded-2xl" />
                </div>
                <div className="flex flex-col justify-center items-center mb-12 p-1">
                    <h3 className="text-3xl capitalize">About the brand</h3>
                    <p className="my-4 p-1 text-md text-center"> 
                        Our high-quality activewear is designed to keep you comfortable and confident as you crush your fitness goals. 
                        Made from premium materials that are durable and long-lasting. 
                        Our stylish designs are perfect for any type of workout!
                        We're committed to providing you with the best workout gear, so you can look and feel your best while you sweat it out. 
                        Take your fitness wardrobe to the next level!
                    </p>
                    <motion.button whileTap={{ scale: 0.70 }} className="p-2 my-1 w-40 bg-black text-xl text-white rounded-lg">
                        Shop now
                    </motion.button>
                </div>
            </div>
            
            <div className="flex justify-center h-2/4 relative overflow-hidden">
                <img src={images[currentImage]} alt="" className="w-full"/>
                
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
        </>
    );
}

export default MenuPage;

