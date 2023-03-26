// pages/blogs/[slug].tsx
import { useState, useEffect, ReactNode } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ImageBox from "../../components/basic/imageBox";
import CodeAndImageBox from "../../components/basic/CodeAndImageBox";
import { Code } from "../../components/basic/code";
import Layout from "../../components/layout/layout";
import Featured from "../../components/basic/featured";
import { IPost } from "../../types/post";
import { getPost, getAllPosts } from "../../lib/mdxUtils";
import Footer from "../../components/layout/footer";
import LanguageStrings, { langType } from "../../lib/lang";
import Link from "next/link";
import { BlogNav } from "../../components/blog/blogNav";
import { useTheme } from "../../hooks/useTheme";
import { format } from "date-fns";
import { Text } from "../../components/basic/genial/text";

interface returnPath {
  params: {
    slug: string;
  };
  locale: string;
}

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
  localeString: langType;
  locale: "en" | "am";
  slug: string;
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  localeString,
  locale,
  slug,
}: Props) => {
  const { isDark, toggleTheme } = useTheme();

  const { footer, general, socialMedia } = localeString;
  const components = {
    ImageBox,
    CodeAndImageBox,
    code: (props: { className: string; children: string }) => (
      <Code {...props} dark={!isDark} />
    ),
    inlineCode: (props: { className: string; children: string }) => (
      <code
        {...props}
        className={`${
          !isDark ? "bg-gray-50" : "bg-gray-800"
        } px-3 py-1 rounded ${props.className}`}
      />
    ),
    Link: Link,
  };
  return (
    <>
      <BlogNav />
      <div className="lg:max-w-screen-lg max-w-sm mx-auto py-10">
        <article className="prose text-lg prose-blue mt-10">
          <div className="mb-10 mt-32 ">
            <Text isTitle className="mb-2" bold="extrabold" size="3xl">
              {frontMatter?.title}
            </Text>
            <span className="text-gray-500 block mb-6  dark:text-gray-400">
              Written on {format(new Date(frontMatter?.date), "MMM do yyyy")}
            </span>
          </div>
          <div className="  blog  dark:border-gray-900">
            <MDXRemote components={components} {...source} />
          </div>
        </article>
      </div>
      <Footer socialMedia={socialMedia} footer={footer} smaller />
    </>
  );
};

export default PostPage;

export const getStaticProps = async ({
  params,
  locale = "en",
}: {
  locale: "am" | "en";
  params: {
    slug: string;
  };
}) => {
  const { content, data } = getPost(params?.slug as string, false);
  const mdxSource = await serialize(content, {
    scope: data,
  });

  const { posts } = getAllPosts(["slug"]);
  const localeString: langType = LanguageStrings[locale];

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      localeString,
      locale,
      slug: params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { posts } = getAllPosts(["slug"]);
  const enPaths: returnPath[] = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
    locale: "en",
  }));

  const enPathsCopy = [...enPaths];
  const amPaths = enPathsCopy.map((zpath) => ({
    ...zpath,
    locale: "am",
  }));
  const paths = [...amPaths, ...enPaths];

  return {
    paths,
    fallback: false,
  };
};
