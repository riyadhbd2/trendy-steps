import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlinePhone, MdOutlineMail } from 'react-icons/md'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { FiTwitter } from 'react-icons/fi'
import logo from '@/public/assets/images/logo.jpg'

import { USER_DASHBOARD, USER_ORDERS, WEBSITE_LOGIN, WEBSITE_REGISTER, WEBSITE_SHOP } from '@/routes/WebsiteRoute'

const Footer = () => {
    return (
        <footer className='bg-[#0c121c] text-white border-t border-white/10'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10 py-12 lg:px-32 px-4'>
                <div className='lg:col-span-2 md:col-span-2 col-span-1'>
                    <div className='flex items-center gap-3'>
                        <Image
                            src={logo}
                            alt='Trendy Steps'
                            width={44}
                            height={44}
                            className='w-11 h-11 rounded-full object-cover border border-white/15'
                        />
                        <div>
                            <p className='text-lg font-semibold tracking-wide leading-tight'>Trendy Steps</p>
                            <p className='text-[10px] uppercase tracking-[0.3em] text-white/60'>Premium Footwear</p>
                        </div>
                    </div>
                    <p className='text-white/70 text-sm mt-4 leading-relaxed'>
                        Trendy Steps delivers premium sports and lifestyle footwear with EU sizing, VAT included pricing, and nationwide delivery across Bangladesh.
                    </p>

                    <div className='mt-6 space-y-3 text-sm text-white/70'>
                        <div className='flex gap-2'>
                            <IoLocationOutline size={18} />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                        <div className='flex gap-2'>
                            <MdOutlinePhone size={18} />
                            <Link href='tel:+8801700000000' className='hover:text-white'>+880-1700-000000</Link>
                        </div>
                        <div className='flex gap-2'>
                            <MdOutlineMail size={18} />
                            <Link href='mailto:support@trendysteps.com' className='hover:text-white'>support@trendysteps.com</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className='text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-white/80'>Shop</h4>
                    <ul className='space-y-3 text-sm text-white/70'>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=running`} className='hover:text-white'>Running</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=training`} className='hover:text-white'>Training</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=lifestyle`} className='hover:text-white'>Lifestyle</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?category=outdoor`} className='hover:text-white'>Outdoor</Link>
                        </li>
                        <li>
                            <Link href={`${WEBSITE_SHOP}?tag=best-seller`} className='hover:text-white'>Best Sellers</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-white/80'>Help</h4>
                    <ul className='space-y-3 text-sm text-white/70'>
                        <li>
                            <Link href='/contact-us' className='hover:text-white'>Contact Us</Link>
                        </li>
                        <li>
                            <Link href='/faq' className='hover:text-white'>FAQ</Link>
                        </li>
                        <li>
                            <Link href='/shipping-returns' className='hover:text-white'>Shipping & Returns</Link>
                        </li>
                        <li>
                            <Link href={USER_ORDERS} className='hover:text-white'>Track Order</Link>
                        </li>
                        <li>
                            <Link href={USER_DASHBOARD} className='hover:text-white'>My Account</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-sm font-semibold uppercase tracking-[0.3em] mb-4 text-white/80'>Company</h4>
                    <ul className='space-y-3 text-sm text-white/70'>
                        <li>
                            <Link href='/about-us' className='hover:text-white'>About Us</Link>
                        </li>
                        <li>
                            <Link href='/blog' className='hover:text-white'>Journal</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_LOGIN} className='hover:text-white'>Sign In</Link>
                        </li>
                        <li>
                            <Link href={WEBSITE_REGISTER} className='hover:text-white'>Create Account</Link>
                        </li>
                        <li>
                            <Link href='/privacy-policy' className='hover:text-white'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href='/terms-and-conditions' className='hover:text-white'>Terms & Conditions</Link>
                        </li>
                    </ul>
                    <p className='text-sm text-white/70 mt-5'>Stripe and SSLCOMMERZ payments</p>
                    <p className='text-sm text-white/70 mt-1'>Pathao and Steadfast delivery</p>

                    <div className='flex gap-4 mt-6'>
                        <Link href=''>
                            <AiOutlineYoutube className='text-white/80 hover:text-white' size={22} />
                        </Link>
                        <Link href=''>
                            <FaInstagram className='text-white/80 hover:text-white' size={22} />
                        </Link>
                        <Link href=''>
                            <FaWhatsapp className='text-white/80 hover:text-white' size={22} />
                        </Link>
                        <Link href=''>
                            <TiSocialFacebookCircular className='text-white/80 hover:text-white' size={22} />
                        </Link>
                        <Link href=''>
                            <FiTwitter className='text-white/80 hover:text-white' size={22} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-[#0a0f17] border-t border-white/10'>
                <p className='text-center text-sm text-white/60'>© 2026 Trendy Steps. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
