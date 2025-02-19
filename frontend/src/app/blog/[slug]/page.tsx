import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { BlogType } from "@/types/blog";
import BlogDetail from "@/app/components/BlogDetail";

async function fetchBlogBySlug(slug: string): Promise<BlogType | null> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug {
    current
  },
  publishedDate,
  readTime,
  author->{
    _id,
    name,
    avatar {
      asset->{
        _ref,
        url
      }
    }
  },
  excerpt,
  thumbnail {
    asset->{
      _ref,
      url
    }
  },
  content,
  category
}`;
  const blog = await client.fetch(query, { slug });
  return blog || null;
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const blogdetail = await fetchBlogBySlug(slug);

  if (!blogdetail) {
    notFound();
  }

  return (
    <>
      <BlogDetail blogdetail={blogdetail} />
    </>
  );
};

export default BlogPost;
