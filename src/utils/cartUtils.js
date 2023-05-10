import axios from 'axios';

const addItemToCart = async(cart_id, item_id, token) => {
    try{
        const response = await axios.put('http://localhost:3001/cart/add-to-cart',{
            cartID: cart_id,
            prodct_id: item_id,
            prodct_qty: 1
        },
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        });

        if(response){
            return response.data.message
        }
    } catch(err){
        console.log('Cart utils function error: ',err);
    }
}

const removeItemFromCart = async(cart_id, item_id, token) => {
    try{
        const response = await axios.delete('http://localhost:3001/cart/remove-item',{
            data: {
                cartID: cart_id,
                prodct_id: item_id                   
            },
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `${token}`                   
            }
        });

        if(response){
            return response.data.message
        }
    } catch(err){
        console.log("remove from cart error: ", err)
    }
}

const changeQuantity = async(cart_id, item_id, action, token) => {
    try{
        await axios.put('http://localhost:3001/cart/modify-item',{
            cartID: cart_id,
            prodct_id: item_id,
            modif_action: action
        },
        {
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        });
    } catch(err){
        console.log("quantity increment error: ", err)
    }
}

export { addItemToCart, removeItemFromCart, changeQuantity }