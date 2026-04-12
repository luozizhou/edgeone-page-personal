export interface Post {
  title: string;
  titleZh?: string;
  description: string;
  descriptionZh?: string;
  date: string;
  image: string;
  slug: string;
  tags?: string[];
  tagsZh?: string[];
  author?: string;
  readTime?: string;
  content?: string;
  contentZh?: string;
  html?: string;
  htmlZh?: string;
  archived?: boolean;
  pdfSrc?: string;
  summary?: string;
  summaryZh?: string;
  mdPages?: string[];
  mdPagesZh?: string[];
} 