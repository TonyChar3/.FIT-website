import { useState } from 'react';

const CartSummary = () => {

    const [chevron, setChevron] = useState(false);// state of the chevron up/down

    // handle the click of the chevron
    const handleChevronClick = () => {
        setChevron(chevron => !chevron)
    }

    return(
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-start p-1 mt-2 ml-5 w-full lg:w-1/4 lg:mt-4">
                <h2 className="text-lg lg:text-xl">Cart Summary</h2>
                <div className="flex flex-row justify-start items-center ml-5 w-20">
                    <i onClick={handleChevronClick} className={`fa-sharp fa-solid fa-${chevron?'minus' : 'plus'}-large text-sm ${chevron? 'rotate-180': ''} duration-300 cursor-pointer`}></i>
                </div>
            </div>

            <div className={`flex flex-row justify-center items-center p-2 my-1 w-full ${chevron? 'static translate-x-0 z-0 duration-300' : 'absolute -translate-x-[200px] -z-20 h-0'} lg:w-1/2 lg:my-4`}>
                <div className={`flex flex-row justify-around p-2 w-full ${chevron? 'static translate-x-0 z-0 duration-700' : 'relative -translate-x-[200px] w-0 -z-20'}`}>
                    <img src="/images/products/black-mi-band-smartwatch.jpg" alt="product image" width="100" height="100" className="border border-black object-cover object-center rounded-xl lg:w-[120px] lg:h-[120px]"/>
                    <div className="flex flex-row justify-center items-center">
                        <h3 className="text-lg lg:text-2xl">FIT smartwatch</h3>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="text-lg lg:text-xl">Price $$</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;