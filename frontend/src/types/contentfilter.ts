import { BlogType } from "./blog";


export type SearchType = {
  enableSearch: boolean;
  searchPlaceholder?: string;
};

export type ContentFilterType = {
  _id: string;
  filterButton: boolean;
  search: SearchType;
};

export interface ContentFilterProps {
  contentfilteritems: ContentFilterType[];
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  blogs: BlogType[];
  setFilteredBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>;
}
