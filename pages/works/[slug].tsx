// pages/posts/[slug].tsx
import "../../styles/blog.module.css";
import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Layout from "../../components/layout/layout";
import Featured from "../../components/basic/featured";
import { IPost } from "../../types/post";
import { SITE_URL } from "../../lib/constants";
import { getPost, getAllPosts } from "../../lib/mdxUtils";
import Footer from "../../components/layout/footer";
import langString, { langType } from "../../lib/lang";
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
  locale: "am" | "en";
};

const WorksPage: React.FC<Props> = ({
  source,
  frontMatter,
  localeString,
  locale,
}: Props) => {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "dark");

      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");

      document.documentElement.classList.remove("dark");
    }
    setTheme(!theme);
  };
  const ogImage = SITE_URL + frontMatter.thumbnail;
  const { footer, general } = localeString;
  return (
    <Layout
      locale={locale}
      pageTitle={frontMatter.title}
      pageDescription={frontMatter.description}
      pageImage={frontMatter.thumbnail}
      strings={general}
      changeTheme={changeTheme}
      theme={theme}
      allStrings={localeString}
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
            <Featured title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>

          <h1 className="text-gray-700 text-4xl font-bold mb-6 dark:text-gray-200">
            {frontMatter.title}
          </h1>
          <div className="text-lg blog ">
            <MDXRemote {...source} />
          </div>
        </article>
      </div>
      <Footer footer={footer} smaller />
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
      locale,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { works } = getAllPosts(["slug"]);
  const enPaths: returnPath[] = works.map((post) => ({
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
