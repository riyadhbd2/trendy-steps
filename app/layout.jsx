import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import { Space_Grotesk, Fraunces } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
})

const displayFont = Fraunces({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
})

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://trendysteps.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trendy Steps | Premium Sports and Lifestyle Footwear',
    template: '%s | Trendy Steps'
  },
  description: 'Shop premium performance and lifestyle shoes with EU sizing, VAT-included pricing, and nationwide delivery via Pathao and Steadfast in Bangladesh.',
  keywords: ['Trendy Steps', 'shoes Bangladesh', 'running shoes', 'training shoes', 'lifestyle sneakers', 'EU sizing', 'Dhaka shoe store'],
  applicationName: 'Trendy Steps',
  authors: [{ name: 'Trendy Steps' }],
  creator: 'Trendy Steps',
  publisher: 'Trendy Steps',
  formatDetection: { email: false, telephone: false, address: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Trendy Steps',
    title: 'Trendy Steps | Premium Sports and Lifestyle Footwear',
    description: 'Premium performance and lifestyle shoes with EU sizing and nationwide delivery in Bangladesh.',
    images: [
      {
        url: '/assets/images/logo.jpg',
        width: 1362,
        height: 1361,
        alt: 'Trendy Steps'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trendy Steps | Premium Sports and Lifestyle Footwear',
    description: 'Premium performance and lifestyle shoes with EU sizing and nationwide delivery in Bangladesh.',
    images: ['/assets/images/logo.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport = {
  themeColor: '#fdf7f0',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}
      >
        <GlobalProvider>
          <ToastContainer />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
