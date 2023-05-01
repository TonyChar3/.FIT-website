import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';




export const getCartItems = createAsyncThunk('cart/getCartItems', async() => {
    try{
        const token = Cookies.get('fit-user') || Cookies.get('fit-customer')
        const response = await axios.get('http://localhost:3001/cart/items',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        if(response){
            return response.data
        } else {
            console.log(error.message)
        }
    }catch(err){
        console.log(err)
    }
});

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isOpen: false,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            
            const existItem = state.cartItems.find(item => item._id === action.payload._id)

            if(existItem){
                existItem.qty += 1
            } else {
                const newItem = {
                    _id: action.payload._id,
                    img: action.payload.images[0].img_url,
                    name: action.payload.name,
                    price: action.payload.prix,
                    qty: 1
                }
                state.cartItems.push(newItem)
                state.isOpen = true;
            }

        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)

            state.cartItems.forEach((items) => {
                state.total = 0;
                state.amount = 0;

                state.amount += 1
                state.total += Number(items.price * items.qty)
            })
        },
        incrementQty: (state, action) => {
            state.cartItems.find((item) => {
                if(item._id === action.payload._id){
                    item.qty += 1
                    state.total += Number(item.price)
                }
            })
        },
        decrementQty: (state, action) => {
            state.cartItems.find((item) => {
                if(item._id === action.payload._id){

                    if(item.qty > 0){
                        item.qty -= 1
                        state.total -= Number(item.price)
                        if(item.qty === 0){
                            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)
                            state.amount -= 1
                            state.total -= Number(item.price * item.qty)
                        }
                    }
                } 
            })
        },
        calculateTotals: (state) => {
            
            state.amount = 0;
            state.total = 0;
    
            state.cartItems.forEach((items) => {
    
                state.amount += 1
                state.total += Number(items.price * items.qty)
            })

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload
            
            state.amount === 0 ? 
            action.payload.forEach((item) => {
                state.amount += 1
                state.total += Number(item.price * item.qty)
            })
            :
            state.cartItems.length === 0 ?
            state.amount = 0
            :
            ''
        })
        .addCase(getCartItems.rejected, (state) => {
            state.isLoading = true;
        })
    }
})
export const { addItem, removeItem, incrementQty, decrementQty, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;