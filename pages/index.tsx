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
        <BlogsTeaser strings={blog} posts={posts} />
        <MiddleContent
          title={middleContent.title}
          content={middleContent.description}
          link={middleContent.link}
        />
        <div className=" max-w-screen-xl my-4 mx-auto mb-20">
          <h2 className="text-left text-6xl dark:text-white text-blue-900 w-full mb-10 ">
            Technologies used
          </h2>
          <div className="flex flex-row justify-start">
            <div className="w-40 mx-2 relative bg-gray-900 p-4 justify-center items-center flex rounded-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaKIFrM3TMb6fbF5a3UVNSP5III2wzjqsmosrvLVsd_jo9tT1bMsp_lu7BcqKuC1K_LM&usqp=CAU"
                alt=""
              />
              <span className="absolute bottom-2 left-2 shadow-lg text-3xl z-10">
                👍
              </span>
            </div>
            <div className="w-40 relative mx-2 bg-gray-900 p-4 justify-center items-center flex rounded-xl">
              {" "}
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <span className="absolute bottom-2 left-2 shadow-lg text-4xl z-10">
                💪
              </span>
            </div>
            <div className="w-40 mx-2 bg-gray-900 p-4 relative justify-center items-center flex rounded-xl">
              {" "}
              <img src="https://nodejs.org/static/images/logo.svg" alt="" />
              <span className="absolute bottom-2 left-2 shadow-lg text-4xl z-10">
                😎
              </span>
            </div>
            <div className="w-40 mx-2 bg-gray-900 p-4 relative justify-center items-center flex rounded-xl">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndp6hGNdHEnGuY6sS79rMgs29ejdYmvNrj09in407znQA-XhUQUFwYi9AJKfO7dP5sEA&usqp=CAU"
                alt=""
              />
              <span className="absolute bottom-2 left-2 shadow-lg text-4xl z-10">
                😎
              </span>
            </div>
            <div className="w-40 mx-2 bg-gray-900 p-4 relative justify-center items-center flex rounded-xl">
              {" "}
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <span className="absolute bottom-2 left-2 shadow-lg text-4xl z-10">
                😎
              </span>
            </div>
          </div>
        </div>
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
  ]);

  const localeString: langType = langString[locale];

  return { props: { files, localeString, locale } };
};
