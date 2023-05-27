import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/new-post',
    },
    sitemap: 'https://example-personal-blog.vercel.app/sitemap.xml',
  };
}