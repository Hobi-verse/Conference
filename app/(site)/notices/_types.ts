export interface Notice {
  id: string;
  title: string;
  date: string;
  summary: string;
  priority?: 'normal' | 'important';
}