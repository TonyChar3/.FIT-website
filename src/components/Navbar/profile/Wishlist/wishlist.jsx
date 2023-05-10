import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const WishList = () => {

    const [chevron, setChevron] = useState(false);// state of the chevron up/down
    const [emptylist, setEmptyList] = useState({});
    const [wishlist, setWishList] = useState([]);

    // handle the click of the chevron
    const handleChevronClick = () => {
        setChevron(chevron => !chevron)
    }

    useEffect(() => {
        const fetchWishList = async() => {
            const token = Cookies.get('fit-user');
            try{
                const response = await axios.get('http://localhost:3001/wishlist/wishlist', {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    }
                });
                if(response.data.message){
                    setEmptyList(response.data)   
                } else if(response.data[0]){
                    setWishList(response.data)
                }
            } catch(err){
                console.log(err.message)
            }
        }
        fetchWishList();
    },[])
   
    return(
        <>
            <div className="flex flex-col justify-center items-center w-full my-3 lg:my-4">
                <div className="flex flex-row justify-center items-center p-1 w-full lg:w-1/4">
                    <h2 className="text-lg underline lg:text-2xl">Your Wishlist<i className="text-lg lg:text-2xl ml-2 fa-regular fa-heart"></i></h2>
                    <div className="flex flex-row justify-start items-center ml-5">
                        <i onClick={handleChevronClick} className={`fa-sharp fa-solid fa-${chevron?'minus' : 'plus'}-large text-sm lg:text-lg ${chevron? 'rotate-180': ''} duration-300 cursor-pointer`}></i>
                    </div>
                </div>

                <div className={`flex flex-col justify-center items-center p-2 w-full ${chevron? 'static translate-x-0 z-0 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'} lg:w-1/2 lg:my-4`}>
                    {  
                        wishlist.length ?
                        wishlist.map((wish, i) => (
                            <div key={i} className={`flex flex-row justify-around p-2 my-2 w-full ${chevron? 'static translate-x-0 z-0 duration-700' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                                <div className="w-1/3 flex flex-row justify-center items-center">
                                    <img src={wish.prodct_img} alt="product image" width="100" height="100" className="w-20 h-20 border border-black object-cover object-center rounded-xl lg:w-[100px] lg:h-[120px]"/>
                                </div>
                                <div className="flex flex-row justify-center items-center w-1/3 justify-center">
                                    <h3 className="text-lg lg:text-2xl">{wish.prodct_name}</h3>
                                </div>
                                <div className="flex flex-row items-center w-1/3 justify-center">
                                    <span className="text-lg lg:text-xl">{wish.prodct_price}$</span>
                                </div>
                            </div>
                        )) 
                        :
                        <div className="text-xl my-2">{emptylist.message}</div> 
                    }
                </div>
            </div>
        </>
    );
}

export default WishList;