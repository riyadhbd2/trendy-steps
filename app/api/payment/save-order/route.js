import { orderNotification } from "@/email/orderNotification";
import { connectDB } from "@/lib/databaseConnection";
import { catchError, response } from "@/lib/helperFunction";
import { sendMail } from "@/lib/sendMail";
import { zSchema } from "@/lib/zodSchema";
import OrderModel from "@/models/Order.model";
import { getStripeClient } from "@/lib/stripe";
import { z } from "zod";

export async function POST(request) {
    try {
        await connectDB()
        const payload = await request.json()

        const productSchema = z.object({
            productId: z.string().length(24, 'Invalid product id format'),
            variantId: z.string().length(24, 'Invalid variant id format'),
            name: z.string().min(1),
            qty: z.number().min(1),
            mrp: z.number().nonnegative(),
            sellingPrice: z.number().nonnegative()
        })

        const orderSchema = zSchema.pick({
            name: true, email: true, phone: true, country: true, state: true, city: true, pincode: true, landmark: true, ordernote: true
        }).extend({
            userId: z.string().optional(),
            paymentIntentId: z.string().min(3, 'Payment intent id is required.'),
            subtotal: z.number().nonnegative(),
            discount: z.number().nonnegative(),
            couponDiscountAmount: z.number().nonnegative(),
            totalAmount: z.number().nonnegative(),
            products: z.array(productSchema)
        })


        const validate = orderSchema.safeParse(payload)
        if (!validate.success) {
            return response(false, 400, 'Invalid or missing fields.', { error: validate.error })
        }

        const validatedData = validate.data

        const stripe = getStripeClient()

        const paymentIntent = await stripe.paymentIntents.retrieve(validatedData.paymentIntentId)
        if (!paymentIntent) {
            return response(false, 404, 'Payment not found.')
        }

        if (paymentIntent.status !== 'succeeded') {
            return response(false, 400, 'Payment not completed yet.')
        }

        const expectedAmount = Math.round(validatedData.totalAmount * 100)
        if (!Number.isFinite(expectedAmount) || expectedAmount <= 0) {
            return response(false, 400, 'Invalid order amount provided.')
        }

        if (paymentIntent.amount_received < expectedAmount) {
            return response(false, 400, 'Captured payment amount does not match order total.')
        }

        const paymentId = typeof paymentIntent.latest_charge === 'string'
            ? paymentIntent.latest_charge
            : paymentIntent.charges?.data?.[0]?.id || paymentIntent.id

        const orderIdentifier = paymentIntent.id

        const newOrder = await OrderModel.create({
            user: validatedData.userId,
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone,
            country: validatedData.country,
            state: validatedData.state,
            city: validatedData.city,
            pincode: validatedData.pincode,
            landmark: validatedData.landmark,
            ordernote: validatedData.ordernote,
            products: validatedData.products,
            discount: validatedData.discount,
            couponDiscountAmount: validatedData.couponDiscountAmount,
            totalAmount: validatedData.totalAmount,
            subtotal: validatedData.subtotal,
            payment_id: paymentId,
            order_id: orderIdentifier,
            status: 'pending'
        })

        try {
            const mailData = {
                order_id: orderIdentifier,
                orderDetailsUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/order-details/${orderIdentifier}`
            }

            await sendMail('Order placed successfully.', validatedData.email, orderNotification(mailData))

        } catch (error) {
            console.log(error)
        }


        return response(true, 200, 'Order placed successfully.', { orderId: orderIdentifier })

    } catch (error) {
        return catchError(error)
    }

}
