export type ContentPageSection = {
  title: string;
  items: string[];
};

export type ContentPageAction = {
  label: string;
  href: string;
  style?: "primary" | "secondary" | "outline";
};

export type ContentPageData = {
  hero: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
  };
  pageTitle: string;
  intro: string[];
  actions?: {
    left?: ContentPageAction[];
    right?: ContentPageAction[];
  };
  sectionsStyle?: "cards" | "plain";
  sectionsHeading?: string;
  sections: ContentPageSection[];
};
