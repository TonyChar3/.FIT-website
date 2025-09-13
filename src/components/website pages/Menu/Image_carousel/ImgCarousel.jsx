import { useState, memo } from "react";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

const ImgCarouselComponent = memo(() => {
  const [currentImage, setCurrentImage] = useState(0); // state for the image slider

  // array of images for the slider of the menu page
  const images = [
    "https://ik.imagekit.io/bqofr3ncj/tr:w-800/ProductsImage_2023-12-09_20_46/men-bicep-curl_n1en2r.jpg?updatedAt=1702251636180",
    "https://ik.imagekit.io/bqofr3ncj/tr:w-800/ProductsImage_2023-12-09_20_46/man-squatting-down-with-barbell_t1o18k.jpg?updatedAt=1702251636050",
    "https://ik.imagekit.io/bqofr3ncj/tr:w-800/ProductsImage_2023-12-09_20_46/man-sitting-down-with-dumbbell_lpxrai.jpg?updatedAt=1702251633408",
  ];

  // next image
  const nextImage = () => {
    const isLastSlide = currentImage === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  // previous image
  const previousImage = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-center lg:w-full lg:h-auto">
        <div className="flex justify-center h-2/4 relative overflow-hidden lg:w-1/4 lg:hidden">
          <img
            src={images[currentImage]}
            alt="athlete picture"
            className="w-full lg:h-1/2"
          />

          <div className="absolute flex flex-row justify-between w-full bottom-1/2">
            <button
              onClick={previousImage}
              className="ml-2 opacity-30 active:scale-[0.90] transform-all ease duration-100"
            >
              <ChevronLeft size={50} color="white" />
            </button>
            <button
              onClick={nextImage}
              className="mr-2 opacity-40 active:scale-[0.90] transform-all ease duration-100"
            >
              <ChevronRight size={50} color="white" />
            </button>
          </div>
          <div className="absolute flex justify-around bottom-0 w-40  mb-2">
            {images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                onClick={() => setCurrentImage(imgIndex)}
                className={`opacity-${imgIndex === currentImage ? "0" : "40"}`}
              >
                <Dot size={70} color="white" />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:w-2/6">
          {images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={`${image}`}
              alt="athlete picture"
              width="150"
              height="150"
              loading="eager"
              className={`object-cover w-full h-full`}
            />
          ))}
        </div>
      </div>
    </>
  );
});

export default ImgCarouselComponent;
