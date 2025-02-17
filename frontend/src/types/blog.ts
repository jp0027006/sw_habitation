export type BlogType = {
    imageUrl: string | undefined;
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    publishedDate: string;
    readTime: string;
    author: {
      imageUrl: string | undefined;
      _ref: string;
      name: string;
    };
    excerpt: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>;
    thumbnail: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    content: Array<{
      _key: string;
      _type: string;
      contentBlock: {
        description: Array<{ _key: string; _type: string; children: Array<{ _key: string; _type: string; text: string }> }>;
        image: {
          asset: {
            _ref: string;
            _type: string;
          };
        };
      };
    }>;
    category: string;
  };
  
  export interface BlogProps {
    blogitems: BlogType[];
  }
  