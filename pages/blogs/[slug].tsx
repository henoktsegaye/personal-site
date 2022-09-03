// pages/blogs/[slug].tsx
import { useState, useEffect } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import ImageBox from "../../components/basic/imageBox";
import CodeAndImageBox from "../../components/basic/CodeAndImageBox";
import { Code } from "../../components/basic/code";
import Layout from "../../components/layout/layout";
import Featured from "../../components/basic/featured";
import { IPost } from "../../types/post";
import { SITE_URL } from "../../lib/constants";
import { getPost, getAllPosts } from "../../lib/mdxUtils";
import Footer from "../../components/layout/footer";
import LanguageStrings, { langType } from "../../lib/lang";

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
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  
  useEffect(() => {
    const xtheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark";
    if (xtheme == "dark") {
      toggleTheme();
    }
  }, []);
  
  const toggleTheme = () => {
    if (!darkTheme) {
      localStorage.setItem("theme", "dark");
      window.dispatchEvent(new Event("storage"));
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      window.dispatchEvent(new Event("storage"));
      document.documentElement.classList.remove("dark");
    }
    setDarkTheme(!darkTheme);
  };

  const { footer, general } = localeString;
  const components = {
    ImageBox,
    CodeAndImageBox,
    code: (props: {className: string, children:string}) => (
      <Code
        {...props}
        dark={!darkTheme}
      />
    ),
    inlineCode: (props: {className: string, children:string}) => <code
        {...props}
        className={`${!darkTheme ? "bg-gray-50" : "bg-gray-800"} px-3 py-1 rounded ${props.className}`}
      />,
  };
  return (
    <Layout
      locale={locale}
      pageTitle={frontMatter.title}
      pageDescription={frontMatter.description}
      pageImage={frontMatter.thumbnail}
      strings={general}
      changeTheme={toggleTheme}
      theme={darkTheme}
      allStrings={localeString}
      slug={`${slug}`}
    >
      <div className="lg:max-w-screen-lg max-w-sm mx-auto pb-10">
        <article className="prose prose-blue">
          <div className="mb-4 mt-12">
            <Featured title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>
          <h1 className="text-4xl text-black dark:text-white font-bold mb-4">
            {frontMatter.title}
          </h1>
          <span className="text-gray-500 block mb-4  text-xl dark:text-gray-400">
            {frontMatter?.date} | #{frontMatter?.hashtag}
          </span>
          <div className="text-lg blog border-t pt-4 dark:border-gray-900">
            <MDXRemote components={components} {...source} />
          </div>
        </article>
      </div>
      <Footer footer={footer} smaller />
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