import { HomepageProps } from "@/types/homepage";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import NewBlog from "./NewBlog";

const Homepage: React.FC<HomepageProps> = ({ homepageitems, blogitems }) => {
  const homepage = homepageitems[0];

  // Get the first blog
  const firstBlog = blogitems[0];

  // Get the remaining blogs (all blogs except the first)
  const remainingBlogs = blogitems.slice(1);

  return (
    <>
      <section className="bg-gray-50">
        <div className="xl:ml-36 xl:mr-36 lg:ml-52 lg:mr-52 pt-[180px] md:pt-[220px] lg:pt-[80px] pb-[60px] xs:pb-[80px] sm:pb-[120px] md:pb-[150px] lg:pb-[300px] xl:pb-[220px]">
          <div className="flex items-center justify-between w-full relative">
            <img
              alt="left logos"
              loading="eager"
              width={241}
              height={554}
              decoding="async"
              data-nimg={1}
              className="absolute left-[5%] top-[-10%] bottom-0 z-[1] hidden lg:block"
              src="https://cdn.sanity.io/images/7w000gxc/production/fbb204697eb6d316e764d5d421a7fdcf0804594e-975x2227.webp?w=975&q=100&fit=clip&auto=format"
              style={{ color: "transparent" }}
            />
            <div className="max-w-[100%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[65%] xl:max-w-[54%] w-full mx-auto flex flex-col items-center justify-center gap-6 relative">
              <Link
                className="w-fit inline-flex items-center gap-2 bg-gray-200 rounded-3xl py-[6px] px-2"
                href="/"
              >
                <span className="text-[12px] xs:text-sm md:text-base text-theme-charcolBlue font-semibold px-3 py-[6px] bg-theme-green rounded-full !leading-[1]">
                  {new Intl.NumberFormat().format(homepage.visitorCount)}
                </span>
                <span className="text-[15px] xs:text-sm font-medium tracking-[-0.1px] flex items-center gap-1">
                  {homepage.visitorMessage}
                  <span>
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.125 5.25L10.875 9L7.125 12.75"
                        stroke="#0F172A"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
              <div className="[&>h1]:text-[#1D1D20] xs:[&>h1]:text-[20px] sm:[&>h1]:text-[35px] md:[&>h1]:text-[42px] lg:[&>h1]:text-[45px] xl:[&>h1]:text-[55px] 2xl:[&>h1]:text-62px [&>h1]:font-bold [&>h1]:text-center [&>h1]:leading-[45px] lg:[&>h1]:leading-[50px] xl:[&>h1]:leading-[58px] 2xl:[&>h1]:leading-[72px]">
                <h1>{homepage.title}</h1>
              </div>
              <div className="[&>p]:text-sm sm:[&>p]:text-lg [&>p]:font-normal [&>p]:text-center [&>p]:tracking-[-0.4px] [&>p]:leading-[28px]">
                <p>{homepage.subtitle}</p>
              </div>
            </div>
            <img
              alt="right logos"
              loading="eager"
              width={241}
              height={554}
              decoding="async"
              data-nimg={1}
              className="absolute right-[5%] top-[-10%] bottom-0 z-[1] hidden lg:block"
              src="https://cdn.sanity.io/images/7w000gxc/production/8f969c03518005c1123c2a979359502daee160d3-919x2235.webp?w=919&q=100&fit=clip&auto=format"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </section>

      <section className="pt-[80px] md:pt-[110px]">
        <div className="container xl:pl-32 xl:pr-32 lg:pl-28 lg:pr-28 md:pl-24 md:pr-24 sm:pl-20 sm:pr-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
            <div className="lg:pr-[40px] xl:pr-[60px] 2xl:pr-[73px]">
              {/* Display the first blog */}
              <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8">
                <div className="flex items-center gap-2 text-theme-charcolBlue font-regular text-base sm:text-lg lg:text-xl opacity-70 !leading-[20px]">
                  <span>
                    {new Date(firstBlog.publishedDate).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                  <span>-</span>
                  <span>{firstBlog.readTime}</span>
                </div>
                <Link
                  target="_self"
                  className="block pb-4 sm:pb-0"
                  href={`/blogs/${firstBlog.slug.current}`}
                >
                  <img
                    alt={firstBlog.title}
                    loading="lazy"
                    width={98}
                    height={98}
                    decoding="async"
                    data-nimg={1}
                    className="rounded-lg"
                    src={firstBlog.thumbnail.asset.url}
                    style={{ color: "transparent" }}
                  />
                </Link>
                <Link
                  target="_self"
                  className="text-theme-darkBrown text-3xl lg:text-4xl 2xl:text-5xl font-dm font-semibold !leading-[40px] lg:!leading-[45px] 2xl:!leading-[54px] hover:opacity-50"
                  href={`/blogs/${firstBlog.slug.current}`}
                >
                  {firstBlog.title}
                </Link>
                <div className="-mt-3 lg:mt-0">
                  {/* Render excerpt using PortableText with Tailwind classes */}
                  <PortableText
                    value={firstBlog.excerpt}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="text-base sm:text-lg font-normal text-gray-700 leading-relaxed">
                            {children}
                          </p>
                        ),
                        h1: ({ children }) => (
                          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            {children}
                          </h2>
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

            {/* Display the remaining blogs */}
            <div className="border-t lg:border-t-0 lg:border-l border-theme-charcolBlue30 pt-[40px] lg:pt-0 mt-[40px] lg:mt-0 lg:pl-[40px] xl:pl-[60px] 2xl:pl-[73px] flex flex-col gap-[56px]">
              {remainingBlogs.map((blog) => (
                <div key={blog._id} className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex items-center gap-2 text-theme-charcolBlue font-regular text-base sm:text-lg lg:text-xl opacity-70 !leading-[20px]">
                    <span>
                      {new Date(blog.publishedDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span>-</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto_52px] items-start lg:items-center gap-6 w-full justify-between">
                    <a
                      target="_self"
                      className="text-theme-darkBrown text-2xl font-dm font-semibold leading-[1.3] hover:opacity-50"
                      href={`/blogs/${blog.slug.current}`}
                    >
                      {blog.title}
                    </a>
                    <div>
                      <Link
                        target="_self"
                        className="block"
                        href={`/blogs/${blog.slug.current}`}
                      >
                        <img
                          alt={blog.title}
                          loading="lazy"
                          width={52}
                          height={52}
                          decoding="async"
                          data-nimg={1}
                          className="rounded-lg"
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

          {/* Newly Added Blogs */}
          <NewBlog blogitems={blogitems} />
        </div>
      </section>
    </>
  );
};

export default Homepage;
