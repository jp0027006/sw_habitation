// app/page.tsx

import { NavbarType } from "@/types/navbar";
import Navbar from "./components/Navbar";
import { client } from "@/sanity/client";

const NAVBAR_QUERY = `*[_type == "navbar"]`;


export default async function Home() {
  const navbaritems: NavbarType[] = await client.fetch(NAVBAR_QUERY);

  return (
    <>
      <Navbar navbaritems={navbaritems} />
    </>
  );
}
