import axios from 'axios';

/**
 * Functions to handle the cart actions request
 */

/**
 * Add a new item to the cart
 */
const addItemToCart = async(item_id) => {
    try{
        const response = await axios.put('https://fit-shop-api.onrender.com/cart/add-to-cart',{
            prodct_id: item_id,
            prodct_qty: 1
        },
        {
            headers: {
                'Content-Type':'application/json'
            },
            withCredentials: true
        });
        return response.data.message
    } catch(err){
        console.log('Cart utils function error: ',err);
    }
}

/**
 * Remove the item from the cart
 */
const removeItemFromCart = async(item_id) => {
    try{
        const response = await axios.delete('https://fit-shop-api.onrender.com/cart/remove-item',{
            data: {
                prodct_id: item_id                   
            },
            headers:{
                'Content-Type': 'application/json'                 
            },
            withCredentials: true
        });
        return response.data.message
    } catch(err){
        console.log("remove from cart error: ", err)
    }
}

/**
 * Change the quantity of the cart item
 */
const changeQuantity = async(item_id, action) => {
    try{
        await axios.put('https://fit-shop-api.onrender.com/cart/modify-item',{
            prodct_id: item_id,
            modif_action: action
        },
        {
            headers: {
                'Content-Type':'application/json'
            },
            withCredentials: true
        });
    } catch(err){
        console.log("quantity increment error: ", err)
    }
}

export { addItemToCart, removeItemFromCart, changeQuantity }