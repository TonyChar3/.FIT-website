import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import MenuPage from '../components/Menu/MenuPage';


function App() {

  const location = useLocation();// to use the route location

  return (
    <>
      <Navbar />

      <AnimatePresence mode='wait'>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MenuPage />} />
      </Routes>
      </AnimatePresence>

      <Footer />
    </>

    
  )
}

export default App
