import { NavbarProps } from "@/types/navbar";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

const Navbar = ({ navbaritems }: NavbarProps) => {
  const data = JSON.stringify(navbaritems, null, 2);

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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
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
