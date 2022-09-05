// pages/index.tsx
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "../components/layout/layout";
import { IPost } from "../types/post";
import { getAllPosts } from "../lib/mdxUtils";
import Footer from "../components/layout/footer";
import WorksTeaser from "../components/homePage/worksTeaser";
import LanguageShowCase from "../components/homePage/languageShowCase";
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
        <LanguageShowCase title={languages.title} />
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
