import { memo } from 'react';
import { UserAuth } from '../../../context/AuthContext';
import ProductCard from './product_cards/ProductCard';

const ShopPage = memo(() => {
    const { products_array } = UserAuth();

    return(
        <>
            <div 
                className="min-h-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-3/4 lg:mx-auto gap-6 justify-items-center items-center p-6"
                    
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
                    <div className="relative my-auto mx-auto text-center">
                        <i className="fa-regular fa-triangle-exclamation text-8xl"></i>
                        <p className="text-2xl text-black my-6">Network ERROR</p>
                        <span>Refresh the page or contact support :(</span>
                    </div>
                }   
            </div>
        </>
    );
})

export default ShopPage;