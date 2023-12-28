import './App.css';
import React, { lazy, Suspense, useRef, useEffect } from 'react'
import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthContextProvider } from '../context/AuthContext';
import ProtectedRoutes from '../context/protectedRoutes';
import Navbar from '../components/Navbar/Navbar';
const Footer = lazy(() => import('../components/Footer/Footer'));
const MenuPage = lazy(() => import('../components/website pages/Menu/MenuPage'));
const AboutPage = lazy(() => import('../components/website pages/About/AboutPage'));
const ContactPage = lazy(() => import('../components/website pages/Contact/ContactPage'));
const PolicyPage = lazy(() => import('../components/website pages/Policies/Policy/PolicyPage'));
const FaqPage = lazy(() => import('../components/website pages/Policies/Faq/FaqPage'));
const ShopPage = lazy(() => import('../components/website pages/Shop/ShopPage'));
const ProductPage = lazy(() => import('../components/website pages/Shop/product/ProductPage'));
const PayCheckoutPage = lazy(() => import('../components/website pages/Checkout/PayCheckoutPage'));
const SignInPage = lazy(() => import('../components/Navbar/profile/SignIn/SignInPage'));
const SuccessCheckoutPage = lazy(() => import('../components/website pages/Checkout/Success/SuccessCheckoutPage'));
const ErrorCheckoutPage = lazy(() => import('../components/website pages/Checkout/Error/ErrorCheckoutPage'));
const ProfilePage = lazy(() => import('../components/Navbar/profile/User/profilePage'));
const Error404Page = lazy(() => import('../components/website pages/Error/404page'));
const LoadingComponent = lazy(() => import('../components/Loading/LoadingComponent'));

function App() {

  const location = useLocation();// to use the route location
  const scrollDivRef = useRef(null);

  useEffect(() => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <div className="w-full h-full flex-grow overflow-y-auto" ref={scrollDivRef}>
          <AnimatePresence mode='wait'>
            <Suspense fallback={<LoadingComponent />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MenuPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/productpage" element={<ProductPage />} />
                <Route path="/checkoutpay" element={<PayCheckoutPage />} />
                <Route path="/success" element={<SuccessCheckoutPage />} />
                <Route path="/error" element={<ErrorCheckoutPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/policy" element={<PolicyPage />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/profile" element={ <ProtectedRoutes> <ProfilePage /> </ProtectedRoutes> } />
                <Route path="*" element={<Error404Page />} />
              </Routes> 
            </Suspense>
          </AnimatePresence>  
          <Footer /> 
        </div>
      </AuthContextProvider>
    </>
  );
}

export default App
