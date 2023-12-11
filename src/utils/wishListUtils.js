import axios from 'axios';

/**
 * Function to handle the wishlist actions request 
 */

/**
 * Add a new item to the wishlist
 */
const addToWishList = async(prodct_id) => {
    try{
        // send a post request to the route
        const send = await axios.post('https://fit-shop-api.onrender.com/wishlist/addWishlist',{
            prodct_id: prodct_id
        },{
            headers: {
                'Content-Type':'application/json'
            },
            withCredentials: true
        });
        return send.data.message
    } catch(err){
        console.log("Add to wishlist error: ",err)
    }
}

/**
 * Remove the selected item from the wishlist
 */
const removeFromWishList = async(prodct_id) => {
    try{
        // send a post request to the route
        const send = await axios.delete('https://fit-shop-api.onrender.com/wishlist/removeWishlist', {
            data: { prodct_id: prodct_id },
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return send.data.message
    } catch(err){
        console.log("remove from wishlist error:",err)
    }
}

export { removeFromWishList, addToWishList }