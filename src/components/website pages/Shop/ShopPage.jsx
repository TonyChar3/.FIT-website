import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../store/slice/cartSlice';
import { closeModal, showModal } from '../../../store/slice/modalSlice';

const ShopPage = () => {

    const dispatch = useDispatch();

    const [prodctArray, setProdct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/shop/product',{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response => {
            setProdct(response.data)
        })
        .catch(err => {
            dispatch(showModal(err.message))
            setTimeout(() => {
                dispatch(closeModal())
            },[5000])
        })
    },[])

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch])

    return(
        <>
            <div 
                className="grid grid-cols-1 md:grid-cols-2 md: lg:grid-cols-2 lg:w-3/4 lg:mx-auto gap-8 justify-items-center items-center my-[50px]"
                
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
            {
                prodctArray.map((prodct, i) => (
                   
                        <div key={i} className="w-10/12 flex flex-col justify-center items-center">
                            <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-xl">
                                <Link to="/productpage" state={{ id: prodct._id }}><img src={prodct.images[0].img_url} alt="Product Image" width="500" height="500" className="w-full h-[229px] object-cover object-center rounded-xl" /></Link>   
                            </div>
                                
                            <div className="flex flex-col justify-center items-center">
                                <h3 className="my-1 text-2xl">{prodct.name}</h3>
                                <p className="my-1 text-lg">{prodct.prix}$</p>
                            </div>
                        </div>
                    
                ))}
            </div>
        </>

    );
}

export default ShopPage;