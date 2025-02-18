import { client } from "@/sanity/client";
import { HomepageType } from "@/types/homepage";
import { BlogType } from "@/types/blog";
import Homepage from "./components/Homepage";

const HOMEPAGE_QUERY = `*[_type == "homepage"]`;
const BLOG_QUERY = `*[_type == "blog"] | order(publishedDate asc) {
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

export default async function HomepagePage({}: { children: React.ReactNode }) {
  const homepageitems: HomepageType[] = await client.fetch(HOMEPAGE_QUERY);
  const blogitems: BlogType[] = await client.fetch(BLOG_QUERY);

  return (
    <>
      <Homepage homepageitems={homepageitems} blogitems={blogitems} />
    </>
  );
}
