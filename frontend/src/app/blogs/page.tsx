import { client } from "@/sanity/client";
import { ContentFilterType } from "@/types/contentfilter";
import { BlogType } from "@/types/blog";
import BlogView from "../components/BlogView";

const CONTENTFILTER_QUERY = `*[_type == "contentfilter"]`;
const BLOG_QUERY = `*[_type == "blog"] | order(publishedDate desc) {
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

export default async function Page() {
  const contentfilteritems: ContentFilterType[] =
    await client.fetch(CONTENTFILTER_QUERY);
  const blogitems: BlogType[] = await client.fetch(BLOG_QUERY);

  return (
    <>
      <BlogView contentfilteritems={contentfilteritems} blogitems={blogitems} />
    </>
  );
}
