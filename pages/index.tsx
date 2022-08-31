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
import LanguageShowCase from "../components/homePage/languageShowCase";
import EmailMe from "../components/homePage/emailMe";
import Hero from "../components/homePage/hero";
import LanguageStrings, { langType } from "../lib/lang";
import TestimonialsSection from "../components/homePage/testimonials";
import WorkHistoryContainer from "../components/workHistory";

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
    languages,
    middleContent,
    socialMedia,
    hero,
    portfolio,
    blog,
    getConnected,
    footer,
    general,
    testimonials,
    workHistories,
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
      pageTitle={general.siteDescription}
      pageDescription={general.siteDescription}
      pageImage="/assets/henok-face.jpg"
      changeTheme={toogleTheme}
      theme={theme}
      locale={locale}
      allStrings={localeString}
    >
      <div>
        <Hero hero={hero} socialMedia={socialMedia} />
        {/* <BlogsTeaser strings={blog} posts={posts} /> */}
        <MiddleContent
          title={middleContent.title}
          content={middleContent.description}
          link={middleContent.link}
        />
        <LanguageShowCase title={languages.title} />
        <WorkHistoryContainer
          title={workHistories.title}
          workHistory={workHistories.workHistories}
        />
        {/* <TestimonialsSection
          title={testimonials.title}
          description={testimonials.subTitle}
          testimonails={testimonials.testimonials}
        /> */}
        <WorksTeaser works={works} strings={portfolio} />
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
    "hashtag",
    "color",
    "tech",
    "type",
  ]);

  const localeString: langType = LanguageStrings[locale];

  return { props: { files, localeString, locale } };
};
