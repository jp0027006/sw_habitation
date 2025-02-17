import { NavbarType } from "@/types/navbar";
import { FooterType } from "@/types/footer";
import { HomepageType } from "@/types/homepage";
import { client } from "@/sanity/client";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const NAVBAR_QUERY = `*[_type == "navbar"]`;
const FOOTER_QUERY = `*[_type == "footer"]`;
const HOMEPAGE_QUERY = `*[_type == "homepage"]`;

export default async function Layout({ children }: { children: React.ReactNode }) {
  const navbaritems: NavbarType[] = await client.fetch(NAVBAR_QUERY);
  const footeritems: FooterType[] = await client.fetch(FOOTER_QUERY);
  const homepageitems: HomepageType[] = await client.fetch(HOMEPAGE_QUERY);

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar navbaritems={navbaritems} />
        <main>{children}</main>
        <Footer footeritems={footeritems} />
      </body>
    </html>
  );
}
