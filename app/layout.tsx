import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
