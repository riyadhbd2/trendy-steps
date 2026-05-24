import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import Image from 'next/image'

export const metadata = {
    title: 'Journal | Trendy Steps',
    description: 'Footwear insights, performance breakdowns, and styling notes from the Trendy Steps team.',
    alternates: { canonical: '/blog' }
}

const heroAlt = {
    src: 'https://images.pexels.com/photos/8373049/pexels-photo-8373049.jpeg?cs=srgb&dl=pexels-sneepcrew-8373049.jpg&fm=jpg',
    width: 1600,
    height: 1200
}

const slider4 = {
    src: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?cs=srgb&dl=pexels-zaktech90-1027130.jpg&fm=jpg',
    width: 1600,
    height: 1200
}

const banner2 = {
    src: 'https://images.pexels.com/photos/52584/pexels-photo-52584.jpeg?cs=srgb&dl=pexels-jeshoots-52584.jpg&fm=jpg',
    width: 1600,
    height: 1200
}

const breadcrumb = {
    title: 'Journal',
    links: [{ label: 'Journal' }]
}

const blogPosts = [
    {
        title: 'Inside the midsole',
        tag: 'Performance',
        description: 'Midsoles support and cushion the foot while absorbing shock, often built from foams like EVA or polyurethane.',
        image: heroAlt
    },
    {
        title: 'Why outsoles matter',
        tag: 'Traction',
        description: 'Outsoles are the bottom layer of a shoe and are commonly made from rubber to provide grip and durability.',
        image: slider4
    },
    {
        title: 'Upper fit essentials',
        tag: 'Fit',
        description: 'The upper holds the foot in place and uses lacing and structural panels to deliver support and stability.',
        image: banner2
    }
]

const Blog = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <section className='lg:px-32 px-4 py-12'>
                <div className='grid md:grid-cols-3 gap-6'>
                    {blogPosts.map((post) => (
                        <div key={post.title} className='rounded-3xl border border-border/60 bg-white shadow-sm overflow-hidden'>
                            <Image
                                src={post.image.src}
                                alt={post.title}
                                width={post.image.width}
                                height={post.image.height}
                                className='w-full h-44 object-cover'
                            />
                            <div className='p-5'>
                                <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>{post.tag}</p>
                                <h3 className='text-lg font-semibold mt-2'>{post.title}</h3>
                                <p className='text-sm text-muted-foreground mt-2'>{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Blog
