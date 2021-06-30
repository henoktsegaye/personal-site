// pages/posts/[slug].tsx
import "../../styles/blog.module.css";
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
import Footer from "../../components/layout/footer";
import langString, { langType } from "../../lib/lang";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
  localeString: langType;
};

const WorksPage: React.FC<Props> = ({
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
      <div className="lg:max-w-screen-lg max-w-sm mx-auto mt-10 pb-10">
        <article className="prose prose-blue">
          <div className="mb-4">
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>

          <h1 className="text-gray-700 text-4xl font-bold mb-6 dark:text-gray-200">
            {frontMatter.title}
          </h1>
          <div className="text-lg blog ">
            <MDXRemote {...source} />
          </div>
        </article>
      </div>
      <Footer footer={footer} />
    </Layout>
  );
};

export default WorksPage;

export const getStaticProps = async ({
  params,
  locale = "en",
}: {
  locale: "am" | "en";
  params: {
    slug: string;
  };
}) => {
  const { content, data } = getPost(params?.slug as string, true);

  const mdxSource = await serialize(content, { scope: data });
  const localeString: langType = langString[locale];

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      localeString,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { works } = getAllPosts(["slug"]);

  const paths = works.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
