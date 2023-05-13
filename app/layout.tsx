import './globals.css'
import { Inter } from 'next/font/google'
import { Blog } from '@/interfaces/Blog'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Example Blog',
  description: 'An exmaple personal blog for you to get the basic idea of how to make one.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
