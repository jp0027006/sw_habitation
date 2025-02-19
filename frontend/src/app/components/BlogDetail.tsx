"use client";
import { BlogDetailProps } from "@/types/blog";
import { PortableText } from "next-sanity";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { useState } from "react";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}
function BlogDetail({ blogdetail }: BlogDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (imageSrc: string) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  return (
    <>
      <div className="px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-8 pt-[20px] md:pt-[20px] lg:pt-[150px]">
          <div className="flex flex-wrap items-center gap-2 text-theme-charcolBlue70 font-regular text-sm lg:text-lg xl:text-xl leading-relaxed">
            <span>
              {new Date(blogdetail.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>-</span>
            <span>{blogdetail.readTime}</span>
          </div>
          <h1 className="text-theme-slateGray text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-62px font-semibold text-left leading-snug sm:leading-[55px] md:leading-[60px] lg:leading-[72px]">
            {blogdetail.title}
          </h1>
          <div className="flex items-center gap-2 md:gap-3">
            <img
              alt="Image"
              loading="lazy"
              width={40}
              height={40}
              decoding="async"
              data-nimg={1}
              className="rounded-full text-theme-charcolBlue text-xl font-normal w-8 md:w-10 h-8 md:h-10 object-cover"
              src={blogdetail.author.avatar?.asset?.url}
              style={{ color: "transparent" }}
            />
            <span className="text-theme-charcolBlue70 font-normal text-sm md:text-lg lg:text-xl">
              {blogdetail.author.name}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[100px] mb-[60px] sm:mb-[80px] md:mb-[100px] lg:mb-[120px] gap-6 lg:gap-16">
          <div className="w-full lg:w-[25%] xl:w-[18.1%] sticky top-[150px] z-10 hidden lg:block px-4 lg:px-0 mt-6 lg:mt-0 self-start space-y-6">
            <a
              target="_self"
              rel=""
              className="flex items-center justify-center gap-[10px] bg-gray-200 rounded-full text-sm xl:text-base text-theme-charcolBlue font-semibold px-[20px] lg:px-[30px] xl:px-[40px] py-[15px] border border-transparent hover:border hover:border-black hover:bg-transparent whitespace-nowrap"
              href="/blogs"
            >
              <span className="min-w-[20px] xl:min-w-[25px]">
                <svg
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-360 w-[20px] xl:w-[25px]"
                >
                  <path
                    d="M8.32843 10.9999H20.5V12.9999H8.32843L13.6924 18.3638L12.2782 19.778L4.5 11.9999L12.2782 4.22168L13.6924 5.63589L8.32843 10.9999Z"
                    fill="#0F172A"
                  />
                </svg>
              </span>
              Back to articles
            </a>
          </div>

          <div className="w-full lg:w-[75%] xl:w-[81.9%]">
            <div>
              <div className="flex flex-col gap-4 pb-6">
                <span className="text-[#0F172A] text-base font-normal">
                  {new Date(blogdetail.publishedDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              <div>
                <PortableText
                  value={blogdetail.content}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="sm:text-lg text-xl font-normal text-gray-900 leading-relaxed mb-2">
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                          {children}
                        </h1>
                      ),
                    },
                    types: {
                      image: ({ value }) => (
                        <img
                          src={urlFor(value.asset._ref).url()}
                          loading="lazy"
                          className="rounded-md mt-8 mb-6 cursor-zoom-in"
                          alt="Post image"
                          onClick={() =>
                            openModal(urlFor(value.asset._ref).url())
                          }
                        />
                      ),
                      code: ({ value }) => (
                        <pre className="bg-gray-100 text-black p-4 mt-3 rounded-md overflow-x-auto">
                          <code>{value.code}</code>
                        </pre>
                      ),
                    },
                  }}
                />
              </div>
              {/* Modal for zooming the image */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-[2000] flex justify-center items-center">
                  <div className="relative">
                    <img
                      src={modalImageSrc}
                      alt="Zoomed-in image"
                      className="max-w-full max-h-[90vh] rounded-md object-contain cursor-zoom-out"
                    />
                    <button
                      onClick={closeModal}
                      className="absolute top-4 md:top-0 right-[25px] text-white text-[40px] no-underline cursor-pointer font-extralight"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start mt-14 pt-6 border-t-[1px] border-[#DDDDDDDD] gap-3 sm:gap-0">
              <div className="text-center sm:text-left">
                <div className="text-theme-charcolBlue text-xl font-semibold font-dm">
                  SW Habitation
                </div>
                <div className="text-theme-charcolBlue70 text-sm font-medium">
                  Founder &amp; CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
