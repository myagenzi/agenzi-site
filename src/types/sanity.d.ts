export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface Work {
  _id: string;
  title: string;
  slug: SanitySlug;
  client: string;
  category: string;
  year: string;
  coverImage: SanityImage;
  videoUrl?: string;
  description: string;
  tags: string[];
  featured: boolean;
  order: number;
}

export interface JournalPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  author: string;
  category: string;
  coverImage: SanityImage;
  excerpt: string;
  body: unknown[];
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  photo: SanityImage;
  quote: string;
  videoUrl?: string;
  featured: boolean;
  order: number;
}

export interface Service {
  _id: string;
  title: string;
  slug: SanitySlug;
  number: string;
  description: string;
  tags: string[];
  order: number;
}

export interface SiteSettings {
  _id: string;
  siteTitle: string;
  siteDescription: string;
  ogImage: SanityImage;
  email: string;
  phone: string;
  address: string;
  socialLinks: { platform: string; url: string }[];
  heroHeadline: string;
  heroSubline: string;
}
