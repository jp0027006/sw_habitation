"use client"
import { useState } from "react";
import { NavbarProps } from "@/types/navbar";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

const Navbar = ({ navbaritems }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border border-black/10 pt-4 pb-3 sticky right-0 left-0 top-0 z-[1000]">
      <div className="max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            className="h-20"
            src={urlFor(navbaritems[0].logo).url()}
            alt={navbaritems[0].logoText}
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Full Screen Overlay Menu */}
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } fixed top-0 z-[999] w-full h-full bg-black transition-all duration-500`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-white mt-9">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="font-medium flex flex-col ml-32 justify-center h-full text-white">
            {navbaritems[0].menuItems.map((item) => (
              <li key={item.title} className="mb-6">
                <Link
                  href={item.link}
                  className="text-4xl font-medium hover:opacity-50 opacity-100"
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {navbaritems[0].buttonItems.map((button) => (
              <li key={button.btnName} className="mb-6">
                <Link
                  href={button.btnLink}
                  className="bg-theme-green text-black text-lg font-medium px-8 py-[10px] md:px-10 md:py-[12px] rounded-full border border-transparent hover:bg-transparent hover:border hover:border-black"
                  aria-current="page"
                >
                  {button.btnName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar Links for larger screens */}
        <div
          className="hidden md:block w-full md:w-auto"
        >
          <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            {navbaritems[0].menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="block py-2 px-3 rounded-sm md:bg-transparent text-lg font-medium hover:opacity-50 opacity-100"
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {navbaritems[0].buttonItems.map((button) => (
              <li key={button.btnName}>
                <Link
                  href={button.btnLink}
                  className="bg-theme-green text-black text-lg font-medium px-8 py-[10px] md:px-10 md:py-[12px] rounded-full border border-transparent hover:bg-transparent hover:border hover:border-black"
                  aria-current="page"
                >
                  {button.btnName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
