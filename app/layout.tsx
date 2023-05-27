import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { ReactTagManager } from 'react-gtm-ts';

const inter = Inter({ subsets: ["latin"] });

ReactTagManager.init({
  code: process.env.GTM ?? "", // GTM Code
  debug: false, // debug mode (default false)
  performance: false, // starts GTM only after user interaction (improve initial page load)
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      title: `Example persoanl blog`,
      description: "A basic blog app",
      images: [
        {
          url: `/api/og`,
        },
      ],
      locale: "en-US",
      type: "website",
      siteName: `Example blog`,
      url: 'https://example-personal-blog.vercel.app'

    },
    twitter: {
      title: 'Example personal blog',
      description: 'A basic blog app',
      images: [
        {
          url: `/api/og`,
        },
      ],
      card: "summary_large_image"
    },
  };
}

export default function RootLayout({children}: {
  children: React.ReactNode;

}) {
  
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}
