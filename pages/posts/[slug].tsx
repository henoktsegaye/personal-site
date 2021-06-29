// pages/posts/[slug].tsx
import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Layout from "../../components/layout/layout";
import Thumbnail from "../../components/basic/thumbnail";
import { IPost } from "../../types/post";
import { SITE_URL } from "../../lib/constants";
import { getPost, getAllPosts } from "../../lib/mdxUtils";
import langString, { langType } from "../../lib/lang";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
  localeString: langType;
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  localeString,
}: Props) => {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    if (!theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(!theme);
  };
  const ogImage = SITE_URL + frontMatter.thumbnail;
  const {
    middleContent,
    socialMedia,
    hero,
    portfolio,
    blog,
    getConnected,
    footer,
    general,
  } = localeString;
  return (
    <Layout
      pageTitle={frontMatter.title}
      strings={general}
      changeTheme={changeTheme}
      theme={theme}
    >
      <Head>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogDescription"
        />
        <meta property="og:image" content={ogImage} key="ogImage" />
      </Head>
      <div className="max-w-screen-lg mx-auto pb-10">
        <article className="prose prose-blue">
          <div className="mb-4">
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>

          <h1 className="text-gray-700 text-4xl font-bold mb-6 dark:text-gray-200">
            {frontMatter.title}
          </h1>

          <p className="text-gray-700 dark:text-gray-200">
            {frontMatter.description}
          </p>
          <MDXRemote {...source} />
        </article>
      </div>
    </Layout>
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

  const mdxSource = await serialize(content, { scope: data });

  const { posts } = getAllPosts(["slug"]);
  const localeString: langType = langString[locale];

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
      localeString,
    },
  }));
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async ({ locale = "en" }) => {
  const { posts } = getAllPosts(["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
