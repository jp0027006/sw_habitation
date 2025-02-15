export type NavbarType = {
    _id: string;
    logo: {
      asset: {
        _ref: string;
      };
    };
    logoText: string;
    menuItems: {
      title: string;
      link: string;
    }[];
    buttonItems: {
      btnName: string;
      btnLink: string;
    }[];
  };
  


export interface NavbarProps {
    navbaritems: NavbarType[];
  }
  