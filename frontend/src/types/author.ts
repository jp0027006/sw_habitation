export interface AuthorType {
    _id: string;
    name: string;
    avatar: {
      asset: {
        _ref: string;
        url: string;
      };
      _type: string;
    } | null;
  }
  