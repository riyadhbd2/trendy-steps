const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://trendysteps.com'

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/api', '/my-account', '/profile', '/cart', '/checkout', '/order-details', '/auth']
            }
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl
    }
}
