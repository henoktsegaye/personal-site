// pages/index.tsx
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout";
import Thumbnail from "../components/basic/thumbnail";
import { IPost } from "../types/post";
import { SITE_NAME } from "../lib/constants";
import { getAllPosts } from "../lib/mdxUtils";
import styles from "../styles/Home.module.css";
import Footer from "../components/layout/footer";
import BlogsTeaser from "../components/homePage/blogsTeaser";
import WorksTeaser from "../components/homePage/worksTeaser";
import MiddleContent from "../components/basic/middleContent";
import EmailMe from "../components/homePage/emailMe";
import Hero from "../components/homePage/hero";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
};

const Home: React.FC<Props> = ({ files }: Props) => {
  const { posts, works } = files;
  useEffect(() => {
    //document.documentElement.classList.add("dark");
  }, []);

  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div className="">
        <Hero />
        <WorksTeaser works={works} />
        <MiddleContent />
        <BlogsTeaser posts={posts} />
        <EmailMe />

        <Footer />
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const files = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "title",
    "description",
  ]);

  return { props: { files } };
};
