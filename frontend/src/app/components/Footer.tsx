import React from "react";
import { FooterProps } from "@/types/footer";

const Footer: React.FC<FooterProps> = ({ footeritems }) => {
  const footer = footeritems[0];

  return (
    <>
      <footer className="bg-black relative">
        <div className="">
          <div className="pt-14 sm:pt-16 md:pt-20 pb-11">
            <div className="flex flex-col justify-center items-center">
              <div className="w-96 mx-auto text-center text-white font-medium text-4xl">
                <h2>{footer.heading}</h2>
              </div>
              <div>
                <div className="flex flex-col xl:flex-row justify-center xl:justify-between relative font-poppins">
                  <div className="mail-msg pt-6 w-full">
                    <form
                      action="#"
                      className="w-full relative flex flex-col sm:flex-row items-center gap-4 sm:gap-2"
                    >
                      <div className="flex flex-col items-center">
                        <input
                          name="email"
                          type="email"
                          placeholder={footer.emailPlaceholder}
                          className="placeholder:font-semibold placeholder:text-base placeholder:text-white bg-transparent rounded-full border px-8 py-3 text-white focus-visible:outline-none placeholder:lowercase"
                        />
                      </div>
                      <button
                        className="text-black hover:text-green-400 border border-transparent hover:border-green-400 text-base font-semibold bg-theme-green hover:bg-transparent px-8 py-[10px] md:px-10 md:py-[12px] rounded-full inline-flex items-center justify-center cursor-pointer"
                        type="submit"
                      >
                        {footer.buttonText}
                      </button>
                    </form>
                  </div>
                </div>
                <div className="mail-msg-text"></div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center flex-col sm:flex-row justify-center mt-[70px] md:mt-[75px] lg:mt-85px gap-4 sm:gap-0">
              {footer.socialLinks.map((link, index) => (
                <div
                  key={link.platform}
                  className="flex items-center flex-col sm:flex-row gap-4 sm:gap-0"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg sm:text-xl md:text-2xl font-medium hover:opacity-50 !leading-[120%]"
                    href={link.url}
                  >
                    {link.platform}
                  </a>
                  {index !== footer.socialLinks.length - 1 && (
                    <span className="w-2 h-2 rounded-full bg-theme-green s(767):mx-0 s(767):my-2 mx-4"></span>
                  )}
                </div>
              ))}
            </div>

            {/* Footer Links */}
            <div className="flex items-center justify-center gap-4 mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-92px">
              {footer.footerLinks.map((item) => (
                <div key={item.label}>
                  <a
                    target="_self"
                    rel=""
                    className="text-white text-base font-medium hover:opacity-50 leading-[120%] opacity-100"
                    href={item.link}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            {/* Back to Top Button */}
            {footer.backToTop && (
              <div className="absolute right-4 xs:right-6 sm:right-8 bottom-6 md:bottom-8 cursor-pointer">
                <div
                  //   style={{ backgroundColor: "rgb(62, 255, 111)" }}
                  className="w-[40px] h-[24px] xs:w-[60px] xs:h-[30px] md:w-[80px] md:h-[40px] lg:w-[104px] lg:h-[56px] rounded-full bg-transparent hover:bg-green-400 border border-theme-green flex items-center justify-center group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:[&>path]:fill-black w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px]"
                  >
                    <path
                      d="M11 20V7.825L5.4 13.425L4 12L12 4L20 12L18.6 13.425L13 7.825V20H11Z"
                      fill="#3EFF6F"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
