import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showModal, closeModal } from "../store/slice/modalSlice.js";
import Cookies from "js-cookie";
import { getCartItems } from "../store/slice/cartSlice.js";

const host = import.meta.env.VITE_HOST;

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products_array, setProductsArray] = useState(null);
  const [selected_product, setSelectedProduct] = useState(null);
  const [cookie_consent, setCookieConsent] = useState(null);
  const [wishlist_array, setWishList] = useState(null);

  const dispatch = useDispatch();

  const GoogleLogIn = async () => {
    try {
      // clear the httpOnly customer hash + jwt token
      const response = await axios.get(`${host}/user/clear-session`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response) {
        // redirect to google login
        window.location.href = `${host}/user/google-login`;
      }
    } catch (err) {
      dispatch(showModal(err));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  const FacebookLogIn = async () => {
    try {
      // clear the httpOnly customer hash + jwt token
      const response = await axios.get(`${host}/user/clear-session`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response) {
        // redirect to google login
        window.location.href = `${host}/user/facebook-login`;
      }
    } catch (err) {
      dispatch(showModal(err));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  const LogOut = async () => {
    // make a request to logout
    await axios.post(
      `${host}/user/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(showModal("Logging out..."));
    setTimeout(() => {
      dispatch(closeModal());
    }, [3000]);
    window.location.reload();
  };

  const FetchProducts = async () => {
    try {
      // fetch all store products
      const response = await axios.get(`${host}/shop/product`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      // set the array
      setProductsArray(response.data);
    } catch (err) {
      dispatch(showModal(err));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  const ClearCookies = async () => {
    try {
      // clear the httpOnly customer hash + jwt token
      await axios.get(`${host}/user/clear-session`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    } catch (err) {
      dispatch(showModal(err));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  const fetchWishList = async () => {
    try {
      const response = await axios.get(`${host}/wishlist/wishlist`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setWishList(response.data);
    } catch (err) {
      dispatch(showModal(err.message));
      setTimeout(() => {
        dispatch(closeModal());
      }, [5000]);
    }
  };

  const GetFitUserInfo = async () => {
    try {
      const fetch_auth = await axios.get(`${host}/user/current`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (fetch_auth) {
        setUser(fetch_auth.data);
        dispatch(getCartItems());
      }
    } catch (err) {
      setUser(null);
      if (cookie_consent !== false) {
        try {
          await axios.get(`${host}/fit-user`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          });
          dispatch(getCartItems());
        } catch (err) {
          dispatch(showModal(err.message));
          setTimeout(() => {
            dispatch(closeModal());
          }, [5000]);
        }
      }
    }
    await FetchProducts();
  };

  useEffect(() => {
    // fetch the user data
    GetFitUserInfo();
    // get the consent of cookies from the storage
    const cookie_state_consent = Cookies.get("CookieConsent");
    setCookieConsent(cookie_state_consent);
  }, []);

  useEffect(() => {
    if (cookie_consent === false) {
      ClearCookies();
    }
  }, [cookie_consent]);

  useEffect(() => {
    if (user !== null) {
      fetchWishList();
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        GoogleLogIn,
        FacebookLogIn,
        LogOut,
        products_array,
        selected_product,
        setSelectedProduct,
        cookie_consent,
        setCookieConsent,
        wishlist_array,
        setWishList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
