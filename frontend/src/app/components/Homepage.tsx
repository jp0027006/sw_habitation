import { HomepageProps } from "@/types/homepage";
import React from "react";

const Homepage: React.FC<HomepageProps> = ({ homepageitems }) => {
  const homepage = homepageitems[0];

  return (
    // <div>
    //   <h1>{homepage.visitorCount}</h1>
    //   <p>{homepage.visitorMessage}</p>
    //   <p>{homepage.title}</p>
    //   <p>Visitor count: {homepage.subtitle}</p>
    // </div>
    <>
      <section className="bg-gray-50">
        <div className=" xl:ml-36 xl:mr-36 lg:ml-52 lg:mr-52 pt-[180px] md:pt-[220px] lg:pt-[80px] pb-[60px] xs:pb-[80px] sm:pb-[120px] md:pb-[150px] lg:pb-[300px] xl:pb-[280px] ">
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
              <a
                target="_self"
                className="w-fit inline-flex items-center gap-2 bg-theme-charcolBlue80 rounded-3xl py-[6px] px-2"
                href="/"
              >
                <span className="text-[12px] xs:text-sm md:text-base text-theme-charcolBlue font-semibold px-3 py-[6px] bg-theme-green rounded-20 !leading-[1]">
                    {homepage.visitorCount}
                </span>
                <span className="text-theme-charcolBlue text-[11px] xs:text-sm font-medium tracking-[-0.1px] flex items-center gap-1">
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
              </a>
              <div className="[&>h1]:text-[#1D1D20] [&>h1]:text-[32px] sm:[&>h1]:text-[35px] md:[&>h1]:text-[42px] lg:[&>h1]:text-[45px] xl:[&>h1]:text-[55px] 2xl:[&>h1]:text-62px [&>h1]:font-semibold [&>h1]:text-center [&>h1]:leading-[45px] lg:[&>h1]:leading-[50px] xl:[&>h1]:leading-[58px] 2xl:[&>h1]:leading-[72px]">
                <h1 id="code-chronicles-frontend-and-backend-in-sync">
                    {homepage.title}
                </h1>
              </div>
              <div className="[&>p]:text-theme-slateGray [&>p]:text-sm sm:[&>p]:text-base [&>p]:font-normal [&>p]:text-center [&>p]:tracking-[-0.4px] [&>p]:leading-[28px]">
                <p>
                    {homepage.subtitle}
                </p>
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
    </>
  );
};

export default Homepage;
