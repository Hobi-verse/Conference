export interface AboutData {
  title: string;
  subtitle: string;
  description: string[];
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  sections: {
    heading: string;
    content: string;
  }[];
}
