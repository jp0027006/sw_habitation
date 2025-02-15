// Navbar
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

// Footer
export type FooterType = {
  _id: string;
  heading: string;
  emailPlaceholder: string;
  buttonText: string;
  socialLinks: {
    platform: string;
    url: string;
  }[];
  footerLinks: {
    label: string;
    link: string;
  }[];
  backToTop: boolean;
};

export interface FooterProps {
  footeritems: FooterType[];
}
