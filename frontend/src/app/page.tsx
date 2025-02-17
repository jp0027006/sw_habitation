import React from "react";
import { client } from "@/sanity/client";
import { HomepageType } from "@/types/homepage";
import Homepage from "./components/Homepage";

const HOMEPAGE_QUERY = `*[_type == "homepage"]`;

export default async function HomepagePage({}: { children: React.ReactNode }) {
  const homepageitems: HomepageType[] = await client.fetch(HOMEPAGE_QUERY);

  return <Homepage homepageitems={homepageitems} />;
}
