export interface Professional {
  id: string;
  name: string;
  designation: string;
  affiliation?: string;
  image: {
    src: string;
    alt: string;
  };
  description?: string;
}