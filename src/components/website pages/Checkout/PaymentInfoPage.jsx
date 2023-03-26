import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CartSummary from '../../Navbar/Cart/cart_summary/CartSummary';

const PaymentInfoPage = () => {
    return(
        <>
            <CartSummary />
            <div className="flex flex-col lg:flex-row justify-center w-full">
                
                <form className="flex flex-col justify-center items-center mt-2 mb-[50px] lg:grid lg:grid-cols-2 lg:gap-5">
                    <div className="flex flex-col justify-start w-80 p-1 mt-5 lg:mt-10 lg:col-span-2">
                        <h2 className="text-3xl lg:text-4xl lg:p-2">Payment Info</h2>
                        <div className="w-full border-b-2 border-black lg:mt-1"></div>
                    </div>
                    <div className="flex flex-col w-full lg:justify-center lg:items-center my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">Debit/Credit ?</label>
                        <motion.select whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05 }} name="payment_card" id="type_of_card" className="acitve:ring-transparent appearance-none outline-none border border-black px-4 py-2 rounded shadow leading-tight focus:bg-gray-200 focus:border-2 hover:bg-gray-300 hover:border-2 lg:w-20 lg:py-3">
                            <option value="" disabled={true}>- Choose a payment option -</option>
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                        </motion.select>
                    </div>
                    <div className="flex flex-col w-full my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">Card Number</label>
                        <motion.input whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05}} type="number" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="flex flex-col w-full my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">Card holder name</label>
                        <motion.input whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05}} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="Full Name" />
                    </div>
                    <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">Month</label>
                        <motion.select whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05 }} name="month" id="months_dropdown" className="outline-none appearance-none border border-black px-4 py-2 rounded shadow leading-tight focus:bg-gray-200 focus:border-2 hover:bg-gray-300 hover:border-2 lg:w-35 lg:py-3">
                            <option value="" disabled={true}>- Select a month -</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option> 
                        </motion.select>
                    </div>
                    <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">Year</label>
                        <motion.select whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05 }} name="year" id="card_year" className="outline-none appearance-none border border-black px-4 py-2 rounded shadow leading-tight focus:bg-gray-200 focus:border-2 hover:bg-gray-300 hover:border-2 lg:w-20 lg:py-3">
                            <option value="" disabled={true}>- Select a year -</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                        </motion.select>
                    </div>
                    <div className="flex flex-col w-full my-2">
                        <label className="text-xl m-1 lg:text-2xl lg:m-3">CVV</label>
                        <motion.input whileHover={{ scale: 1.05 }} whileFocus={{ scale: 1.05}} type="number" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="000"/>
                    </div>
                    <motion.button whileTap={{ scale: 0.70 }} type="button" className="bg-black text-white p-2 rounded-xl text-lg my-5 lg:col-span-2 lg:w-60 lg:mx-auto"><Link to="/billingaddress">Complete Checkout</Link></motion.button>
                </form>
            </div>
        </>

    );
}

export default PaymentInfoPage;