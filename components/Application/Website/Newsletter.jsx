'use client'
import React, { useState } from 'react'
import { showToast } from '@/lib/showToast'
import { MdOutlineMail } from 'react-icons/md'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (submitting) return

        const trimmed = email.trim()
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            showToast('error', 'Please enter a valid email address.')
            return
        }

        setSubmitting(true)
        try {
            await new Promise((resolve) => setTimeout(resolve, 600))
            showToast('success', 'Subscribed! Look out for our next drop.')
            setEmail('')
        } catch {
            showToast('error', 'Could not subscribe. Please try again later.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section className='lg:px-32 px-4 py-12'>
            <div className='rounded-3xl border border-border/60 bg-[#0c121c] text-white p-8 lg:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center overflow-hidden relative'>
                <div className='absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl' />
                <div className='absolute -bottom-20 -left-12 w-72 h-72 rounded-full bg-sky-400/10 blur-3xl' />

                <div className='relative space-y-3'>
                    <p className='text-xs uppercase tracking-[0.4em] text-white/60'>The Drop List</p>
                    <h2 className='text-3xl lg:text-4xl font-semibold leading-tight'>Be first in line for new releases.</h2>
                    <p className='text-sm text-white/70 max-w-md'>
                        Member-only pricing, early access to limited drops, and styling notes — straight to your inbox. No spam, unsubscribe any time.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='relative space-y-3'>
                    <label htmlFor='newsletter-email' className='sr-only'>Email address</label>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <div className='flex-1 flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-3 focus-within:border-white/60 transition'>
                            <MdOutlineMail size={20} className='text-white/70' />
                            <input
                                id='newsletter-email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='you@example.com'
                                className='bg-transparent flex-1 outline-none text-sm placeholder:text-white/40'
                                autoComplete='email'
                            />
                        </div>
                        <button
                            type='submit'
                            disabled={submitting}
                            className='inline-flex justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-60 transition'
                        >
                            {submitting ? 'Joining...' : 'Subscribe'}
                        </button>
                    </div>
                    <p className='text-xs text-white/50'>
                        By subscribing you agree to our privacy policy. We will only email you about Trendy Steps drops and offers.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Newsletter
