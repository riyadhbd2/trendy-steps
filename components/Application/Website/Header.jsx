'use client'
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import Cart from './Cart'
import { VscAccount } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import userIcon from '@/public/assets/images/user.png'
import logo from '@/public/assets/images/logo.jpg'
import { IoMdClose } from 'react-icons/io'
import { IoChevronDown } from 'react-icons/io5'
import { HiMiniBars3 } from 'react-icons/hi2'
import Search from './Search'

const Header = () => {
    const auth = useSelector(store => store.authStore.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    const collectionLinks = [
        { label: 'Running', note: 'Road and track', href: `${WEBSITE_SHOP}?category=running` },
        { label: 'Training', note: 'Gym and studio', href: `${WEBSITE_SHOP}?category=training` },
        { label: 'Lifestyle', note: 'Everyday wear', href: `${WEBSITE_SHOP}?category=lifestyle` },
        { label: 'Outdoor', note: 'Trail ready', href: `${WEBSITE_SHOP}?category=outdoor` },
        { label: 'Court', note: 'Hoops and court', href: `${WEBSITE_SHOP}?category=court` },
        { label: 'Kids', note: 'Junior sizes', href: `${WEBSITE_SHOP}?category=kids` },
        { label: 'Accessories', note: 'Bags and socks', href: `${WEBSITE_SHOP}?category=accessories` },
        { label: 'Sale', note: 'Limited drops', href: `${WEBSITE_SHOP}?tag=sale` }
    ]

    useEffect(() => {
        if (!isMobileMenu) {
            setActiveDropdown(null)
        }
    }, [isMobileMenu])

    return (
        <header className='sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70'>
            <div className='hidden lg:block border-b border-border/50'>
                <div className='lg:px-32 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground'>
                    <p className='tracking-[0.25em] uppercase'>Premium sports and lifestyle footwear</p>
                    <div className='flex items-center gap-4'>
                        <span>VAT included</span>
                        <span>EU sizing</span>
                        <span>Pathao and Steadfast delivery</span>
                    </div>
                </div>
            </div>

            <div className='lg:px-32 px-4'>
                <div className='flex items-center justify-between lg:py-4 py-3 gap-6'>
                    <Link href={WEBSITE_HOME} className='flex items-center gap-3'>
                        <Image
                            src={logo}
                            alt='Trendy Steps'
                            width={44}
                            height={44}
                            priority
                            className='w-11 h-11 rounded-full object-cover border border-border/60'
                        />
                        <div className='hidden sm:block'>
                            <p className='text-lg font-semibold tracking-wide leading-tight'>Trendy Steps</p>
                            <p className='text-[10px] uppercase tracking-[0.3em] text-muted-foreground'>Footwear Studio</p>
                        </div>
                    </Link>

                    <nav
                        className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 lg:flex-1 bg-background fixed z-50 top-0 w-full h-screen transition-all duration-300 ${isMobileMenu ? 'left-0' : '-left-full'}`}
                    >
                        <div className='lg:hidden flex justify-between items-center bg-muted/40 py-4 border-b px-4'>
                            <p className='text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground'>Menu</p>
                            <button
                                type='button'
                                onClick={() => {
                                    setIsMobileMenu(false)
                                    setActiveDropdown(null)
                                }}
                            >
                                <IoMdClose size={25} className='text-foreground/70 hover:text-primary' />
                            </button>
                        </div>

                        <ul className='lg:flex lg:justify-center lg:items-center gap-8 px-4 lg:px-0 lg:pt-0 pt-6'>
                            <li className='text-foreground/80 hover:text-primary hover:font-semibold'>
                                <Link href={`${WEBSITE_SHOP}?tag=new`} className='block py-2'>
                                    New In
                                </Link>
                            </li>
                            <li
                                className='text-foreground/80 hover:text-primary hover:font-semibold relative'
                                onMouseEnter={() => setActiveDropdown('collections')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button
                                    type='button'
                                    className='flex items-center gap-2 py-2 w-full'
                                    onClick={() => setActiveDropdown(activeDropdown === 'collections' ? null : 'collections')}
                                    aria-haspopup='menu'
                                    aria-expanded={activeDropdown === 'collections'}
                                >
                                    <span>Collections</span>
                                    <IoChevronDown className={`transition-transform duration-200 ${activeDropdown === 'collections' ? 'rotate-180 text-primary' : ''}`} size={14} />
                                </button>
                                <div
                                    className={`${activeDropdown === 'collections' ? 'block' : 'hidden'} mt-2 lg:mt-0 lg:absolute lg:top-full lg:left-1/2 lg:-translate-x-1/2 lg:min-w-[520px] bg-background border border-border/70 rounded-2xl shadow-xl lg:py-5 z-50`}
                                >
                                    <div className='grid sm:grid-cols-2 gap-4 px-4'>
                                        {collectionLinks.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className='group rounded-xl border border-transparent hover:border-border/80 hover:bg-muted/40 transition-all p-3'
                                                onClick={() => {
                                                    setActiveDropdown(null)
                                                    setIsMobileMenu(false)
                                                }}
                                            >
                                                <p className='font-semibold text-sm text-foreground group-hover:text-primary'>{item.label}</p>
                                                <p className='text-xs text-muted-foreground'>{item.note}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li className='text-foreground/80 hover:text-primary hover:font-semibold'>
                                <Link href={`${WEBSITE_SHOP}?category=men`} className='block py-2'>
                                    Men
                                </Link>
                            </li>
                            <li className='text-foreground/80 hover:text-primary hover:font-semibold'>
                                <Link href={`${WEBSITE_SHOP}?category=women`} className='block py-2'>
                                    Women
                                </Link>
                            </li>
                            <li className='text-foreground/80 hover:text-primary hover:font-semibold'>
                                <Link href={`${WEBSITE_SHOP}?category=accessories`} className='block py-2'>
                                    Accessories
                                </Link>
                            </li>
                            <li className='text-foreground/80 hover:text-primary hover:font-semibold'>
                                <Link href={`${WEBSITE_SHOP}?tag=best-seller`} className='block py-2'>
                                    Best Sellers
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex items-center gap-5'>
                        <button type='button' onClick={() => setShowSearch(!showSearch)}>
                            <IoIosSearch className='text-foreground/70 hover:text-primary' size={24} />
                        </button>

                        <Cart />

                        {!auth ? (
                            <Link href={WEBSITE_LOGIN}>
                                <VscAccount className='text-foreground/70 hover:text-primary' size={24} />
                            </Link>
                        ) : (
                            <Link href={USER_DASHBOARD}>
                                <Avatar>
                                    <AvatarImage src={auth?.avatar?.url || userIcon.src} />
                                </Avatar>
                            </Link>
                        )}

                        <button type='button' className='lg:hidden block' onClick={() => setIsMobileMenu(true)}>
                            <HiMiniBars3 size={25} className='text-foreground/70 hover:text-primary' />
                        </button>
                    </div>
                </div>
            </div>

            <Search isShow={showSearch} />
        </header>
    )
}

export default Header
