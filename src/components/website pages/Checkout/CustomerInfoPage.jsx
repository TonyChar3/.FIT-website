import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CartSummary from '../../Navbar/Cart/cart_summary/CartSummary';

const CustomerInfoPage = () => {
    return(
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-center w-full mt-5 p-1 border-b-2 border-black lg:p-5">
                <h2 className="text-3xl lg:text-4xl">Customer Info</h2>
            </div>
            <CartSummary />
            <div className="flex flex-col justify-center items-center p-1">
                <motion.button whileTap={{ scale: 0.70 }} className="bg-black text-white w-60 rounded-lg my-5 lg:w-80 lg:my-8"><i className="fa-brands fa-google-pay text-4xl lg:text-5xl"></i></motion.button>
                <span className="text-xl lg:text-2xl">- OR -</span>
            </div>
            <form className="p-1 mb-[50px] flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:gap-5 lg:mb-[100px]">
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">First Name</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-80 lg:p-2 lg:mx-2" placeholder="Your first name"/>
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Last Name</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-80 lg:p-2 lg:mx-2" placeholder="Your last name"/>
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Email</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="email" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-80 lg:p-2 lg:mx-2" placeholder="email@address.com"/>
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Address</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-80 lg:p-2 lg:mx-2" placeholder="68 gogo street"/>
                </div>
                <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Select Country</label>
                    <select name="country" id="customer_country" className="outline-none appearance-none border border-black px-4 py-2 rounded shadow leading-tight focus:bg-gray-200 focus:border-2 hover:bg-gray-300 hover:border-2 lg:w-60">
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
                    </select>
                </div>
                <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Town/City</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-60 lg:p-2"/>
                </div>
                <div className="flex flex-col lg:justify-center lg:items-center w-full my-2">
                    <label className="text-lg m-1 lg:text-xl lg:m-3">County/State/Province/Territory</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="text" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black lg:w-60 lg:p-2"/>
                </div>
                <div className="flex flex-col lg:items-center w-full my-2">
                    <label className="text-lg m-1 lg:text-2xl lg:m-3">Zip/Postal</label>
                    <motion.input whileFocus={{ scale: 1.05}} whileHover={{ scale: 1.05 }} type="number" className="p-1 border-[1px] border-black rounded-lg outline-none focus:bg-gray-300 focus:border-2 focus:border-black hover:bg-gray-300 hover:border-2 hover:border-black appearance-none lg:w-20 lg:p-2" placeholder="000000"/>
                </div>
                <div className="flex flex-col justify-center items-center lg:justify-self-center lg:col-span-2">
                    <motion.button whileTap={{ scale: 0.70 }} type="button" className="bg-black text-white p-2 rounded-xl text-lg my-5 lg:p-3"><Link to="/paymentinfo">Continue to payment & billing</Link></motion.button>
                    <Link to="/shop" className="text-lg">Go back shopping</Link>
                </div>
            </form>
            
        </div>
    );
}

export default CustomerInfoPage;