export interface IPost {
  slug: string;
  date: string;
  hashtag: string;
  thumbnail: string;
  title: string;
  description: string;
  color?: string;
  type?: string;
  tech?: string[];
}
