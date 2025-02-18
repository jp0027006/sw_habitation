import { AuthorType } from "./author"
import { ContentFilterType } from "./contentfilter";

interface ContentBlock {
  description: any[];
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  } | null;
}

type Excerpt = any[];

export interface BlogType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedDate: string;
  readTime: string;
  author: AuthorType;
  excerpt: Excerpt;
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
  