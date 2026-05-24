import FeaturedProduct from '@/components/Application/Website/FeaturedProduct'
import Testimonial from '@/components/Application/Website/Testimonial'
import Newsletter from '@/components/Application/Website/Newsletter'
import TrustBadges from '@/components/Application/Website/TrustBadges'
import Image from 'next/image'
import Link from 'next/link'
import { WEBSITE_SHOP } from '@/routes/WebsiteRoute'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { FaShippingFast } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { GiReturnArrow } from 'react-icons/gi'
import { AiOutlineProduct } from 'react-icons/ai'

export const metadata = {
  title: 'Trendy Steps | Premium Sports and Lifestyle Footwear',
  description: 'Shop running, training, lifestyle, and court-ready shoes in Bangladesh. EU sizing, VAT-included pricing, and nationwide delivery via Pathao and Steadfast.',
  alternates: { canonical: '/' }
}

const heroMain = {
  src: 'https://images.pexels.com/photos/19577862/pexels-photo-19577862.jpeg?cs=srgb&dl=pexels-alokkd1-19577862.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const heroAlt = {
  src: 'https://images.pexels.com/photos/6746705/pexels-photo-6746705.jpeg?cs=srgb&dl=pexels-hipkicks-24037520-6746705.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const banner1 = {
  src: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?cs=srgb&dl=pexels-mnzoutfits-1670766.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const banner2 = {
  src: 'https://images.pexels.com/photos/12739995/pexels-photo-12739995.jpeg?cs=srgb&dl=pexels-sneepcrew-12739995.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const slider2 = {
  src: 'https://images.pexels.com/photos/1161530/pexels-photo-1161530.jpeg?cs=srgb&dl=pexels-atomlaborblog-1161530.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const slider4 = {
  src: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?cs=srgb&dl=pexels-zaktech90-1027130.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const altLifestyle = {
  src: 'https://images.pexels.com/photos/8373049/pexels-photo-8373049.jpeg?cs=srgb&dl=pexels-sneepcrew-8373049.jpg&fm=jpg',
  width: 1600,
  height: 1200
}

const categories = [
  {
    title: 'Running',
    description: 'Speed focused, lightweight support.',
    image: slider4,
    href: `${WEBSITE_SHOP}?category=running`
  },
  {
    title: 'Training',
    description: 'Stable base for gym and studio.',
    image: heroMain,
    href: `${WEBSITE_SHOP}?category=training`
  },
  {
    title: 'Lifestyle',
    description: 'Clean silhouettes for every day.',
    image: banner1,
    href: `${WEBSITE_SHOP}?category=lifestyle`
  },
  {
    title: 'Outdoor',
    description: 'Trail ready traction and grip.',
    image: altLifestyle,
    href: `${WEBSITE_SHOP}?category=outdoor`
  },
  {
    title: 'Court',
    description: 'Built for agility and quick cuts.',
    image: slider2,
    href: `${WEBSITE_SHOP}?category=court`
  },
  {
    title: 'Accessories',
    description: 'Bags, socks, and essentials.',
    image: banner2,
    href: `${WEBSITE_SHOP}?category=accessories`
  }
]

const bestSellers = [
  {
    title: 'Velocity Pro',
    subtitle: 'Distance runners favorite',
    cta: 'Shop performance',
    href: `${WEBSITE_SHOP}?tag=best-seller`,
    image: heroMain
  },
  {
    title: 'City Grid',
    subtitle: 'Lifestyle core essential',
    cta: 'Shop lifestyle',
    href: `${WEBSITE_SHOP}?category=lifestyle`,
    image: banner1
  },
  {
    title: 'Power Studio',
    subtitle: 'Stable for training days',
    cta: 'Shop training',
    href: `${WEBSITE_SHOP}?category=training`,
    image: slider2
  }
]

const techHighlights = [
  {
    title: 'Shock absorbing midsoles',
    description: 'Midsoles cushion the foot and absorb impact, often using foams like EVA or polyurethane for comfort.'
  },
  {
    title: 'EVA foam cushioning',
    description: 'Foamed EVA is used as a shock absorber in sports equipment, making it a lightweight choice for responsive cushioning.'
  },
  {
    title: 'Rubber outsole grip',
    description: 'The outsole is the bottom of the shoe that contacts the ground; rubber is a common material for traction and durability.'
  }
]

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

const Home = () => {
  return (
    <>
      <section className='relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fdf7f0] via-white to-[#eef5ff]'>
        <div className='absolute -top-24 -right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float-slow' />
        <div className='absolute -bottom-28 left-10 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl animate-float' />
        <div className='lg:px-32 px-4 py-16 lg:py-24'>
          <div className='grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center'>
            <div className='space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700'>
              <p className='text-xs uppercase tracking-[0.4em] text-muted-foreground'>Premium sports and lifestyle</p>
              <h1 className='text-4xl lg:text-6xl font-semibold leading-tight'>
                Trendy Steps - performance shoes, lifestyle energy.
              </h1>
              <p className='text-base lg:text-lg text-muted-foreground max-w-xl'>
                Built for Bangladesh with EU sizing, VAT included pricing, and delivery via Pathao and Steadfast. Explore running, training, lifestyle, and court-ready drops.
              </p>
              <div className='flex flex-wrap items-center gap-4'>
                <Link
                  href={`${WEBSITE_SHOP}?tag=new`}
                  className='px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition'
                >
                  Shop new arrivals
                </Link>
                <Link
                  href={WEBSITE_SHOP}
                  className='px-6 py-3 rounded-full border border-border text-sm font-semibold hover:border-primary hover:text-primary transition'
                >
                  Explore all shoes
                </Link>
              </div>
              <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
                <span className='px-3 py-1 rounded-full bg-white/70 border border-border/60'>EU sizing</span>
                <span className='px-3 py-1 rounded-full bg-white/70 border border-border/60'>VAT included</span>
                <span className='px-3 py-1 rounded-full bg-white/70 border border-border/60'>BDT pricing</span>
              </div>
            </div>

            <div className='relative animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200'>
              <div className='bg-white/80 backdrop-blur border border-border/60 rounded-3xl p-6 shadow-2xl'>
                <Image
                  src={heroMain.src}
                  alt='Featured shoe'
                  width={heroMain.width}
                  height={heroMain.height}
                  className='w-full h-[320px] sm:h-[360px] lg:h-[400px] object-cover rounded-2xl'
                />
                <div className='mt-4 flex items-center justify-between'>
                  <div>
                    <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Drop of the week</p>
                    <h3 className='text-lg font-semibold'>Velocity Pro Pack</h3>
                  </div>
                  <Link
                    href={`${WEBSITE_SHOP}?tag=featured`}
                    className='text-sm font-semibold underline underline-offset-4 hover:text-primary'
                  >
                    Shop now
                  </Link>
                </div>
              </div>
              <div className='absolute -left-6 -bottom-8 bg-white/90 border border-border/60 rounded-2xl p-4 shadow-lg hidden md:block'>
                <Image
                  src={heroAlt.src}
                  alt='Secondary shoe'
                  width={heroAlt.width}
                  height={heroAlt.height}
                  className='w-36 h-24 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='lg:px-32 px-4 py-14'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Collections</p>
            <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Shop by category</h2>
          </div>
          <Link href={WEBSITE_SHOP} className='flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-primary'>
            View all
            <IoIosArrowRoundForward />
          </Link>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className='group relative overflow-hidden rounded-3xl border border-border/60 bg-white shadow-sm hover:shadow-xl transition-all'
            >
              <Image
                src={item.image.src}
                alt={item.title}
                width={item.image.width}
                height={item.image.height}
                className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='p-5'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-muted-foreground mt-1'>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FeaturedProduct
        title='Trending right now'
        subtitle='Best performing pairs from running, training, and lifestyle edits.'
        viewAllHref={`${WEBSITE_SHOP}?tag=trending`}
      />

      <section className='lg:px-32 px-4 py-14'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Best sellers</p>
            <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Top picks this season</h2>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-6'>
          {bestSellers.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className='group relative overflow-hidden rounded-3xl bg-[#111827] text-white border border-white/10 shadow-lg'
            >
              <Image
                src={item.image.src}
                alt={item.title}
                fill
                sizes='(min-width: 1024px) 33vw, 100vw'
                className='absolute inset-0 object-cover opacity-60 group-hover:scale-105 transition-transform duration-300'
              />
              <div className='relative z-10 p-6 min-h-[220px] flex flex-col justify-between'>
                <div>
                  <p className='text-xs uppercase tracking-[0.3em] text-white/60'>{item.subtitle}</p>
                  <h3 className='text-2xl font-semibold mt-2'>{item.title}</h3>
                </div>
                <span className='text-sm font-semibold underline underline-offset-4'>{item.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='bg-[#0c121c] text-white py-16'>
        <div className='lg:px-32 px-4'>
          <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10'>
            <div>
              <p className='text-xs uppercase tracking-[0.3em] text-white/60'>Tech notes</p>
              <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Performance built into every layer</h2>
            </div>
            <Link href={WEBSITE_SHOP} className='text-sm font-semibold underline underline-offset-4 text-white/80 hover:text-white'>
              Explore performance collection
            </Link>
          </div>
          <div className='grid md:grid-cols-3 gap-6'>
            {techHighlights.map((item) => (
              <div key={item.title} className='border border-white/15 rounded-2xl p-6 bg-white/5'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-white/70 mt-3'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      <TrustBadges />

      <section className='lg:px-32 px-4 py-14'>
        <div className='flex items-center justify-between mb-8'>
          <div>
            <p className='text-xs uppercase tracking-[0.3em] text-muted-foreground'>Journal</p>
            <h2 className='text-3xl sm:text-4xl font-semibold mt-2'>Footwear insights</h2>
          </div>
          <Link href='/blog' className='flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-primary'>
            Read more
            <IoIosArrowRoundForward />
          </Link>
        </div>
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

      <section className='lg:px-32 px-4 py-12'>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6'>
          {[
            { icon: <GiReturnArrow size={26} />, title: 'Easy Returns', text: 'Simple returns and exchange support.' },
            { icon: <FaShippingFast size={26} />, title: 'Fast Shipping', text: 'Nationwide delivery via trusted partners.' },
            { icon: <BiSupport size={26} />, title: 'Support 7 Days', text: 'Dedicated care for every order.' },
            { icon: <AiOutlineProduct size={26} />, title: 'Quality First', text: 'Premium materials and clean build.' }
          ].map((item) => (
            <div key={item.title} className='border border-border/60 rounded-2xl p-5 bg-white/80'>
              <p className='mb-3 text-primary'>{item.icon}</p>
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='text-sm text-muted-foreground mt-2'>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
