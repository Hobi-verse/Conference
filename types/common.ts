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

export interface Notice {
  id: string;
  title: string;
  date: string;
  summary: string;
  priority?: 'normal' | 'important';
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker?: string;
  location?: string;
}