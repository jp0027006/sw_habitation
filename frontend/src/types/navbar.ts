export type NavbarType = {
  _id: string;
  name: string;
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
};


export interface NavbarProps {
    navbaritems: NavbarType[];
  }
  