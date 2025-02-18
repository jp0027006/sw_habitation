export type ButtonType = {
    enabled: boolean;
    buttonText?: string;
  };
  
  export type SearchType = {
    enableSearch: boolean;
    searchPlaceholder?: string;
  };
  
  export type ContentFilterType = {
    _id: string;
    buttons: ButtonType[];
    search: SearchType;
  };
  
  export interface ContentFilterProps {
    contentfilteritems: ContentFilterType[];
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  