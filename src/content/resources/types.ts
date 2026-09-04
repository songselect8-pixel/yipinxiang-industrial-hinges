export type ResourceCategoryId =
  | "selection-guides"
  | "application-guides"
  | "technical-guides"
  | "custom-manufacturing"
  | "manufacturing-quality";

export type ResourceCategory = {
  id: ResourceCategoryId;
  name: string;
  description: string;
  order: number;
};

export type ResourceInlineLink = { type: "link"; text: string; href: string };
export type ResourceInline = string | ResourceInlineLink;
export type ResourceRichText = readonly ResourceInline[];

export type ResourceHeadingBlock = {
  type: "heading";
  level: 2 | 3;
  id: string;
  title: string;
};

export type ResourceParagraphBlock = { type: "paragraph"; content: ResourceRichText };
export type ResourceListBlock = {
  type: "list";
  ordered?: boolean;
  items: readonly ResourceRichText[];
};
export type ResourceCalloutBlock = {
  type: "callout";
  label: string;
  content: ResourceRichText;
};
export type ResourceImageBlock = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  evidence: "product-photograph" | "catalog-drawing" | "company-photograph" | "supporting-illustration";
};
export type ResourceProductTableBlock = {
  type: "product-table";
  productIds: readonly string[];
  title: string;
  description: string;
  display: "catalog-examples" | "complete-records";
};
export type ResourceComparisonTableBlock = {
  type: "comparison-table";
  caption: string;
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  note?: string;
};

export type ResourceContentBlock =
  | ResourceHeadingBlock
  | ResourceParagraphBlock
  | ResourceListBlock
  | ResourceCalloutBlock
  | ResourceImageBlock
  | ResourceProductTableBlock
  | ResourceComparisonTableBlock;

export type ResourceArticle = {
  slug: string;
  order: number;
  title: string;
  description: string;
  category: ResourceCategoryId;
  publishedAt: string;
  updatedAt: string | null;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  keywords: readonly string[];
  relatedProducts: readonly string[];
  relatedApplications: readonly string[];
  relatedArticles: readonly string[];
  draft: boolean;
  noindex: boolean;
  featured: boolean;
  introduction: string;
  content: readonly ResourceContentBlock[];
  keyTakeaways: readonly string[];
};

export type ResourceTocItem = { id: string; title: string; level: 2 | 3 };

export const resourceLink = (text: string, href: string): ResourceInlineLink => ({ type: "link", text, href });
