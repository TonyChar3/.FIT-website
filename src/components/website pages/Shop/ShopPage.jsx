import { memo } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import ProductCard from './product_cards/ProductCard';

const ShopPage = memo(() => {
    const { products_array } = UserAuth();

    return(
        <>
            <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-3/4 lg:h-[100%] lg:mx-auto gap-6 justify-items-center items-center p-6"
                    
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
                {
                    Array.isArray(products_array)?
                    products_array.map((prodct, i) => (
                        <ProductCard key={i} prodct={prodct} />
                    ))
                    : 
                    <>
                    </>
                }   
            </div>
        </>
    );
})

export default ShopPage;