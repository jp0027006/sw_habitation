import { LatestPostProps } from "@/types/blog";
import Link from "next/link";
import React from "react";

function LatestPost({ restOfRemainingBlogs }: LatestPostProps) {
  return (
    <>
      <div className="pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[163px] pb-[150px] sm:pb-[200px] md:pb-[220px] lg:pb-[245px] max-w-[663px] w-full mx-auto">
        <div>
          <h2 className="text-theme-charcolBlue text-[28px] md:text-[32px] font-dm font-bold leading-1.3 pb-[30px] sm:pb-[40px] lg:pb-[48px] border-b-theme-charcolBlue30 border-b border-solid mb-[30px] sm:mb-[40px] lg:mb-[48px]">
            More latest Post
          </h2>
          {restOfRemainingBlogs.map((blog) => (
            <div key={blog._id} className="flex flex-col pt-[30px]">
              <div className="flex flex-col gap-6 sm:gap-8 border-b-slate-300 border-b border-solid pb-[40px] md:pb-[50px] pt-[40px] sm:pt-[64px] lg:pb-[64px] first:pt-0">
                <div className="flex items-center gap-2 text-theme-charcolBlue font-regular text-base sm:text-lg lg:text-xl opacity-70 !leading-[20px]">
                  <span>
                    {" "}
                    {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>-</span>
                  <span>{blog.readTime}</span>
                </div>
                <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[75%]">
                  <Link
                    target="_self"
                    className="text-theme-darkBrown text-2xl font-dm font-semibold hover:opacity-50"
                    href={`/blogs/${blog.slug.current}`}
                  >
                    {blog.title}
                  </Link>
                </div>
                <div className="flex items-center gap-[12px] md:gap-[15px]">
                  <img
                    alt="Image"
                    loading="lazy"
                    width={40}
                    height={40}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-full text-theme-charcolBlue text-xl font-normal w-8 md:w-10 h-8 md:h-10 object-cover"
                    src={blog.author.avatar?.asset.url}
                    style={{ color: "transparent" }}
                  />
                  <span className="text-theme-charcolBlue70 font-normal text-base md:text-lg lg:text-xl">
                    {blog.author.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <Link
            target="_self"
            className="w-full flex justify-center mt-[60px] md:mt-[70px] lg:mt-[72px]"
            href="/blogs"
          >
            <div className="bg-theme-green rounded-full items-center justify-center border border-transparent hover:bg-transparent hover:border hover:border-black hover:text-theme-primary px-[60px] sm:px-[80px] md:px-[90px] lg:px-[108px] cursor-pointer inline-flex font-medium text-[#0F172A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] py-[12px] md:py-[15.5px]">
              Load More
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LatestPost;
