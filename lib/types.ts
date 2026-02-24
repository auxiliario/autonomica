export interface Signal {
  slug: string;
  title: string;
  date: string;
  source: string;
  source_type: string;
  source_link: string;
  tags: string[];
  creator: string;
  lang: string;
  seo_description: string;
  content: string;
}

export interface DocPage {
  slug: string;
  title: string;
  content: string;
}

export type FilterDimension =
  | "topics"
  | "entities"
  | "platform"
  | "creator"
  | "type"
  | "layer";
