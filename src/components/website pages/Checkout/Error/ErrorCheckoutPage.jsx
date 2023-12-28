import { Link } from 'react-router-dom';

const ErrorCheckoutPage = () => {
    return(
        <>
            <div className="flex flex-col justify-center items-center p-2 w-full h-[100%]">
                <div className="flex flex-row justify-center w-full">
                    <h2 className="text-3xl">OoOps...</h2>
                </div>
                <p className="text-center my-2 text-lg">
                    Something went wrong, please try again or contact
                    support for assistance.
                </p>
                <button className="bg-black text-white p-1 w-60 my-3 rounded-lg text-lg active:scale-[0.90] transform-all ease duration-100"><Link to="/">Go back to Menu</Link></button>
            </div>
        </>
    );
}

export default ErrorCheckoutPage;