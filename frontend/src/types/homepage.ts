import { BlogType } from "./blog";

export type HomepageType = {
    _id: string;
    visitorCount: number;
    visitorMessage: string;
    title: string;
    subtitle: string;
  };
  
  export interface HomepageProps {
    homepageitems: HomepageType[];
    blogitems: BlogType[];
  }
  