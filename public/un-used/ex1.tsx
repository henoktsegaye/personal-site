// pages/index.tsx
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "../../components/layout/layout";
import { IPost } from "../../types/post";
import { getAllPosts } from "../../lib/mdxUtils";
import Footer from "../../components/layout/footer";
import WorksTeaser from "../../components/homePage/worksTeaser";
import LanguageShowCase from "../../components/homePage/languageShowCase";
import EmailMe from "../../components/homePage/emailMe";
import Hero from "../../components/homePage/hero";
import LanguageStrings, { langType } from "../../lib/lang";
import BlogsTeaser from "../../components/homePage/blogTeaser";
import MoonIcon from "../components/icons/moon-outline.svg";
import SunIcon from "../components/icons/sun-outline.svg";
import { formatDistance } from "date-fns";
import { useTheme } from "../../hooks/useTheme";
import { BlogNav } from "../../components/blog/blogNav";

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
  const [isDark, toggleTheme] = useTheme();

  return (
    <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-500">
      <div style={{ width: "100%", height: "100vh" }}>
        <BlogNav />
        <div className=" max-w-screen-xl mx-auto h-full py-8 ">
          <div className="flex   flex-col  relative  h-full w-full justify-between  ">
            <div className="flex h-full w-full items-center ">
              <div className="flex flex-col  mt-20 w-full items-center ">
                <h1 className="text-6xl text-gray-900 font-bold dark:text-gray-400 text-right w-full">
                  {hero.title.intro}{" "}
                  <span className="dark:text-green-300 text-green-600">
                    {hero.title.name.split(" ")[0]}
                  </span>
                  <span className=" text-8xl  mb-4 inline-block transform  avatar ">
                    👨🏾‍💻
                  </span>
                  <br /> {hero.title.thirdIntro} {hero.title.title2}
                </h1>
              </div>
            </div>

            <div className="flex text-gray-600 text-xl gap-4 justify-between w-full  flex-row mt-10">
              <div className="flex justify-end">
                <a
                  href={socialMedia.linkedIn}
                  target="_blank"
                  className=" mr-4  "
                >
                  LinkedIn
                </a>
                <a
                  href={socialMedia.twitter}
                  target="_blank"
                  className=" mr-4 "
                >
                  Twitter
                </a>
                <a
                  href={socialMedia.github}
                  target="_blank"
                  className=" mr-4 text-2xl text-black dark:text-gray-400 "
                >
                  Github
                </a>
                <a
                  target="_blank"
                  href={socialMedia.instagram}
                  className=" mr-4 "
                >
                  Instagram
                </a>
                {/* <div className=" mr-4 text-2xl text-black dark:text-gray-400">
                  Dev.to
                </div> */}
              </div>
              <div>
                <p className="text-2xl text-gray-800 dark:text-gray-400">
                  {blog.title}
                  <span className=" ml-4 inline-block ">&rarr;</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
