'use client'
import { USER_DASHBOARD, WEBSITE_HOME, WEBSITE_LOGIN, WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/images/main-logo.png'
import { IoIosSearch } from "react-icons/io";
import Cart from './Cart'
import { VscAccount } from "react-icons/vsc";
import { useSelector } from 'react-redux'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import userIcon from '@/public/assets/images/user.png'
import { IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

import { HiMiniBars3 } from "react-icons/hi2";
import Search from './Search'


const Header = () => {
    const auth = useSelector(store => store.authStore.auth)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [isBrandsOpen, setIsBrandsOpen] = useState(false)
    const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false)

    const brandLinks = [
        { label: 'Nike', href: `${WEBSITE_SHOP}?brand=nike` },
        { label: 'Adidas', href: `${WEBSITE_SHOP}?brand=adidas` },
        { label: 'Puma', href: `${WEBSITE_SHOP}?brand=puma` },
        { label: 'Levi\'s', href: `${WEBSITE_SHOP}?brand=levis` },
        { label: 'H&M', href: `${WEBSITE_SHOP}?brand=hm` }
    ]

    const accessoriesLinks = [
        { label: 'Bags', href: `${WEBSITE_SHOP}?category=bags` },
        { label: 'Caps & Hats', href: `${WEBSITE_SHOP}?category=caps` },
        { label: 'Socks', href: `${WEBSITE_SHOP}?category=socks` },
        { label: 'Belts', href: `${WEBSITE_SHOP}?category=belts` },
        { label: 'Watches', href: `${WEBSITE_SHOP}?category=watches` }
    ]

    useEffect(() => {
        if (!isMobileMenu) {
            setIsBrandsOpen(false)
            setIsAccessoriesOpen(false)
        }
    }, [isMobileMenu])
    return (
        <div className='bg-white border- lg:px-32 px-4'>
            <div className='flex items-center justify-between lg:py-3 gap-6'>
                <Link href={WEBSITE_HOME}>
                    <Image
                        src={logo}
                        width={150}
                        height={100}
                        alt='logo'
                        className='lg:w-14'
                    />
                </Link>

                <nav className={`lg:relative lg:w-auto lg:h-auto lg:top-0 lg:left-0 lg:p-0 lg:flex-1 bg-white fixed z-50 top-0 w-full h-screen transition-all ${isMobileMenu ? 'left-0' : '-left-full'}`}>


                    <div className='lg:hidden flex justify-between items-center bg-gray-50 py-3 border-b px-3'>

                        <Image
                            src={logo}
                            width={383}
                            height={146}
                            alt='logo'
                            className='lg:w-32 w-24'
                        />

                        <button type='button' onClick={() => {
                            setIsMobileMenu(false)
                            setIsBrandsOpen(false)
                            setIsAccessoriesOpen(false)
                        }} >
                            <IoMdClose size={25} className='text-gray-500 hover:text-primary' />
                        </button>

                    </div>

                    {/* Middle Part */}
                    <ul className='lg:flex lg:justify-center lg:items-center gap-10 px-3'>
                        <li
                            className='text-gray-600 hover:text-primary hover:font-semibold relative'
                            onMouseEnter={() => setIsBrandsOpen(true)}
                            onMouseLeave={() => setIsBrandsOpen(false)}
                        >
                            <button
                                type='button'
                                className='flex items-center gap-2 py-2 w-full'
                                onClick={() => setIsBrandsOpen(prev => !prev)}
                                aria-haspopup='listbox'
                                aria-expanded={isBrandsOpen}
                            >
                                <span>All Brands</span>
                                <IoChevronDown className={`transition-transform duration-200 ${isBrandsOpen ? 'rotate-180 text-primary' : ''}`} size={14} />
                            </button>
                            <div
                                className={`${isBrandsOpen ? 'block' : 'hidden'} mt-2 lg:mt-0 lg:absolute lg:top-full lg:left-0 lg:min-w-[220px] bg-white border border-gray-100 rounded-lg shadow-sm lg:shadow-lg lg:py-2 z-50`}
                            >
                                <ul className='flex flex-col py-2'>
                                    {brandLinks.map((brand) => (
                                        <li key={brand.label}>
                                            <Link
                                                href={brand.href}
                                                className='block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50'
                                                onClick={() => {
                                                    setIsBrandsOpen(false)
                                                    setIsMobileMenu(false)
                                                }}
                                            >
                                                {brand.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                      
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href="/about-us" className='block py-2'>
                                New Arrival
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_SHOP} className='block py-2'>
                                Running and Sportware
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={`${WEBSITE_SHOP}?category=t-shirts`} className='block py-2'>
                                Converse
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={`${WEBSITE_SHOP}?category=hoodies`} className='block py-2'>
                                Men and Women
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={`${WEBSITE_SHOP}?category=overshized`} className='block py-2'>
                                Slides
                            </Link>
                        </li>
                        <li
                            className='text-gray-600 hover:text-primary hover:font-semibold relative '
                            onMouseEnter={() => setIsAccessoriesOpen(true)}
                            onMouseLeave={() => setIsAccessoriesOpen(false)}
                        >
                            <button
                                type='button'
                                className='flex items-center gap-2 py-2 w-full'
                                onClick={() => setIsAccessoriesOpen(prev => !prev)}
                                aria-haspopup='listbox'
                                aria-expanded={isAccessoriesOpen}
                            >
                                <span>Accessories</span>
                                <IoChevronDown className={`transition-transform duration-200 ${isAccessoriesOpen ? 'rotate-180 text-primary' : ''}`} size={14} />
                            </button>
                            <div
                                className={`${isAccessoriesOpen ? 'block' : 'hidden'} mt-2 lg:mt-0 lg:absolute lg:top-full lg:left-0 lg:min-w-[220px] bg-white border border-gray-100 rounded-lg shadow-sm lg:shadow-lg lg:py-2 z-50`}
                            >
                                <ul className='flex flex-col py-2'>
                                    {accessoriesLinks.map((item) => (
                                        <li key={item.label}>
                                            <Link
                                                href={item.href}
                                                className='block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50'
                                                onClick={() => {
                                                    setIsAccessoriesOpen(false)
                                                    setIsMobileMenu(false)
                                                }}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        
                    </ul>
                </nav>


                <div className='flex items-center gap-8'>
                    <button type='button' onClick={() => setShowSearch(!showSearch)}>
                        <IoIosSearch
                            className='text-gray-500 hover:text-primary cursor-pointer'
                            size={25}
                        />
                    </button>

                    <Cart />

                    {!auth
                        ?
                        <Link href={WEBSITE_LOGIN}>
                            <VscAccount
                                className='text-gray-500 hover:text-primary cursor-pointer'
                                size={25}
                            />
                        </Link>
                        :

                        <Link href={USER_DASHBOARD}>
                            <Avatar >
                                <AvatarImage src={auth?.avatar?.url || userIcon.src} />
                            </Avatar>
                        </Link>

                    }


                        <button type='button' className='lg:hidden block' onClick={() => setIsMobileMenu(true)} >
                            <HiMiniBars3 size={25} className='text-gray-500 hover:text-primary' />
                        </button>

                </div>

            </div>

            <Search isShow={showSearch} />

        </div>
    )
}

export default Header
