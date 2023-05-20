import { Metadata, NextPage } from "next";
import { use } from "react";
import { getBlogs } from "../lib/blogs";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/interfaces/Blog";

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}
/**
 *
 * @param text Text to make shorter
 * @param maxLength Maximum number of charactors
 * @returns String of length `maxLength`
 */
function shortify(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Example persoanl blog -  Home`,
    description: "A basic blog app",
    openGraph: {
      title: `Example persoanl blog -  Home`,
      description: "A basic blog app",
      images: [
        {
          url: `/api/og`,
        },
      ],
      locale: "en-US",
      type: "website",
      siteName: `Example blog`,
      url: "https://example-personal-blog.vercel.app",
    },
    twitter: {
      title: "Example personal blog",
      description: "A basic blog app",
      images: [
        {
          url: `/api/og`,
        },
      ],
      card: "summary_large_image",
    },
  };
}

const Page: NextPage = () => {
  const blogs = use(getInitialBlogs());

  return (
    <div className="h-screen prose-invert w-2/3 m-auto prose lg:prose-xl">
      <div className="bg-white">
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest articles
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Freshly brewed articles from the blog
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.slug}
                className="flex flex-col items-center justify-center border p-2 border-opacity-5 rounded-lg group-hover:border-opacity-100"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog.date} className="text-gray-500">
                    {blog.date}
                  </time>
                  <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {blog.category}
                  </p>
                </div>
                <div className="group relative">
                  <Image
                  className="rounded-md"
                    alt="Cover image"
                    src={blog.coverImage}
                    width={250}
                    height={100}
                  />
                  <h4 className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-gray-600">
                    <Link className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-gray-600" href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                  </h4>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Image
                    width={50}
                    height={50}
                    src={blog.authorImage}
                    alt="author image"
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{blog.author}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
