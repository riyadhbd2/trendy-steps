'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { WEBSITE_HOME } from '@/routes/WebsiteRoute'

export default function Error({ error, reset }) {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.error(error)
        }
    }, [error])

    return (
        <main className='min-h-[70vh] flex items-center justify-center px-4'>
            <div className='max-w-lg text-center'>
                <p className='text-xs uppercase tracking-[0.4em] text-muted-foreground'>Something went wrong</p>
                <h1 className='text-3xl lg:text-4xl font-semibold mt-3'>We tripped on a lace.</h1>
                <p className='text-muted-foreground mt-3'>
                    An unexpected error stopped this page from loading. You can try again, or head back to safer ground.
                </p>
                <div className='flex flex-wrap items-center justify-center gap-3 mt-8'>
                    <button
                        type='button'
                        onClick={() => reset()}
                        className='px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                    >
                        Try again
                    </button>
                    <Link
                        href={WEBSITE_HOME}
                        className='px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary transition'
                    >
                        Back to home
                    </Link>
                </div>
            </div>
        </main>
    )
}
