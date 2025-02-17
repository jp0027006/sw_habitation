import { HomepageProps } from "@/types/homepage";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";

const Homepage: React.FC<HomepageProps> = ({ homepageitems, blogitems }) => {
  const homepage = homepageitems[0];
  console.log(blogitems);

  const sortedBlogs = blogitems.sort((a, b) => new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime());
  const oldestBlog = sortedBlogs[0];
  

  return (
    <>
      <section className="bg-gray-50">
        <div className="xl:ml-36 xl:mr-36 lg:ml-52 lg:mr-52 pt-[180px] md:pt-[220px] lg:pt-[80px] pb-[60px] xs:pb-[80px] sm:pb-[120px] md:pb-[150px] lg:pb-[300px] xl:pb-[280px]">
          <div className="flex items-center justify-between w-full relative">
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
          </div>
        </div>
      </section>

      <section className="pt-[80px] md:pt-[110px]">
        <div className="container">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
              <div className="lg:pr-[40px] xl:pr-[60px] 2xl:pr-[73px]">
                <div className="flex flex-col gap-5 lg:gap-6 xl:gap-8">
                  <div className="flex items-center gap-2 text-theme-charcolBlue70 font-regular text-base lg:text-lg xl:text-xl !leading-[20px]">
                    <span>{oldestBlog.publishedDate}</span>
                    <span>-</span>
                    <span>{oldestBlog.readTime}</span>
                  </div>
                  <a
                    target="_self"
                    className="block pb-4 sm:pb-0"
                    href="/blogs/what-is-jamstack"
                  >
                    <img
                      alt="What is JAMstack?"
                      loading="lazy"
                      width={98}
                      height={98}
                      decoding="async"
                      data-nimg={1}
                      className="rounded-lg"
                      src="https://cdn.sanity.io/images/7w000gxc/production/0ef61607d1c4110c291d6c0af163d820bbe7f41e-512x512.svg?w=512&q=100&fit=clip&auto=format"
                      style={{ color: "transparent" }}
                    />
                  </a>
                  <a
                    target="_self"
                    className="text-theme-darkBrown text-3xl lg:text-4xl 2xl:text-5xl font-dm font-semibold !leading-[40px] lg:!leading-[45px] 2xl:!leading-[54px] hover:opacity-50"
                    href="/blogs/what-is-jamstack"
                  >
                    {oldestBlog.title}
                  </a>
                  <div className="[&>p]:text-theme-darkBrown [&>p]:text-base [&>p]:font-regular [&>p]:!leading-[24px] -mt-3 lg:mt-0">
                    {/* Render excerpt using PortableText */}
                    <PortableText value={oldestBlog.excerpt} />
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
                      src="https://cdn.sanity.io/images/7w000gxc/production/fcdd283b08e94444c57a6ef44512b83135e841ae-24x24.svg?w=24&q=100&fit=clip&auto=format"
                      style={{ color: "transparent" }}
                    />
                    <span className="text-base md:text-lg lg:text-xl text-theme-charcolBlue70 font-normal !leading-[1]">
                        {oldestBlog.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
