// utils/mdxUtils.ts
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), "_posts");
const WORKS_PATH = join(process.cwd(), "_works");

function getPostFilePaths(): string[] {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

function getWorkFilesPaths(): string[] {
  return (
    fs
      .readdirSync(WORKS_PATH)
      // Only include md(x) files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getPost(slug: string, isWorks: boolean): Post {
  const fullPath = join(isWorks ? WORKS_PATH : POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getPostItems(
  filePath: string,
  fields: string[] = [],
  isWorks = false
): Items {
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data, content } = getPost(slug, isWorks);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []): {
  posts: Items[];
  works: Items[];
} {
  const filePaths = getPostFilePaths();
  const workPaths = getWorkFilesPaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  const works = workPaths
    .map((workPath) => getPostItems(workPath, fields, true))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { posts, works };
}
