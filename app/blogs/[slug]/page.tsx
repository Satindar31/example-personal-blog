import { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { use } from "react";
import { getBlogBySlug, getBlogs } from "../../../lib/blogs";
import BlogHeader from "./BlogHeader";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  params: Params;
};

const getInitialBlog = async (slug: string) => {
  const blog = getBlogBySlug(slug);
  return blog;
};

const BlogDetail: NextPage<Props> = ({ params }) => {
  const blog = use(getInitialBlog(params.slug));

  return (
    <div className="w-2/3 m-auto">
      <BlogHeader blog={blog} />
      <article className="prose prose-zinc lg:prose-xl">
        <div
          dangerouslySetInnerHTML={{
            __html: blog.content
            
          }}
        />
      </article>
    </div>
  );
};

export function generateStaticParams() {
  const blogs = getBlogs();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default BlogDetail;
