import axios from 'axios';

const checkOutStripe = async(items_array, stripe_user) => {
    try{
        const stripeKey = import.meta.env.VITE_SECRET_STRIPE

        const response = await axios.post('http://localhost:3001/stripe/create-payment-intent',{
            items: items_array,
            userID: stripe_user
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${stripeKey}`
            }
        });

        if(response){
            return response.data.url
        }
    } catch(err){
        console.log("checkout error: ", err)
    }
}

export { checkOutStripe }