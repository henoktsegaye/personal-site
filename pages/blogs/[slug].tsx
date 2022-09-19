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
import Link from 'next/link'

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
      document.body.classList.add('bg-black')

    } else {
      localStorage.setItem("theme", "light");
      window.dispatchEvent(new Event("storage"));
      document.documentElement.classList.remove("dark");
      document.body.classList.remove('bg-black')

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
      Link: Link
  } 
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
      blog
      dateModified={new Date(frontMatter.date)}
      datePublished={new Date(frontMatter.date)}
    >
      <div className="lg:max-w-screen-lg max-w-sm mx-auto pb-10">
        <article className="prose prose-blue">
          <div className="mb-4 mt-12 rounded-3xl overflow-hidden " style={{backgroundImage: `url(${frontMatter.thumbnail})`}}>
            <Featured title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>
          <h1 className="text-4xl text-black dark:text-white font-bold mb-4">
            {frontMatter.title}
          </h1>
          <span className="text-gray-500 block mb-4  dark:text-gray-400">
            Date: {frontMatter?.date}, about 
            <span className="font-bold dark:text-white text-black text-lg" > {frontMatter?.hashtag} </span> 
             ,author <Link href="/">
              <a href="/" className="text-blue-700 text-lg" >
              {frontMatter?.author}
              </a>
              </Link>
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
