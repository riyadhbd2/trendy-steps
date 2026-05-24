'use client'
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { IoIosSearch } from 'react-icons/io'

const breadcrumb = {
    title: 'FAQ',
    links: [{ label: 'FAQ' }]
}

const categories = [
    {
        name: 'Orders & payment',
        items: [
            {
                q: 'Which payment methods do you accept?',
                a: 'We accept all major cards via Stripe, plus mobile banking and net banking via SSLCOMMERZ. Cash on delivery is available for selected orders within Bangladesh.'
            },
            {
                q: 'Is VAT included in the price?',
                a: 'Yes. All listed prices are in BDT and include applicable VAT. Delivery fees are added at checkout based on your location.'
            },
            {
                q: 'Can I cancel or change my order?',
                a: 'You can cancel an unshipped order from the My Account page or by messaging us within two hours of placing it. Once a parcel is handed to the courier, we cannot recall it but you can return it after delivery.'
            }
        ]
    },
    {
        name: 'Sizing & fit',
        items: [
            {
                q: 'How do I find my EU size?',
                a: 'Measure your foot from heel to longest toe in centimetres, then check our size chart on each product page. If you fall between two sizes for performance shoes, size up by half.'
            },
            {
                q: 'Do you offer half sizes?',
                a: 'Most running and training models stock half sizes from EU 36 to 45. Lifestyle and outdoor lines run in whole sizes only.'
            },
            {
                q: 'What if my shoes don’t fit?',
                a: 'Unworn pairs in original packaging can be exchanged within seven days. We will arrange a free pickup for size exchanges inside Dhaka.'
            }
        ]
    },
    {
        name: 'Shipping & delivery',
        items: [
            {
                q: 'Where do you deliver?',
                a: 'We deliver across all 64 districts of Bangladesh via Pathao and Steadfast. Dhaka orders typically arrive next day; outside Dhaka takes 2-4 working days.'
            },
            {
                q: 'How much is shipping?',
                a: 'Inside Dhaka: BDT 80. Outside Dhaka: BDT 130. Orders above BDT 5,000 ship free nationwide.'
            },
            {
                q: 'Can I track my order?',
                a: 'Yes. Once your parcel is picked up you will receive a tracking link via SMS and email. You can also see live status on the orders page.'
            }
        ]
    },
    {
        name: 'Returns & refunds',
        items: [
            {
                q: 'What is your return window?',
                a: 'Seven days from delivery for unworn shoes in original packaging. Final-sale and clearance items are not eligible for return.'
            },
            {
                q: 'How long do refunds take?',
                a: 'Once we receive and inspect the returned item, refunds are issued within 7 working days to your original payment method, or as store credit if you prefer.'
            },
            {
                q: 'Do you charge for returns?',
                a: 'Returns inside Dhaka are free. Outside Dhaka you cover the courier fee for the return; the original delivery fee is non-refundable.'
            }
        ]
    },
    {
        name: 'Account & support',
        items: [
            {
                q: 'Do I need an account to order?',
                a: 'Yes. An account lets us send order updates, save addresses, and process returns smoothly. Sign up takes under a minute.'
            },
            {
                q: 'I forgot my password. What now?',
                a: 'Use the reset password link on the sign in screen. You will receive an OTP at your registered email to set a new password.'
            },
            {
                q: 'How do I contact support?',
                a: 'WhatsApp or call +880 1700-000000 between 10am and 8pm, or email support@trendysteps.com any time. We reply within a day.'
            }
        ]
    }
]

const Faq = () => {
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        if (!query.trim()) return categories
        const q = query.toLowerCase()
        return categories
            .map((cat) => ({
                ...cat,
                items: cat.items.filter(
                    (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
                )
            }))
            .filter((cat) => cat.items.length > 0)
    }, [query])

    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />

            <section className='lg:px-32 px-4 py-12'>
                <div className='max-w-2xl'>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Help centre</p>
                    <h1 className='text-3xl lg:text-4xl font-semibold mt-2'>Frequently asked questions</h1>
                    <p className='text-muted-foreground mt-3'>
                        Quick answers about orders, sizing, shipping, and returns. Can’t find what you need? <Link href='/contact-us' className='text-primary underline underline-offset-2'>Contact us</Link>.
                    </p>
                </div>

                <div className='mt-8 relative max-w-xl'>
                    <IoIosSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground' size={20} />
                    <input
                        type='search'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search questions...'
                        className='w-full rounded-full border border-border/70 bg-white/90 px-11 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40'
                    />
                </div>
            </section>

            <section className='lg:px-32 px-4 pb-16'>
                {filtered.length === 0 ? (
                    <div className='text-center py-12 border border-dashed border-border/60 rounded-2xl'>
                        <p className='text-muted-foreground'>No questions match &ldquo;{query}&rdquo;.</p>
                        <Link href='/contact-us' className='inline-block mt-3 text-sm font-semibold underline underline-offset-4 hover:text-primary'>
                            Ask our team
                        </Link>
                    </div>
                ) : (
                    <div className='space-y-10'>
                        {filtered.map((cat) => (
                            <div key={cat.name}>
                                <h2 className='text-xl font-semibold mb-4'>{cat.name}</h2>
                                <Accordion type='single' collapsible className='border border-border/60 rounded-2xl bg-white/80 divide-y'>
                                    {cat.items.map((item, idx) => (
                                        <AccordionItem key={item.q} value={`${cat.name}-${idx}`} className='px-4'>
                                            <AccordionTrigger className='text-left'>{item.q}</AccordionTrigger>
                                            <AccordionContent className='text-sm text-muted-foreground'>
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

export default Faq
