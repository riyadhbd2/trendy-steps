import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { GiReturnArrow } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineProduct } from 'react-icons/ai'
import { WEBSITE_SHOP } from '@/routes/WebsiteRoute'

export const metadata = {
    title: 'About Us | Trendy Steps',
    description: 'Trendy Steps delivers premium sports and lifestyle footwear with EU sizing, VAT-included pricing, and nationwide delivery across Bangladesh.'
}

const breadcrumb = {
    title: 'About Us',
    links: [{ label: 'About Us' }]
}

const stats = [
    { value: '50K+', label: 'Happy customers' },
    { value: '180+', label: 'Curated SKUs' },
    { value: '64', label: 'Districts served' },
    { value: '4.8/5', label: 'Average rating' }
]

const values = [
    {
        icon: <AiOutlineProduct size={26} />,
        title: 'Performance first',
        text: 'Every pair is tested for fit, traction, and durability before it makes the lineup.'
    },
    {
        icon: <FaShippingFast size={26} />,
        title: 'Nationwide delivery',
        text: 'Pathao and Steadfast partners reach all 64 districts with real-time tracking.'
    },
    {
        icon: <GiReturnArrow size={26} />,
        title: 'Easy returns',
        text: 'Seven-day exchange window on unworn pairs, no questions asked.'
    },
    {
        icon: <BiSupport size={26} />,
        title: 'Care team',
        text: 'Bangla and English support, seven days a week via WhatsApp and email.'
    }
]

const AboutUs = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />

            <section className='lg:px-32 px-4 py-16'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-5'>
                        <p className='text-xs uppercase tracking-[0.4em] text-muted-foreground'>Our story</p>
                        <h1 className='text-3xl lg:text-5xl font-semibold leading-tight'>
                            Footwear built for the way Bangladesh moves.
                        </h1>
                        <p className='text-muted-foreground leading-relaxed'>
                            Trendy Steps started in 2024 with a simple idea — bring authentic, performance-grade footwear to Bangladesh at fair prices, with sizing and service that locals can trust. From dawn runs in Hatirjheel to long shifts on the shop floor, we obsess over the details that keep your feet happy.
                        </p>
                        <p className='text-muted-foreground leading-relaxed'>
                            Today we curate running, training, lifestyle, outdoor, and court collections for men, women, and kids — all with EU sizing, VAT-included pricing, and delivery via Pathao and Steadfast.
                        </p>
                        <div className='flex flex-wrap gap-3 pt-2'>
                            <Link
                                href={WEBSITE_SHOP}
                                className='px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                            >
                                Shop the collection
                            </Link>
                            <Link
                                href='/contact-us'
                                className='px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary transition'
                            >
                                Talk to our team
                            </Link>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='rounded-3xl overflow-hidden border border-border/60 shadow-xl'>
                            <Image
                                src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?cs=srgb&fm=jpg'
                                alt='Trendy Steps store'
                                width={1600}
                                height={1200}
                                className='w-full h-[420px] object-cover'
                            />
                        </div>
                        <div className='absolute -bottom-6 -left-6 hidden md:block bg-white border border-border/60 rounded-2xl px-5 py-4 shadow-lg'>
                            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Founded</p>
                            <p className='text-2xl font-semibold mt-1'>Dhaka, 2024</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='lg:px-32 px-4 py-10'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {stats.map((item) => (
                        <div key={item.label} className='border border-border/60 rounded-2xl p-6 bg-white/70 text-center'>
                            <p className='text-3xl font-semibold text-primary'>{item.value}</p>
                            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='lg:px-32 px-4 py-14'>
                <div className='max-w-2xl mb-10'>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>What we stand for</p>
                    <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Promises we keep on every order.</h2>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {values.map((item) => (
                        <div key={item.title} className='border border-border/60 rounded-2xl p-6 bg-white/80'>
                            <p className='text-primary mb-3'>{item.icon}</p>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p className='text-sm text-muted-foreground mt-2'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='lg:px-32 px-4 pb-16'>
                <div className='rounded-3xl border border-border/60 bg-[linear-gradient(120deg,_#fff7ed,_#eef2ff)] p-10 lg:p-14 text-center'>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Step in</p>
                    <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Find your next favourite pair.</h2>
                    <p className='text-sm text-muted-foreground mt-3 max-w-xl mx-auto'>
                        Whether you train hard or move easy, our team is happy to help you pick the right fit. Browse the latest drops or message us for a sizing recommendation.
                    </p>
                    <div className='flex flex-wrap items-center justify-center gap-3 mt-6'>
                        <Link
                            href={WEBSITE_SHOP}
                            className='px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                        >
                            Browse shoes
                        </Link>
                        <Link
                            href='/faq'
                            className='px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary transition'
                        >
                            Read FAQs
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
