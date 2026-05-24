import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcStripe, FaCcAmex } from 'react-icons/fa'
import { MdLock, MdOutlineLocalShipping, MdOutlineVerifiedUser } from 'react-icons/md'
import { TbTruckReturn } from 'react-icons/tb'

const TrustBadges = () => {
    return (
        <section className='lg:px-32 px-4 pb-10'>
            <div className='border border-border/60 rounded-3xl bg-white/80 px-6 py-6 lg:py-8'>
                <div className='grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center'>
                    <div className='grid sm:grid-cols-2 gap-4'>
                        {[
                            { icon: <MdLock size={22} />, title: 'Secure checkout', text: 'Stripe & SSLCOMMERZ, 256-bit SSL.' },
                            { icon: <MdOutlineLocalShipping size={22} />, title: 'Nationwide delivery', text: 'Pathao & Steadfast couriers.' },
                            { icon: <TbTruckReturn size={22} />, title: 'Easy 7-day returns', text: 'Free pickups inside Dhaka.' },
                            { icon: <MdOutlineVerifiedUser size={22} />, title: '100% authentic', text: 'Sourced from trusted partners.' }
                        ].map((item) => (
                            <div key={item.title} className='flex gap-3'>
                                <span className='text-primary mt-0.5'>{item.icon}</span>
                                <div>
                                    <p className='text-sm font-semibold'>{item.title}</p>
                                    <p className='text-xs text-muted-foreground'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='border-t lg:border-t-0 lg:border-l border-border/60 lg:pl-6 pt-5 lg:pt-0'>
                        <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>We accept</p>
                        <div className='flex flex-wrap items-center gap-4 mt-3 text-foreground/70'>
                            <FaCcVisa size={36} aria-label='Visa' />
                            <FaCcMastercard size={36} aria-label='Mastercard' />
                            <FaCcAmex size={36} aria-label='American Express' />
                            <FaCcStripe size={36} aria-label='Stripe' />
                            <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 text-xs font-semibold'>
                                bKash
                            </span>
                            <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 text-xs font-semibold'>
                                Nagad
                            </span>
                            <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 text-xs font-semibold'>
                                Rocket
                            </span>
                            <span className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 text-xs font-semibold'>
                                COD
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustBadges
