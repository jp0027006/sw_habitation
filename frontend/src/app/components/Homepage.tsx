import { HomepageProps } from "@/types/homepage";
import Link from "next/link";
import React from "react";
import NewBlog from "./NewBlog";
import MainBlogs from "./MainBlogs";

const Homepage: React.FC<HomepageProps> = ({ homepageitems, blogitems }) => {
  const homepage = homepageitems[0];

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
          <MainBlogs blogitems={blogitems} />

          {/* Newly Added Blogs */}
          <NewBlog blogitems={blogitems} />
        </div>
      </section>
    </>
  );
};

export default Homepage;
