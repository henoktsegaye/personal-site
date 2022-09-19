export interface IPost {
  slug: string;
  date: string;
  hashtag: string;
  thumbnail: string;
  title: string;
  description: string;
  author: string;
  color?: string;
  type?: string;
  tech?: string[];
}
