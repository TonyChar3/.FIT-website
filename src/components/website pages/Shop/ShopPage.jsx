import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShopPage = () => {

    const [prodctArray, setProdct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/shop/product')
        .then(response => {
            setProdct(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    },[])

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 md: lg:grid-cols-2 lg:w-3/4 lg:mx-auto gap-8 justify-items-center items-center my-[50px]">
            {
                prodctArray.map((prodct, i) => (
                   
                        <div key={i} className="w-10/12 flex flex-col justify-center items-center">
                            <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-sm">
                                <Link to="/productpage" state={{ id: prodct._id }}><img src={prodct.images[0].img_url} alt="Product Image" width="500" height="500" className="w-full h-[229px] object-cover object-center" /></Link>   
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