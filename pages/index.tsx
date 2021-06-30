// pages/index.tsx
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout";
import Thumbnail from "../components/basic/thumbnail";
import { IPost } from "../types/post";
import { SITE_NAME } from "../lib/constants";
import { getAllPosts } from "../lib/mdxUtils";
import Footer from "../components/layout/footer";
import BlogsTeaser from "../components/homePage/blogsTeaser";
import WorksTeaser from "../components/homePage/worksTeaser";
import MiddleContent from "../components/basic/middleContent";
import EmailMe from "../components/homePage/emailMe";
import Hero from "../components/homePage/hero";
import langString, { langType } from "../lib/lang";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
  localeString: langType;
};

const Home: React.FC<Props> = ({ files, localeString }) => {
  const { posts, works } = files;
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

  const [theme, setTheme] = useState<boolean>(false);

  const toogleTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
    setTheme(!theme);
  };

  return (
    <Layout
      strings={general}
      pageTitle={general.siteTitle}
      changeTheme={toogleTheme}
      theme={theme}
    >
      <Head>
        <title>{general.siteTitle}</title>
      </Head>

      <div>
        <Hero hero={hero} socialMedia={socialMedia} />
        <WorksTeaser works={works} strings={portfolio} />
        <MiddleContent
          title={middleContent.title}
          content={middleContent.description}
          link={middleContent.link}
        />
        <BlogsTeaser strings={blog} posts={posts} />
        <EmailMe strings={getConnected} />

        <Footer footer={footer} />
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({
  locale = "en",
}: {
  locale: "am" | "en";
}) => {
  const files = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "title",
    "description",
  ]);

  const localeString: langType = langString[locale];

  return { props: { files, localeString } };
};
