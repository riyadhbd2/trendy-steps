import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Link from 'next/link'
import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { TbTruckReturn } from 'react-icons/tb'
import { MdOutlineLocalShipping } from 'react-icons/md'

export const metadata = {
    title: 'Shipping & Returns | Trendy Steps',
    description: 'Delivery timelines, shipping rates, and the return process for orders placed on Trendy Steps in Bangladesh.'
}

const breadcrumb = {
    title: 'Shipping & Returns',
    links: [{ label: 'Shipping & Returns' }]
}

const shippingRates = [
    { area: 'Inside Dhaka', cost: 'BDT 80', eta: '1 working day' },
    { area: 'Dhaka sub-cities (Savar, Gazipur, Narayanganj)', cost: 'BDT 110', eta: '1-2 working days' },
    { area: 'Outside Dhaka', cost: 'BDT 130', eta: '2-4 working days' },
    { area: 'Orders above BDT 5,000', cost: 'Free nationwide', eta: 'Standard delivery times apply' }
]

const returnSteps = [
    {
        title: 'Request within 7 days',
        text: 'Open a return request from My Account > Orders, or message us on WhatsApp with your order ID.'
    },
    {
        title: 'Pack the shoes',
        text: 'Place the unworn pair in the original box with all tags and inserts. Tape the outer parcel securely.'
    },
    {
        title: 'Hand it to the courier',
        text: 'We schedule a free pickup inside Dhaka. Outside Dhaka, drop it at any Steadfast or Pathao point — keep the receipt.'
    },
    {
        title: 'Refund or exchange',
        text: 'After inspection we issue a refund within 7 working days, or dispatch your new size right away.'
    }
]

const ShippingReturns = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />

            <section className='lg:px-32 px-4 py-12'>
                <div className='max-w-2xl'>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Service promise</p>
                    <h1 className='text-3xl lg:text-4xl font-semibold mt-2'>Shipping & Returns</h1>
                    <p className='text-muted-foreground mt-3'>
                        Every Trendy Steps order is shipped via trusted couriers with real-time tracking. If a pair is not right for you, returns are simple and free inside Dhaka.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                    {[
                        { icon: <FaShippingFast size={26} />, title: 'Nationwide reach', text: 'Pathao and Steadfast serve all 64 districts.' },
                        { icon: <MdOutlineLocalShipping size={26} />, title: 'Live tracking', text: 'SMS and email updates from dispatch to delivery.' },
                        { icon: <GiReturnArrow size={26} />, title: '7-day returns', text: 'Unworn pairs in original packaging eligible.' },
                        { icon: <TbTruckReturn size={26} />, title: 'Free pickups in Dhaka', text: 'We collect returns from your door at no cost.' }
                    ].map((item) => (
                        <div key={item.title} className='border border-border/60 rounded-2xl p-5 bg-white/80'>
                            <p className='text-primary'>{item.icon}</p>
                            <h3 className='text-lg font-semibold mt-3'>{item.title}</h3>
                            <p className='text-sm text-muted-foreground mt-2'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='lg:px-32 px-4 py-10'>
                <div className='border border-border/60 rounded-3xl overflow-hidden bg-white/90'>
                    <div className='px-6 py-5 border-b border-border/60'>
                        <h2 className='text-xl font-semibold'>Shipping rates & timelines</h2>
                        <p className='text-sm text-muted-foreground mt-1'>Dispatch happens within one working day of order confirmation.</p>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-sm'>
                            <thead className='bg-muted/40 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                                <tr>
                                    <th className='text-left px-6 py-3'>Area</th>
                                    <th className='text-left px-6 py-3'>Cost</th>
                                    <th className='text-left px-6 py-3'>Expected delivery</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-border/60'>
                                {shippingRates.map((row) => (
                                    <tr key={row.area}>
                                        <td className='px-6 py-3 font-medium'>{row.area}</td>
                                        <td className='px-6 py-3'>{row.cost}</td>
                                        <td className='px-6 py-3 text-muted-foreground'>{row.eta}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className='lg:px-32 px-4 py-10'>
                <h2 className='text-2xl font-semibold mb-6'>How returns work</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {returnSteps.map((step, idx) => (
                        <div key={step.title} className='relative border border-border/60 rounded-2xl p-5 bg-white/80'>
                            <span className='absolute -top-3 left-5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold'>
                                {idx + 1}
                            </span>
                            <h3 className='text-base font-semibold mt-3'>{step.title}</h3>
                            <p className='text-sm text-muted-foreground mt-2'>{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='lg:px-32 px-4 pb-16'>
                <div className='rounded-3xl border border-border/60 bg-[linear-gradient(120deg,_#fff7ed,_#eef2ff)] p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                    <div>
                        <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Need help with an order?</p>
                        <h2 className='text-2xl font-semibold mt-1'>Our team responds within a day.</h2>
                    </div>
                    <Link
                        href='/contact-us'
                        className='inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                    >
                        Contact support
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default ShippingReturns
