import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MenuPage from '../components/website pages/Menu/MenuPage';
import AboutPage from '../components/website pages/About/AboutPage';
import ContactPage from '../components/website pages/Contact/ContactPage';
import PolicyPage from '../components/website pages/Policies/Policy/PolicyPage';
import FaqPage from '../components/website pages/Policies/Faq/FaqPage';
import ShopPage from '../components/website pages/Shop/ShopPage';
import ProductPage from '../components/website pages/Shop/product/ProductPage';
import CustomerInfoPage from '../components/website pages/Checkout/CustomerInfoPage';
import PaymentInfoPage from '../components/website pages/Checkout/PaymentInfoPage';
import BillingAddressPage from '../components/website pages/Checkout/BillingAddressPage';
import PayCheckoutPage from '../components/website pages/Checkout/PayCheckoutPage';
import SignInPage from '../components/Navbar/profile/SignIn/SignInPage';
import RegisterPage from '../components/Navbar/profile/Register/RegisterPage';


function App() {

  const location = useLocation();// to use the route location

  return (
    <>
      <Navbar />

      <AnimatePresence mode='wait'>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MenuPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/customerinfo" element={<CustomerInfoPage />} />
        <Route path="/paymentinfo" element={<PaymentInfoPage />} />
        <Route path="/billingaddress" element={<BillingAddressPage />} />
        <Route path="/checkoutpay" element={<PayCheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </AnimatePresence>

      <Footer />
    </>

    
  )
}

export default App
