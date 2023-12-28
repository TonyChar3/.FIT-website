import { memo } from 'react';
import { UserAuth } from '../../../../context/AuthContext';
import { Link } from 'react-router-dom';

const ProductCard = memo(({ prodct }) => {

    const { setSelectedProduct } = UserAuth();

    return(
        <>
            <div onClick={() => setSelectedProduct(prodct)} className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-xl">
                    <Link to="/productpage"><img src={`${prodct.images[0].img_url}`} alt="Product Image" width="500" height="500"  loading="eager" className={` w-full h-[15em] lg:h-[13em] 2xl:h-[14em] object-cover object-center rounded-xl transform-all ease`} /></Link>   
                </div>                               
                <div className="flex flex-col justify-center items-center">
                    <h3 className="my-1 text-2xl">{prodct.name}</h3>
                    <p className="my-1 text-lg">{prodct.prix}$</p>
                </div>
            </div>
        </>
    )
})

export default ProductCard;
