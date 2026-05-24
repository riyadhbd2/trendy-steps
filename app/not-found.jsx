import Link from 'next/link'
import { WEBSITE_HOME, WEBSITE_SHOP } from '@/routes/WebsiteRoute'

export const metadata = {
    title: 'Page not found | Trendy Steps',
    description: 'The page you are looking for can not be found.'
}

export default function NotFound() {
    return (
        <main className='min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fdf7f0] via-white to-[#eef5ff] px-4'>
            <div className='max-w-xl text-center'>
                <p className='text-xs uppercase tracking-[0.4em] text-muted-foreground'>Error 404</p>
                <h1 className='text-6xl lg:text-8xl font-semibold mt-3'>404</h1>
                <h2 className='text-2xl lg:text-3xl font-semibold mt-2'>This page took a wrong turn.</h2>
                <p className='text-muted-foreground mt-3'>
                    The link may be broken, or the product has stepped out. Try heading back home or browse the shop for fresh drops.
                </p>
                <div className='flex flex-wrap items-center justify-center gap-3 mt-8'>
                    <Link
                        href={WEBSITE_HOME}
                        className='px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                    >
                        Back to home
                    </Link>
                    <Link
                        href={WEBSITE_SHOP}
                        className='px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary transition'
                    >
                        Browse the shop
                    </Link>
                </div>
                <p className='text-xs text-muted-foreground mt-10'>
                    Still stuck? <Link href='/contact-us' className='underline underline-offset-4 hover:text-primary'>Talk to our team</Link>.
                </p>
            </div>
        </main>
    )
}
