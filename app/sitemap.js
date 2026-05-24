const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://trendysteps.com'

const staticRoutes = [
    { path: '/', changeFrequency: 'daily', priority: 1.0 },
    { path: '/shop', changeFrequency: 'daily', priority: 0.9 },
    { path: '/about-us', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/contact-us', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/shipping-returns', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.3 }
]

export default async function sitemap() {
    const now = new Date()
    return staticRoutes.map((route) => ({
        url: `${siteUrl}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority
    }))
}
