import { Link } from 'react-router-dom';

const ShopPage = () => {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 md: lg:grid-cols-2 lg:w-3/4 lg:mx-auto gap-8 justify-items-center items-center my-[50px]">
            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-sm">
                    <Link to="/productpage" state={{ name: 'FIT smartwatch', price: 119.99}}><img src="/images/products/black-mi-band-smartwatch.jpg" alt="Product Image" width="500" height="500" className="w-full h-[229px] object-cover object-center" /></Link>   
                </div>
                    
                <div className="flex flex-col justify-center items-center">
                    <h3 className="my-1 text-2xl">FIT smartwatch</h3>
                    <p className="my-1 text-lg">119.99$</p>
                </div>
            </div>

            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-sm">
                    <Link to="/productpage"><img src="/images/products/pexels-cottonbro-studio-4325439.jpg" alt="Product Image" width="500" height="500" className="w-full h-[229px] object-cover object-center" /></Link>
                </div>
                    
                <div className="flex flex-col justify-center items-center">
                    <h3 className="my-1 text-2xl">Yoga mats</h3>
                    <p className="my-1 text-lg">40.75$</p>
                </div>
            </div>

            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-sm">
                    <Link to="/productpage"><img src="/images/products/photo_2023-03-21_07-36-36.jpg" alt="Product Image" width="500" height="500" className="w-full h-[229px] object-cover object-center" /></Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="my-1 text-2xl">Running shoes</h3>
                    <p className="my-1 text-lg">180$</p>
                </div>
            </div>

            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className="w-5/6 lg:w-3/6 my-2 border border-black rounded-sm">
                    <Link to="/productpage"><img src="/images/products/blank-colored-t-shirts.jpg" alt="Product Image"width="500" height="500" className="w-full h-[229px] object-cover object-center" /></Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="my-1 text-2xl">T-shirts</h3>
                    <p className="my-1 text-lg">25$</p>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;