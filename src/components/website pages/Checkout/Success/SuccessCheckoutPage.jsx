import { Link } from 'react-router-dom';

const SuccessCheckoutPage = () => {

    return(
        <div className="flex flex-col justify-center items-center p-2 w-full h-[100%]">
            <div className="flex flex-row justify-center w-full">
                <h2 className="text-3xl lg:text-6xl">Successful Purchase!</h2>
            </div>
            <p className="text-center my-2 text-lg">
                Thank you for your purchase, a confirmation email will be sent shortly
                to confirm your order
            </p>
            <button className="bg-black text-white p-1 w-60 my-3 rounded-lg text-lg lg:text-2xl lg:my-5 active:scale-[0.90] transform-all ease duration-100"><Link to="/">Go back to Menu</Link></button>
        </div>
    );
}

export default SuccessCheckoutPage;