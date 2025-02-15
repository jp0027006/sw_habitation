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