import { MainblogProps } from "@/types/blog";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default function MainBlogs({ blogitems }: MainblogProps) {
  const firstFourBlogs = blogitems.slice(0, 4);

  const firstBlog = firstFourBlogs[0];

  const remainingBlogs = firstFourBlogs.slice(1);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="lg:pr-[40px] xl:pr-[60px] 2xl:pr-[73px]">
          {/* Display the first blog */}
          <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8">
            <div className="flex items-center gap-2 text-theme-charcolBlue font-regular text-base sm:text-lg lg:text-xl opacity-70 !leading-[20px]">
              <span>
                {new Date(firstBlog.publishedDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>-</span>
              <span>{firstBlog.readTime}</span>
            </div>
            <Link href={`/blog/${firstBlog.slug.current}`} target="_self">
              <img
                alt={firstBlog.title}
                loading="lazy"
                width={98}
                height={98}
                className="rounded-lg shadow-md border border-gray-200"
                src={firstBlog.thumbnail.asset.url}
              />
            </Link>
            <Link
              href={`/blog/${firstBlog.slug.current}`}
              target="_self"
              className="text-theme-darkBrown text-3xl lg:text-4xl 2xl:text-5xl font-dm font-semibold hover:opacity-50"
            >
              {firstBlog.title}
            </Link>
            <div className="-mt-3 lg:mt-0">
              <PortableText
                value={firstBlog.content[0]}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="sm:text-lg text-xl font-normal text-gray-900 leading-relaxed mb-2">
                        {children}
                      </p>
                    ),
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-semibold text-gray-900 mb-3">{children}</h1>
                    ),
                  },
                }}
              />
            </div>
            <div className="flex items-center gap-[12px] md:gap-[15px]">
              <img
                alt={firstBlog.author.name}
                loading="lazy"
                width={40}
                height={40}
                className="rounded-full text-theme-charcolBlue text-xl font-normal w-8 md:w-10 h-8 md:h-10 object-cover"
                src={firstBlog.author.avatar?.asset.url || ""}
              />
              <span className="text-base md:text-lg lg:text-xl text-theme-charcolBlue70 font-normal !leading-[1]">
                By {firstBlog.author.name}
              </span>
            </div>
          </div>
        </div>

        {/* Display the remaining blogs */}
        <div className="border-t lg:border-t-0 lg:border-l border-theme-charcolBlue30 pt-[40px] lg:pt-0 mt-[40px] lg:mt-0 lg:pl-[40px] xl:pl-[60px] 2xl:pl-[73px] flex flex-col gap-[56px]">
          {remainingBlogs.map((blog) => (
            <div key={blog._id} className="flex flex-col gap-4 lg:gap-6">
              <div className="flex items-center gap-2 text-theme-charcolBlue font-regular text-base sm:text-lg lg:text-xl opacity-70 !leading-[20px]">
                <span>
                  {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>-</span>
                <span>{blog.readTime}</span>
              </div>
              <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto_52px] items-start lg:items-center gap-6 w-full justify-between">
                <a
                  href={`/blog/${blog.slug.current}`}
                  className="text-theme-darkBrown text-2xl font-dm font-semibold leading-[1.3] hover:opacity-50"
                  target="_self"
                >
                  {blog.title}
                </a>
                <div>
                  <Link href={`/blog/${blog.slug.current}`} target="_self">
                    <img
                      alt={blog.title}
                      loading="lazy"
                      width={52}
                      height={52}
                      className="rounded-lg shadow-md border border-gray-200"
                      src={blog.thumbnail.asset.url}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-[12px] md:gap-[15px]">
                <img
                  alt={blog.author.name}
                  loading="lazy"
                  width={40}
                  height={40}
                  className="rounded-full text-theme-charcolBlue w-8 md:w-10 h-8 md:h-10"
                  src={blog.author.avatar?.asset.url || ""}
                />
                <span className="text-theme-charcolBlue70 font-normal text-base md:text-lg lg:text-xl !leading-[24px]">
                  By {blog.author.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
