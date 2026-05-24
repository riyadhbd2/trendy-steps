import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Terms & Conditions | Trendy Steps',
    description: 'The terms that govern your use of trendysteps.com, including orders, payments, returns, and intellectual property.'
}

const breadcrumb = {
    title: 'Terms & Conditions',
    links: [{ label: 'Terms & Conditions' }]
}

const sections = [
    {
        heading: '1. Use of the website',
        items: [
            'You must be at least 18 years old, or have permission from a parent or guardian, to place an order.',
            'You agree to use Trendy Steps only for lawful purposes and not to attempt to disrupt the service or interfere with other customers.',
            'You are responsible for keeping your account credentials secure. Activity from your account is treated as your activity.'
        ]
    },
    {
        heading: '2. Product information & pricing',
        items: [
            'Product images, descriptions, and sizing are provided for guidance. Slight variations in colour or finish may occur.',
            'Prices are in BDT and include applicable VAT unless stated otherwise. Delivery fees are calculated at checkout.',
            'We reserve the right to correct pricing or availability errors and to cancel orders affected by such errors with a full refund.'
        ]
    },
    {
        heading: '3. Orders & payments',
        items: [
            'Placing an order is an offer to buy; the order is confirmed once we send a confirmation email and the payment is captured.',
            'Payments are processed via Stripe and SSLCOMMERZ. Cash on delivery is offered for selected orders inside Bangladesh.',
            'We may refuse or cancel an order in cases of suspected fraud, repeated address issues, or unavailable stock — refunds are issued to the original payment method.'
        ]
    },
    {
        heading: '4. Shipping, returns & refunds',
        items: [
            'Orders ship via Pathao and Steadfast across Bangladesh. Tracking information is shared once a parcel is picked up.',
            'Unworn shoes in original packaging can be returned or exchanged within seven days of delivery. See our Shipping & Returns page for full details.',
            'Refunds are processed within seven business days of receiving the returned item, to the original payment method or as store credit on request.'
        ]
    },
    {
        heading: '5. Intellectual property',
        items: [
            'All content on trendysteps.com — logos, photography, copy, and code — is owned by Trendy Steps or its licensors and protected by copyright and trademark law.',
            'You may not reproduce, distribute, or use our content commercially without prior written consent.'
        ]
    },
    {
        heading: '6. Limitation of liability',
        items: [
            'We provide the website on an "as is" basis. To the maximum extent permitted by law, Trendy Steps is not liable for indirect or consequential losses arising from use of the site.',
            'Nothing in these terms limits liability for fraud or any other liability that cannot be excluded under Bangladeshi law.'
        ]
    },
    {
        heading: '7. Changes to these terms',
        items: [
            'We may update these terms from time to time. The latest version will always be posted on this page with the revision date.',
            'Continued use of the site after changes means you accept the updated terms.'
        ]
    }
]

const TermsAndConditions = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <article className='lg:px-32 px-4 py-12 max-w-4xl mx-auto'>
                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Effective date</p>
                <h1 className='text-3xl lg:text-4xl font-semibold mt-2'>Terms & Conditions</h1>
                <p className='text-sm text-muted-foreground mt-1'>Last updated: 24 May 2026</p>

                <p className='mt-6 text-muted-foreground leading-relaxed'>
                    Welcome to Trendy Steps. These terms govern your use of our website, store, and services. Please read them carefully — by continuing to use the site, you agree to be bound by them.
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
                        <h2 className='text-xl font-semibold'>8. Contact</h2>
                        <p className='text-sm text-muted-foreground mt-3'>
                            Questions about these terms? Reach us at <Link href='mailto:support@trendysteps.com' className='text-primary underline underline-offset-2'>support@trendysteps.com</Link> or visit our <Link href='/contact-us' className='text-primary underline underline-offset-2'>contact page</Link>.
                        </p>
                    </section>
                </div>
            </article>
        </div>
    )
}

export default TermsAndConditions
