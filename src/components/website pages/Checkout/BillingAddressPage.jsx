import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CartSummary from '../../Navbar/Cart/cart_summary/CartSummary';


const BillingAddressPage = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <CartSummary />
            <div className="flex flex-col justify-start w-80 p-1 mt-5 lg:mt-10">
                <h2 className="text-3xl lg:text-4xl">Billing</h2>
                <div className="w-full border-b-2 border-black lg:mt-5"></div>
            </div>
            <form className="flex flex-col justify-center items-center mt-2 mb-[50px] lg:grid lg:grid-cols-2 lg:gap-5 lg:mb-[100px] lg:mt-5">
                <div className="flex flex-row items-center w-80 lg:col-span-2">
                    <label className="text-lg order-2 ml-2 lg:text-xl lg:m-2">Billing Address same as Shipping</label>
                    <motion.input whileTap={{ scale: 1.05 }} type="checkbox" className="form-checkbox h-5 w-5 order-1 lg:mx-auto" />
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">Billing Name</label>
                    <motion.input whileFocus={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="Full Name"/>
                </div>
                <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">Select Country</label>
                    <motion.select whileFocus={{ scale: 1.05 }} name="country" id="customer_country" className="outline-none appearance-none border border-black px-4 py-2 rounded shadow leading-tight focus:bg-gray-200 focus:border-2 hover:bg-gray-300 hover:border-2 lg:w-40 lg:py-3">
                        <option value="">-- Your country --</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cabo Verde">Cabo Verde</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Central African Republic (CAR)">Central African Republic (CAR)</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                        <option value="Congo, Republic of the">Congo, Republic of the</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic (Czechia)">Czech Republic (Czechia)</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="United-States">United-States</option>
                    </motion.select>
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">Address</label>
                    <motion.input whileFocus={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="Your address" />
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">City</label>
                    <motion.input whileFocus={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="Your address" />
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">County/State/Province/Territory</label>
                    <motion.input whileFocus={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:p-2" placeholder="Your address" />
                </div>
                <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                    <label className="text-lg ml-2 lg:text-2xl lg:m-2">Postal/Zip</label>
                    <motion.input whileFocus={{ scale: 1.05 }} type="number" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:w-20 lg:p-2" placeholder="0000"/>
                </div>
                <motion.button whileTap={{ scale: 0.70 }} type="button" className="bg-black text-white p-2 rounded-xl text-lg my-5 lg:col-span-2 lg:w-60 lg:mx-auto"><Link to="/checkoutpay">Complete & Pay</Link></motion.button>
            </form>
            
        </div>
    );
}

export default BillingAddressPage;