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
import Display404 from "../components/basic/display404";
import EmailMe from "../components/homePage/emailMe";
import Hero from "../components/homePage/hero";
import LanguageStrings, { langType } from "../lib/lang";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
  localeString: langType;
  locale: "am" | "en";
};

const Home: React.FC<Props> = ({ files, localeString, locale }) => {
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
    string404,
  } = localeString;

  const [theme, setTheme] = useState<boolean>(false);

  const toogleTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.classList.add('bg-black')

    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove('bg-black')

    }
    setTheme(!theme);
  };

  return (
    <Layout
      strings={general}
      pageTitle={string404.siteTitle}
      pageDescription={string404.subTitle}
      changeTheme={toogleTheme}
      theme={theme}
      locale={locale}
      allStrings={localeString}
    >
      <div>
        <Display404 strings={string404} />
        <Hero hero={hero} socialMedia={socialMedia} />

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

  const localeString: langType = LanguageStrings[locale];

  return { props: { files, localeString, locale } };
};
