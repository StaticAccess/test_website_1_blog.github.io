import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LaunchPad: The Future of Products',
  description: 'Discover the latest innovations and product launches across various industries',
  keywords: 'product launches, technology, innovation, artificial intelligence, sustainability',
  author: 'LaunchPad Team',
  openGraph: {
    title: 'LaunchPad: The Future of Products',
    description: 'Discover the latest innovations and product launches across various industries',
    url: 'https://launchpad.com',
    siteName: 'LaunchPad: The Future of Products',
    images: [
      {
        url: 'https://launchpad.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

