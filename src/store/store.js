import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice.js';
import modalReducer from './slice/modalSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})