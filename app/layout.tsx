import type { Metadata } from 'next'
import './globals.css'
import logo from '@/public/logo_ngemusik.png'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Ruangemusik',
  description: 'Created with v0',
  generator: 'v0.dev',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.className}`}>
      <head>
        <link rel="icon" href={logo.src} />
      </head>
      <body className='scroll-smooth'>{children}</body>
    </html>
  )
}
