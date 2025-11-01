import { connectDB } from "@/lib/databaseConnection"
import { catchError, response } from "@/lib/helperFunction"
import { zSchema } from "@/lib/zodSchema"
import { getStripeClient } from "@/lib/stripe"

export async function POST(request) {
    try {
        await connectDB()
        const payload = await request.json()

        const schema = zSchema.pick({ amount: true })
        const validated = schema.safeParse(payload)

        if (!validated.success) {
            return response(false, 400, 'Invalid or missing fields.', validated.error)
        }

        const { amount } = validated.data
        const normalizedAmount = Math.round(Number(amount) * 100)

        if (!Number.isFinite(normalizedAmount) || normalizedAmount <= 0) {
            return response(false, 400, 'Invalid amount provided.')
        }

        const stripe = getStripeClient()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: normalizedAmount,
            currency: 'inr',
            automatic_payment_methods: {
                enabled: true,
            },
        })

        return response(true, 200, 'Payment intent created.', {
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id,
        })

    } catch (error) {
        return catchError(error)
    }
}
