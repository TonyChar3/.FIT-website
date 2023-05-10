import axios from 'axios';

const addToWishList = async(prodct_id, token) => {
    try{
        // send a post request to the route
        const send = await axios.post('http://localhost:3001/wishlist/addWishlist',{
            prodct_id: prodct_id
        },{
            headers: {
                'Content-Type':'application/json',
                'Authorization': `${token}`
            }
        });

        if(send){
            return send.data.message
        }
    } catch(err){
        console.log("Add to wishlist error: ",err)
    }
}

const removeFromWishList = async(token) => {
    try{
        // send a post request to the route
        const send = await axios.delete('http://localhost:3001/wishlist/removeWishlist', {
            data: { prodct_id: id },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        if(send){
            return send.data.message
        }

    } catch(err){
        console.log("remove from wishlist error:",err)
    }
}

export { removeFromWishList, addToWishList }