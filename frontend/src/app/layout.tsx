import { NavbarType } from "@/types/navbar";
import { client } from "@/sanity/client";
import Navbar from "./components/Navbar";
import "./globals.css";

const NAVBAR_QUERY = `*[_type == "navbar"]`;

export default async function Layout({ children }: { children: React.ReactNode }) {
  const navbaritems: NavbarType[] = await client.fetch(NAVBAR_QUERY);

  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Navbar navbaritems={navbaritems} />
        <main>{children}</main>
      </body>
    </html>
  );
}
