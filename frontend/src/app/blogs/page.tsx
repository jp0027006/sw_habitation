import Blog from "@/app/components/Blog";
import { client } from "@/sanity/client";
import { ContentFilterType } from "@/types/contentfilter";
import ContentFilter from "../components/ContentFilter";

const CONTENTFILTER_QUERY = `*[_type == "contentfilter"]`;

const Page = async () => {
  const contentfilteritems: ContentFilterType[] = await client.fetch(CONTENTFILTER_QUERY);
  return (
    <div>
      {/* Buttons Section */}
      <ContentFilter contentfilteritems={contentfilteritems} />

      {/* Blog Section */}
      <Blog />
    </div>
  );
};

export default Page;
