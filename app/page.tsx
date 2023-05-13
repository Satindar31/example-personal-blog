import { NextPage } from "next";
import { use } from "react";
import { getBlogs } from "../lib/blogs";
import Image from "next/image";
import Link from "next/link";

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}

const shortify = (text: string, maxLength = 60) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
};

const Page: NextPage = () => {
  const blogs = use(getInitialBlogs());

  return (
    <div className="h-screen prose-xl prose-invert prose">
      <h2 className="sr-only">Blogs</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <Image
                
                fill={true}
                src={blog.coverImage}
                alt={"Cover image"}
                className="h-full w-full object-cover object-center duration-150 group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {blog.title}
            </h3>
            <p className="mt-1 text-base text-gray-800">
              {shortify(blog.description, 100)}
            </p>
            <p className="mt-1 text-sm text-gray-700">
              {blog.date ?? "No date found"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
