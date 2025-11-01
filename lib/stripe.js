import Stripe from "stripe"

let stripeClient

export const getStripeClient = () => {
    if (!stripeClient) {
        const secretKey = process.env.STRIPE_SECRET_KEY
        if (!secretKey) {
            throw new Error('STRIPE_SECRET_KEY is not configured.')
        }

        stripeClient = new Stripe(secretKey, {
            apiVersion: '2024-06-20',
        })
    }

    return stripeClient
}

export default getStripeClient
