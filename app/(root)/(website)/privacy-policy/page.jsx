import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Privacy Policy | Trendy Steps',
    description: 'How Trendy Steps collects, uses, and protects personal information across our website, payments, and delivery partners.'
}

const breadcrumb = {
    title: 'Privacy Policy',
    links: [{ label: 'Privacy Policy' }]
}

const sections = [
    {
        heading: '1. Information we collect',
        items: [
            'Account details such as your name, email, phone number, and shipping addresses provided during registration or checkout.',
            'Payment details processed by Stripe and SSLCOMMERZ. We never store full card numbers on our own servers.',
            'Order history, product reviews, and support conversations that help us serve you better.',
            'Usage data such as device type, IP address, pages visited, and approximate location, captured via cookies and analytics.'
        ]
    },
    {
        heading: '2. How we use your data',
        items: [
            'Process orders, handle deliveries via Pathao and Steadfast, and provide after-sale support.',
            'Personalise product recommendations and improve our catalogue and site experience.',
            'Send transactional updates (order confirmations, shipment tracking) and, with your consent, marketing offers.',
            'Detect fraud, prevent abuse, and meet legal or regulatory requirements in Bangladesh.'
        ]
    },
    {
        heading: '3. Sharing with third parties',
        items: [
            'Payment processors (Stripe, SSLCOMMERZ) for secure transactions.',
            'Delivery partners (Pathao, Steadfast) for fulfilment.',
            'Cloud and analytics providers (Cloudinary, hosting, Upstash) that support core site functions under strict data protection terms.',
            'Government or law enforcement when required by valid legal process.'
        ]
    },
    {
        heading: '4. Your rights',
        items: [
            'Access, update, or delete your account information from the My Account dashboard or by contacting support.',
            'Opt out of marketing emails any time using the unsubscribe link in our newsletters.',
            'Request a copy of the personal data we hold about you.'
        ]
    },
    {
        heading: '5. Data retention & security',
        items: [
            'We retain order and customer data for as long as needed to provide services and meet tax and accounting obligations.',
            'Transmissions are encrypted with HTTPS. Passwords are hashed; we never store them in plain text.',
            'Despite our safeguards, no online service is 100% secure — please use a strong unique password and keep your account credentials private.'
        ]
    }
]

const PrivacyPolicy = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <article className='lg:px-32 px-4 py-12 max-w-4xl mx-auto'>
                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Effective date</p>
                <h1 className='text-3xl lg:text-4xl font-semibold mt-2'>Privacy Policy</h1>
                <p className='text-sm text-muted-foreground mt-1'>Last updated: 24 May 2026</p>

                <p className='mt-6 text-muted-foreground leading-relaxed'>
                    At Trendy Steps, we treat your data the same way we treat your orders — with care and accountability. This policy explains what we collect, how we use it, and the choices you have. By using <Link href='/' className='text-primary underline underline-offset-2'>trendysteps.com</Link>, you agree to the practices described below.
                </p>

                <div className='mt-10 space-y-10'>
                    {sections.map((section) => (
                        <section key={section.heading}>
                            <h2 className='text-xl font-semibold'>{section.heading}</h2>
                            <ul className='list-disc ps-6 mt-3 space-y-2 text-sm text-muted-foreground'>
                                {section.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <section>
                        <h2 className='text-xl font-semibold'>6. Contact us</h2>
                        <p className='text-sm text-muted-foreground mt-3'>
                            For privacy questions or data requests, email <Link href='mailto:support@trendysteps.com' className='text-primary underline underline-offset-2'>support@trendysteps.com</Link> or write to us at Trendy Steps, Dhaka, Bangladesh. We respond within five business days.
                        </p>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default PrivacyPolicy
