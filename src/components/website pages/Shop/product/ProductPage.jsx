import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserAuth } from "../../../../context/AuthContext";
import { useDispatch } from "react-redux";
import { showModal, closeModal } from "../../../../store/slice/modalSlice";
import { addItem, calculateTotals } from "../../../../store/slice/cartSlice";
import { addItemToCart } from "../../../../utils/cartUtils";
import {
  removeFromWishList,
  addToWishList,
} from "../../../../utils/wishListUtils";
import { checkOutStripe } from "../../../../utils/checkoutUtils";
import { BlurhashCanvas } from "react-blurhash";

const ProductPage = () => {
  const navigate = useNavigate();

  const { user, selected_product, wishlist_array, setWishList } = UserAuth();

  const dispatch = useDispatch();

  const [prodct, setProdct] = useState({}); // the product
  const [description, setDescription] = useState(false); // the description chevron state
  const [SecImg, setImg] = useState([]); // the image array
  const [Main, setMain] = useState(""); // the main product image
  const [heart, setHeart] = useState(false); // the wishlist button
  const [stripeUser, setStripeUser] = useState(""); // the user for stripe
  const [side_image_loaded, setSideImageLoaded] = useState(false);
  const [main_image_loaded, setMainImageLoaded] = useState(false);

  // handle the wishlist button change
  const wishListBtnState = async () => {
    if (!heart) {
      await addToWishList(selected_product._id);
      setWishList([
        ...(wishlist_array || []),
        {
          _id: selected_product._id,
          prodct_img: selected_product.images[0].img_url,
          prodct_name: selected_product.name,
          prodct_price: selected_product.prix,
        },
      ]);

      dispatch(showModal("Added to wishlist"));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
      setHeart((heart) => !heart);
    } else if (heart) {
      await removeFromWishList(selected_product._id);
      setWishList((prevArray) =>
        prevArray.filter((item) => item._id !== selected_product._id)
      );
      dispatch(showModal("Removed from wishlist"));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
      setHeart((heart) => !heart);
    }
  };

  // handle the add to cart
  const addToCart = async (item) => {
    try {
      dispatch(addItem(item));
      dispatch(calculateTotals());

      const cartItem = await addItemToCart(item._id);
      if (cartItem) {
        dispatch(showModal(cartItem));
        setTimeout(() => {
          dispatch(closeModal());
        }, [5000]);
      }
    } catch (err) {
      console.log(err);
      dispatch(showModal(err.message));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  // handle fast checkout for a single product
  const fastItemCheckout = async (item) => {
    try {
      let itemsArray = [];
      itemsArray.push({
        _id: item._id,
        stripe_ID: item.stripe_ID,
        qty: 1,
      });
      const checkout = await checkOutStripe(itemsArray, stripeUser);
      if (checkout) {
        window.location.href = checkout;
      }
    } catch (err) {
      dispatch(showModal(err.message));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  useEffect(() => {
    if (user !== null) {
      setStripeUser(user.id);
      if (wishlist_array !== null && Array.isArray(wishlist_array)) {
        const isAwish = wishlist_array.some(
          (wish) => wish._id.toString() === selected_product._id.toString()
        );
        setHeart(isAwish);
      }
    }

    if (selected_product) {
      setMain(selected_product.images[0].img_url);
      setImg(selected_product.images);
      setProdct(selected_product);
    } else {
      navigate("/shop");
    }
  }, [selected_product, user]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="flex flex-row p-3 justify-center border-b-2 border-black lg:w-1/2 lg:p-6">
          <h2 className="text-3xl lg:text-5xl">{prodct.name}</h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:w-full lg:h-[80%] lg:my-2 2xl:my-4">
          <div className="flex justify-center items-start w-full p-3">
            <div className="w-5/6 h-[229px] lg:h-[34em] 2xl:h-[45em] lg:w-4/6">
              {selected_product ? (
                <>
                  <BlurhashCanvas
                    width="50"
                    height="50"
                    hash={`${selected_product.images[0].blurhash}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10px",
                      display: `${main_image_loaded ? "none" : ""}`,
                    }}
                  />
                </>
              ) : (
                <></>
              )}
              <img
                src={Main}
                alt="Loading..."
                width="50"
                height="50"
                onLoad={() => setMainImageLoaded(true)}
                className={`${
                  main_image_loaded ? "" : "hidden"
                } w-full h-full border-[1px] border-black object-cover object-center rounded-md`}
              />
            </div>
          </div>
          <div className="flex flex-row justify-around w-full lg:flex-col lg:w-2/6 lg:h-[50%] lg:justify-center lg:items-start aspect-w-1 aspect-h-1">
            {SecImg == null ? (
              <img
                src={""}
                alt="loading"
                width="500"
                height="500"
                className="w-1/4 border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5 active:scale-[0.70] hover:scale-[1.1] tranform-all ease duration-100"
              />
            ) : (
              SecImg.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setMain(image.img_url)}
                  className="w-1/6 h-20 lg:w-full lg:h-[7em] 2xl:h-[8.5em] lg:my-4 lg:flex lg:justify-start"
                >
                  <BlurhashCanvas
                    width="50"
                    height="50"
                    hash={`${image.blurhash}`}
                    style={{
                      width: "40%",
                      height: "110px",
                      borderRadius: "10px",
                      display: `${side_image_loaded ? "none" : ""}`,
                    }}
                  />
                  <img
                    src={image.img_url}
                    alt="secondary product image"
                    width="50"
                    height="50"
                    defer
                    onLoad={() => setSideImageLoaded(true)}
                    className={`${
                      side_image_loaded ? "" : "hidden"
                    } w-full h-full border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5 cursor-pointer active:scale-[0.70] hover:scale-[1.1] tranform-all ease duration-100`}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="mt-5 mb-[50px] lg:grid lg:grid-cols-2 lg:gap-5 lg:w-5/6 lg:mx-auto lg:mb-[100px]">
          <div className="lg:w-5/6 lg:justify-self-center">
            <div className="flex flex-row justify-center items-center p-4 text-lg w-full border-y-2 border-black lg:border-t-0 lg:justify-start">
              <div className="text-center w-1/4 mr-2">
                <h3 className="text-xl lg:text-3xl 2xl:text-4xl">
                  Description
                </h3>
              </div>
              <div className="flex justify-center ml-2 lg:hidden">
                <i
                  onClick={() => setDescription((description) => !description)}
                  className={`fa-sharp fa-solid fa-chevron-up ${
                    description ? "rotate-180" : ""
                  } duration-300`}
                ></i>
              </div>
            </div>
            <div
              className={`flex flex-row justify-start items-center p-2 ${
                description
                  ? "static translate-y-0 h-auto border-b-2 border-black duration-300"
                  : "absolute translate-y-[200px] h-0 -z-20 duration-700"
              } lg:static lg:translate-y-0 lg:z-0 lg:h-auto overflow-hidden`}
            >
              <p
                className={`relative ${
                  description
                    ? "translate-x-0 w-full z-0 duration-700"
                    : "-translate-x-[200px] w-0 -z-20"
                } lg:translate-x-0 lg:w-full lg:z-0 lg:text-xl text-center`}
              >
                {prodct.description}
              </p>
            </div>
          </div>

          <div className="lg:h-full lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="flex flex-row my-4 justify-center">
              <h4 className="text-2xl lg:text-5xl">{prodct.prix}$</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                onClick={() => addToCart(prodct)}
                className="w-60 my-2 p-1 bg-gray-300 text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3 active:scale-[0.70] hover:scale-[1.1] tranform-all ease duration-100"
              >
                Add to cart
              </button>
              <button
                onClick={() => fastItemCheckout(prodct)}
                className="flex flex-row justify-center items-center w-60 my-2 p-1 bg-black text-white text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3 active:scale-[0.70] hover:scale-[1.1] tranform-all ease duration-100"
              >
                Buy now
              </button>
              <div
                className={`lg:w-60 lg:flex lg:justify-center lg:items-center lg:mt-4 ${
                  user === null ? "lg:hidden hidden" : "hidden"
                }`}
              >
                <i
                  onClick={wishListBtnState}
                  className={`${
                    heart
                      ? "fa-solid fa-heart"
                      : "fa-light fa-heart-circle-plus"
                  } text-xl transition-300 lg:text-2xl lg:cursor-pointer active:scale-[0.90] transform-all ease duration-100`}
                ></i>
              </div>
            </div>
          </div>
          <div
            className={`w-60 flex justify-center items-center mt-4 ${
              user === null ? "lg:hidden hidden" : "lg:hidden"
            }`}
          >
            <i
              onClick={wishListBtnState}
              className={`${
                heart ? "fa-solid fa-heart" : "fa-light fa-heart-circle-plus"
              } text-xl transition-300 lg:text-3xl lg:cursor-pointer active:scale-[0.90] transform-all ease duration-100`}
            ></i>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductPage;
