import { MainblogProps } from "@/types/blog";
import { PortableText } from "next-sanity";
import Link from "next/link";
import React from "react";
import LatestPost from "./LatestPost";

export default function Blogs({ blogitems }: MainblogProps) {
  const [firstBlog, ...remainingBlogs] = blogitems;
  const firstThreeRemainingBlogs = remainingBlogs.slice(0, 3);
  const restOfRemainingBlogs = remainingBlogs.slice(3);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="lg:pr-[40px] xl:pr-[60px] 2xl:pr-[73px]">
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
            <Link
              target="_self"
              className="block pb-4 sm:pb-0"
              href={`/blog/${firstBlog.slug.current}`}
            >
              <img
                alt={firstBlog.title}
                loading="lazy"
                width={98}
                height={98}
                decoding="async"
                data-nimg={1}
                className="rounded-lg shadow-md border border-gray-200"
                src={firstBlog.thumbnail.asset.url}
                style={{ color: "transparent" }}
              />
            </Link>
            <Link
              target="_self"
              className="text-theme-darkBrown text-3xl lg:text-4xl 2xl:text-5xl font-dm font-semibold !leading-[40px] lg:!leading-[45px] 2xl:!leading-[54px] hover:opacity-50"
              href={`/blog/${firstBlog.slug.current}`}
            >
              {firstBlog.title}
            </Link>
            <div className="flex items-center gap-[12px] md:gap-[15px]">
              <img
                alt={firstBlog.author.name}
                loading="lazy"
                width={40}
                height={40}
                decoding="async"
                data-nimg={1}
                className="rounded-full text-theme-charcolBlue text-xl font-normal w-8 md:w-10 h-8 md:h-10 object-cover"
                src={firstBlog.author.avatar?.asset.url || ""}
                style={{ color: "transparent" }}
              />
              <span className="text-base md:text-lg lg:text-xl text-theme-charcolBlue70 font-normal !leading-[1]">
                By {firstBlog.author.name}
              </span>
            </div>
          </div>
        </div>

        {/* Display the first 3 remaining blogs in the same layout */}
        <div className="border-t lg:border-t-0 lg:border-l border-theme-charcolBlue30 pt-[40px] lg:pt-0 mt-[40px] lg:mt-0 lg:pl-[40px] xl:pl-[60px] 2xl:pl-[73px] flex flex-col gap-[56px]">
          {firstThreeRemainingBlogs.map((blog) => (
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
                  target="_self"
                  className="text-theme-darkBrown text-2xl font-dm font-semibold leading-[1.3] hover:opacity-50"
                  href={`/blog/${blog.slug.current}`}
                >
                  {blog.title}
                </a>
                <div>
                  <Link
                    target="_self"
                    className="block"
                    href={`/blog/${blog.slug.current}`}
                  >
                    <img
                      alt={blog.title}
                      loading="lazy"
                      width={52}
                      height={52}
                      decoding="async"
                      data-nimg={1}
                      className="rounded-lg shadow-md border border-gray-200"
                      src={blog.thumbnail.asset.url}
                      style={{ color: "transparent" }}
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
                  decoding="async"
                  data-nimg={1}
                  className="rounded-full text-theme-charcolBlue w-8 md:w-10 h-8 md:h-10"
                  src={blog.author.avatar?.asset.url || ""}
                  style={{ color: "transparent" }}
                />
                <span className="text-theme-charcolBlue70 font-normal text-base md:text-lg lg:text-xl !leading-[24px]">
                  By {blog.author.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {restOfRemainingBlogs.length > 0 && (
        <LatestPost restOfRemainingBlogs={restOfRemainingBlogs} />
      )}
    </div>
  );
}
