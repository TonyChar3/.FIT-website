import axios from 'axios';

/**
 * Function for the user checkout w/Stripe
 */
const checkOutStripe = async(items_array, stripe_user) => {
    try{
        const stripeKey = import.meta.env.VITE_SECRET_STRIPE
        const response = await axios.post('https://server-fit-shop.tony-char3.com/stripe/create-payment-intent',{
            items: items_array,
            userID: stripe_user
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${stripeKey}`
            },
            withCredentials: true
        });
        return response.data.url
    } catch(err){
        console.log("checkout error: ", err)
    }
}

export { checkOutStripe }