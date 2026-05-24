'use client'
import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlinePhone, MdOutlineMail } from 'react-icons/md'
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'
import { showToast } from '@/lib/showToast'

const breadcrumb = {
    title: 'Contact Us',
    links: [{ label: 'Contact Us' }]
}

const channels = [
    {
        icon: <MdOutlineMail size={22} />,
        title: 'Email',
        primary: 'support@trendysteps.com',
        href: 'mailto:support@trendysteps.com',
        note: 'Replies within 24 hours.'
    },
    {
        icon: <MdOutlinePhone size={22} />,
        title: 'Phone',
        primary: '+880 1700-000000',
        href: 'tel:+8801700000000',
        note: 'Saturday to Thursday, 10am - 8pm.'
    },
    {
        icon: <FaWhatsapp size={22} />,
        title: 'WhatsApp',
        primary: '+880 1700-000000',
        href: 'https://wa.me/8801700000000',
        note: 'Fastest way to reach the store.'
    },
    {
        icon: <IoLocationOutline size={22} />,
        title: 'Studio',
        primary: 'Dhaka, Bangladesh',
        href: null,
        note: 'Visits by appointment only.'
    }
]

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (submitting) return

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            showToast('error', 'Please fill in name, email, and message.')
            return
        }

        setSubmitting(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 600))
            showToast('success', 'Thanks for reaching out! We will reply shortly.')
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch {
            showToast('error', 'Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />

            <section className='lg:px-32 px-4 py-12'>
                <div className='max-w-2xl'>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Talk to us</p>
                    <h1 className='text-3xl lg:text-4xl font-semibold mt-2'>We are here to help.</h1>
                    <p className='text-muted-foreground mt-3'>
                        Sizing question, delivery update, or just looking for a recommendation? Pick the channel that suits you, or send us a note below.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                    {channels.map((item) => {
                        const card = (
                            <div className='border border-border/60 rounded-2xl p-5 bg-white/80 h-full'>
                                <p className='text-primary'>{item.icon}</p>
                                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground mt-3'>{item.title}</p>
                                <p className='font-semibold mt-1'>{item.primary}</p>
                                <p className='text-sm text-muted-foreground mt-2'>{item.note}</p>
                            </div>
                        )
                        return item.href ? (
                            <Link key={item.title} href={item.href} className='block hover:-translate-y-0.5 transition'>
                                {card}
                            </Link>
                        ) : (
                            <div key={item.title}>{card}</div>
                        )
                    })}
                </div>
            </section>

            <section className='lg:px-32 px-4 pb-16'>
                <div className='grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start'>
                    <form
                        onSubmit={handleSubmit}
                        className='border border-border/60 rounded-3xl p-6 lg:p-8 bg-white/90 shadow-sm space-y-4'
                    >
                        <div>
                            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Send a message</p>
                            <h2 className='text-2xl font-semibold mt-1'>Drop us a note</h2>
                        </div>

                        <div className='grid sm:grid-cols-2 gap-4'>
                            <label className='block text-sm'>
                                <span className='font-medium'>Your name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder='Full name'
                                    className='mt-2 w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40'
                                />
                            </label>
                            <label className='block text-sm'>
                                <span className='font-medium'>Email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder='you@example.com'
                                    className='mt-2 w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40'
                                />
                            </label>
                        </div>

                        <label className='block text-sm'>
                            <span className='font-medium'>Subject</span>
                            <input
                                type='text'
                                name='subject'
                                value={form.subject}
                                onChange={handleChange}
                                placeholder='How can we help?'
                                className='mt-2 w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40'
                            />
                        </label>

                        <label className='block text-sm'>
                            <span className='font-medium'>Message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder='Tell us a bit about your question or order.'
                                className='mt-2 w-full rounded-xl border border-border/70 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40'
                            />
                        </label>

                        <button
                            type='submit'
                            disabled={submitting}
                            className='inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition'
                        >
                            {submitting ? 'Sending...' : 'Send message'}
                        </button>
                    </form>

                    <aside className='space-y-5 lg:sticky lg:top-24'>
                        <div className='border border-border/60 rounded-3xl p-6 bg-white/80'>
                            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Hours</p>
                            <div className='mt-3 flex items-start gap-3'>
                                <IoTimeOutline size={22} className='text-primary mt-1' />
                                <div className='text-sm'>
                                    <p>Saturday - Thursday: 10:00am - 8:00pm</p>
                                    <p>Friday: 2:00pm - 8:00pm</p>
                                </div>
                            </div>
                        </div>

                        <div className='border border-border/60 rounded-3xl p-6 bg-[linear-gradient(120deg,_#fff7ed,_#eef2ff)]'>
                            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Need order help?</p>
                            <h3 className='text-lg font-semibold mt-2'>Check your order status first.</h3>
                            <p className='text-sm text-muted-foreground mt-2'>
                                Sign in to view tracking, invoices, and delivery updates from the my account page.
                            </p>
                            <Link
                                href='/orders'
                                className='inline-block mt-4 text-sm font-semibold underline underline-offset-4 hover:text-primary'
                            >
                                Track an order
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
