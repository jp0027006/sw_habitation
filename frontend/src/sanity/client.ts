import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION as string,
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === "true",
});
