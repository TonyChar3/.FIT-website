import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Redux Cart Slice functions
 */

/**
 * fetch the user cart items
 */
export const getCartItems = createAsyncThunk('cart/getCartItems', async() => {
    try{
        const response = await axios.post('https://server-fit-shop.tony-char3.com/cart/cart-items',{},
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response.data.products
    }catch(err){
        console.log(err)
    }
});

// default intial state of the cart
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isOpen: false,
    isLoading: true
}
// create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // add the item to the cart
        addItem: (state, action) => {
            const existItem = state.cartItems.find(item => item._id === action.payload._id)
            if(existItem){
                existItem.qty += 1
            } else {
                const newItem = {
                    _id: action.payload._id,
                    img: action.payload.images[0].img_url,
                    name: action.payload.name,
                    stripe_ID: action.payload.stripe_ID,
                    price: action.payload.prix,
                    qty: 1
                }
                state.cartItems.push(newItem)
                state.isOpen = true;
            }
        },
        // remove an item
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id)

            if(state.cartItems.length === 0){
                state.total = 0
                state.amount = 0
            } else {
                state.cartItems.forEach((items) => {
                    state.total = 0;
                    state.amount = 0;

                    state.amount += 1
                    state.total += Number(items.price * items.qty)
                })
            }
        },
        // increase the quantity of an item +
        incrementQty: (state, action) => {
            state.cartItems.find((item) => {
                if(item._id === action.payload._id){
                    item.qty += 1
                    state.total += Number(item.price)
                }
            })
        },
        // decrease the quantity of an item -
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
        // calculate the total price of the cart
        calculateTotals: (state) => {
            
            state.amount = 0;
            state.total = 0;
    
            state.cartItems.forEach((items) => {
    
                state.amount += 1
                state.total += Number(items.price * items.qty)
            })

        },
        // reset the cart values
        reset: (state, action) => {
            state.cartItems = [];
            state.amount = 0;
            state.total = 0;
            state.isOpen = false;
            state.isLoading = true;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false;

            if(action.payload){
                state.cartItems = action.payload
            
                if(Array.isArray(action.payload)){
                    state.amount === 0 ? (
                        action.payload.forEach((item) => {
                            state.amount += 1
                            state.total += Number(item.price * item.qty)
                        })
                    ) : (
                        state.cartItems.length <= 0 ?
        
                        state.amount = 0
                        :
                        ''
                    )
                }
            } else {
                state.cartItems = []
            }
        })
        .addCase(getCartItems.rejected, (state) => {
            state.isLoading = true;
        })
    }
})

export const { addItem, removeItem, incrementQty, decrementQty, calculateTotals, reset } = cartSlice.actions;
export default cartSlice.reducer;