import { AuthorType } from "./author";
import { ContentFilterType } from "./contentfilter";

interface ContentBlock {
  _key: string;
  _type: string;
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }>;
  style?: string;
  asset?: {
    _ref: string;
    url: string;
  };
}

export interface BlogType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedDate: string;
  readTime: string;
  author: AuthorType;
  thumbnail: {
    asset: {
      _ref: string;
      url: string;
    };
    _type: string;
  };
  content: ContentBlock[];
  category: string;
}

export interface BlogProps {
  blogitems: BlogType[];
}

export interface NewblogProps {
  blogitems: BlogType[];
}

export interface MainblogProps {
  blogitems: BlogType[];
}

export interface BlogViewProps {
  contentfilteritems: ContentFilterType[];
  blogitems: BlogType[];
}

export interface LatestPostProps {
  restOfRemainingBlogs: BlogType[];
}

export interface BlogDetailProps {
  blogdetail: BlogType;
}
