import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { UserAuth } from '../../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addItem, calculateTotals } from '../../../../store/slice/cartSlice';
import Cookies from 'js-cookie';



const ProductPage = () => {

    const location = useLocation()

    const { user } = UserAuth();

    const { id } = location.state
    
    const token = Cookies.get('fit-user');

    const dispatch = useDispatch();

    const [prodct, setProdct] = useState({})// the product 
    const [description, setDescription] = useState(false); // the description chevron state
    const [SecImg, setImg] = useState([]);// the image array 
    const [Main, setMain] = useState(null);// the main product image
    const [heart, setHeart] = useState(false);// the wishlist button

   
    useEffect(() => {
        
        axios.get(`http://localhost:3001/shop/${id}`,{
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => {
            console.log(user)
            if(user){
                const wishList = JSON.parse(localStorage.getItem(`${user._id}`)) || []

                const isAwish = wishList.some(wish => wish._id.toString() === response.data._id.toString());

                setHeart(isAwish)
            }
            setMain(response.data.images[0].img_url)
            setImg(response.data.images)
            setProdct(response.data) 
        })
        .catch(error => {
            console.log(error.message)
        })

    },[user])

    // handle the click of the description chevron
    const handleDescripClick = () => {
        setDescription(description => !description)
    }

    // handle the product img change
    const handleImgChange = (img) => {
        setMain(img)
    }

    // handle the wishlist button change
    const handleWishListBtn = () => {

        if(!heart){
            AddToWishList();
            setHeart(heart => !heart);
        } else if(heart){
            RemoveFromWishList();
            setHeart(heart => !heart);
        }
        
    }

    // handle the add prodct to wishlist
    const AddToWishList = async() =>{
        try{
            // send a post request to the route
            const send = await axios.post('http://localhost:3001/wishlist/addWishlist',{
                prodct_id: id
            },{
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `${token}`
                }
            });

            if(send){
                const wishList = JSON.parse(localStorage.getItem(`${user._id}`)) || [];

                const updateList = [...wishList, { _id: id}]

                localStorage.setItem(`${user._id}`, JSON.stringify(updateList))
            }

        } catch(err){
            console.log(err.message)
        }
    }

    // handle the remove prodct from the wishlist
    const RemoveFromWishList = async() => {
        try{
            // send a post request to the route
            const send = await axios.delete('http://localhost:3001/wishlist/removeWishlist', {
                data: { prodct_id: id },
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `${token}`
                }
            });

            if(send){

                console.log(send.data.message)
                const wishList = JSON.parse(localStorage.getItem(`${user._id}`)) || [];

                const updateList = wishList.filter(wish => wish._id.toString() !== id.toString());

                if(updateList.length === 0){
                    localStorage.removeItem(`${user._id}`)
                } else {
                    localStorage.setItem(`${user._id}`, JSON.stringify(updateList))
                }
            }

        } catch(err){
            console.log(err.message)
        }
    }

    // handle the add to cart
    const handleAddToCart = (item) => {

        const token = Cookies.get('fit-user') || Cookies.get('fit-customer')
        const hashID = Cookies.get('fit-hash') || user._id

        dispatch(addItem(item))
        dispatch(calculateTotals())
        
        axios.put('http://localhost:3001/cart/add-to-cart',{
            cartID: hashID,
            prodct_id: item._id,
            prodct_qty: 1
        },
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        })
        .then(resp => {
            console.log(resp.data.msg)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    
    return(
        <div>
            <div className="flex flex-row p-3 justify-center border-b-2 border-black lg:w-1/2 lg:p-8">
                <h2 className="text-3xl lg:text-5xl">{prodct.name}</h2>
            </div>
            
                <div className="flex flex-col lg:flex-row lg:justify-center lg:w-full lg:h-full lg:my-[50px]">
                    <div className="flex justify-center items-center w-full p-3">
                        {
                            Main == null ?
                                <img src={''} alt="Loading..." width="500" height="500" className="w-5/6 h-[229px] border-[1px] border-black object-cover object-center rounded-md lg:h-full lg:w-4/6"/>
                            :
                            <div className="w-5/6 h-[229px] lg:h-[650px] lg:w-4/6">
                                <img src={Main} alt="Loading..." width="500" height="500" className="w-full h-full border-[1px] border-black object-cover object-center rounded-md "/>
                            </div>
                           
                        }
                    </div>
                    <div className="flex flex-row justify-around w-full my-3 lg:flex-col lg:w-2/6 lg:h-full lg:justify-center lg:items-center">
                        {
                            SecImg == null ? 
                            <motion.img whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} src={''} alt="loading" width="500" height="500" className="w-1/4 border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5" /> 
                            :
                            SecImg.map((image,i) => (
                                <motion.div key={i} onClick={() => handleImgChange(image.img_url)} className="w-1/6 h-20 lg:w-full lg:h-40 lg:my-2 lg:flex lg:justify-start">
                                    <motion.img whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} src={image.img_url} alt="secondary product image" className="w-full h-full border-[1px] border-black object-cover object-center rounded-xl lg:w-2/5 cursor-pointer"/>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-5 mb-[50px] lg:grid lg:grid-cols-2 lg:gap-5 lg:w-5/6 lg:mx-auto lg:mb-[100px]">
                    <div className="lg:w-5/6 lg:justify-self-center">
                        <div className="flex flex-row justify-center items-center p-4 text-lg w-full border-y-2 border-black lg:border-t-0 lg:justify-start">
                            <div className="text-center w-1/4 mr-2">
                                <h3 className="text-xl lg:text-3xl">Description</h3>
                            </div>
                            <div className="flex justify-center ml-2 lg:hidden">
                                <i onClick={handleDescripClick} className={`fa-sharp fa-solid fa-chevron-up ${description? 'rotate-180' : ''} duration-300`}></i>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-start items-center p-2 ${description? 'static translate-y-0 h-auto border-b-2 border-black duration-300' : 'absolute translate-y-[200px] h-0 -z-20 duration-700'} lg:static lg:translate-y-0 lg:z-0 lg:h-auto overflow-hidden`}>
                            <p className={`relative ${description? 'translate-x-0 w-full z-0 duration-700' : '-translate-x-[200px] w-0 -z-20'} lg:translate-x-0 lg:w-full lg:z-0 lg:text-xl text-center`}>{prodct.description}</p>
                        </div>
                    </div>
                    
                    <div className="lg:h-full lg:flex lg:flex-col lg:justify-around lg:items-center">
                        <div className="flex flex-row my-4 justify-center">
                            <h4 className="text-2xl lg:text-5xl">{prodct.prix}$</h4>
                            
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <motion.button whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} onClick={() => handleAddToCart(prodct)} className="w-60 my-2 p-1 bg-gray-300 text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3">Add to cart</motion.button>
                            <motion.button whileTap={{ scale: 0.70 }} whileHover={{ scale: 1.1 }} className="flex flex-row justify-center items-center w-60 my-2 p-1 bg-black text-white text-lg rounded-xl lg:w-80 lg:text-2xl lg:p-2 lg:my-3">Buy with <i className="fa-brands fa-google-pay mx-2 text-2xl"></i></motion.button>
                            <Link to="/customerinfo" className="my-2 border-b-2 border-black text-center text-sm lg:text-lg">More payment options</Link>
                            <div className={`lg:w-60 lg:flex lg:justify-center lg:items-center lg:mt-4 ${user === null ? 'lg:hidden hidden' : 'hidden'}`}>
                                <motion.i whileTap={{ scale: 0.90 }} onClick={() => handleWishListBtn()} className={`${heart? 'fa-solid fa-heart' : 'fa-light fa-heart-circle-plus'} text-xl transition-300 lg:text-2xl lg:cursor-pointer`}></motion.i>
                            </div>
                        </div>
                    </div>
                    <div className={`w-60 flex justify-center items-center mt-4 ${user === null ? 'lg:hidden hidden' : 'lg:hidden'}`}>
                        <motion.i whileTap={{ scale: 0.90 }} onClick={() => handleWishListBtn()} className={`${heart? 'fa-solid fa-heart' : 'fa-light fa-heart-circle-plus'} text-xl transition-300 lg:text-3xl lg:cursor-pointer`}></motion.i>
                    </div>
                </div>
                

        </div>
    );
}

export default ProductPage;