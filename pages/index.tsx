// pages/index.tsx
import { useEffect } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/layout";
import Thumbnail from "../components/thumbnail";
import { IPost } from "../types/post";
import { SITE_NAME } from "../lib/constants";
import { getAllPosts } from "../lib/mdxUtils";
import styles from "../styles/Home.module.css";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
};

const Home: React.FC<Props> = ({ files }: Props) => {
  const { posts, works } = files;
  useEffect(() => {
    // document.documentElement.classList.add("dark");
  }, []);

  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <div className="">
        <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto my-12 mb-24">
          <div className=" grid lg:grid-cols-6 grid-cols-3 items-center">
            <div className="col-span-3 text-left">
              <h1 className="text-3xl leading-normal align-middle font-semibold text-gray-600 dark:text-gray-400">
                <span>Hi I am</span>
                <span className="font-extrabold text-blue-500 text-6xl block mb-2">
                  Henok Tsegaye.
                </span>
                I am a
                <span className="font-bold block dark:text-gray-200 text-gray-600 text-6xl">
                  technologies
                </span>
                <span className=" mt-6">and mainly a </span>
                <span className=" block text-gray-600 dark:text-gray-200 font-bold text-4xl">
                  software Developer.
                </span>
              </h1>
              <div className="text-gray-500 mt-10 text-lg">
                {" "}
                some notification
              </div>
            </div>
            <div className="col-span-3">
              <p className="dark:text-gray-400 text-gray-00 font-bold text-3xl mb-3">
                {" "}
                I CARE!
              </p>
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="text-gray-600 mt-2 text-lg">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <div className="flex flex-row flex-wrap mt-6">
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  facebook
                </a>
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  Twitter
                </a>
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  github
                </a>
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  pinterest
                </a>
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  instagram
                </a>
                <a
                  href="#!"
                  className="dark:text-gray-400 text-gray-600 font-bold mr-4  "
                >
                  linkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto dark:bg-blue-800 bg-blue-600 ">
          <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto pt-6 pb-10">
            <div className="text-left mb-12">
              <h1 className="dark:text-gray-100 text-gray-100 font-bold text-3xl">
                {" "}
                Some Thoughts{" "}
              </h1>
              <span className=" float-right dark:text-gray-100 text-gray-100 text-xl ">
                Go there &rarr;
              </span>
              <p className="text-md text-gray-200 mt-2">
                man endehone aytenal wogun, leza min gize
              </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className={`rounded-xl m-2 p-2 overflow-hidden `}
                >
                  <div className="mb-4">
                    <Thumbnail
                      slug={post.slug}
                      title={post.title}
                      src={post.thumbnail}
                    />
                  </div>

                  <div className="content">
                    <h2 className="text-2xl font-bold mb-4 text-gray-200 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <Link href={`/posts/${post.slug}`}>
                        <a>{post.title} &rarr;</a>
                      </Link>
                    </h2>
                    <p className="dark:text-gray-300 text-gray-200 mb-4 text-md">
                      {" "}
                      {post.date}{" "}
                    </p>
                    <div className="text-gray-200 mb-3">{post.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto my-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-10 ">
            <div className="order-2 lg:order-1">
              <div className="text-4xl font-bold mb-10 text-gray-600 dark:text-gray-100 ">
                How i get started
              </div>
              <p className="text-lg text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="bg-blue-600 py-4 px-6 rounded-lg mt-8 text-white">
                Get started &rarr;
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/assets/pic-3.png"
                alt={`Cover Image `}
                width={1280}
                height={720}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className=" mx-auto bg-white dark:bg-black ">
          <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto pt-6 pb-10">
            <div className="text-left mb-12">
              <h1 className="dark:text-gray-100 text-gray-600 font-bold text-3xl">
                {" "}
                Some Thoughts{" "}
              </h1>

              <p className="text-md text-gray-500 mt-2">
                man endehone aytenal wogun, leza min gize
              </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
              {works.map((post) => (
                <div
                  key={post.slug}
                  className={`rounded-xl m-2 p-2 border-2 dark:border-gray-900 border-gray-200 overflow-hidden `}
                >
                  <div className="mb-4">
                    <Thumbnail
                      slug={post.slug}
                      title={post.title}
                      src={post.thumbnail}
                    />
                  </div>

                  <div className="content">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                      <Link href={`/posts/${post.slug}`}>
                        <a>{post.title} &rarr;</a>
                      </Link>
                    </h2>
                    <p className="dark:text-gray-300 text-gray-500 mb-4 text-md">
                      {" "}
                      {post.date}{" "}
                    </p>
                    <div className="text-gray-600 mb-3">{post.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="2xl:max-w-screen-xl xl:max-w-screen-lg max-w-screen-sm lg:max-w-screen-md mx-2  md:mx-auto my-20">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-xl py-6 px-10 shadow-sm border dark:border-black border-gray-200">
            <p className="text-3xl dark:text-white text-gray-600 font-bold">
              lets get connected
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-4 mb-2">
              If you have something in mind you want to contact me with , you
              can just do that !
            </p>
            <button className="bg-white dark:bg-black dark:text-white px-6 py-4 rounded-lg mt-6">
              Send Me Email
            </button>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 ">
          <div className=" 2xl:max-w-screen-xl xl:max-w-screen-lg max-w-screen-sm lg:max-w-screen-md py-10 mx-auto ">
            <p className="text-left text-gray-600 dark:text-gray-300">
              Designed by Me with luv
            </p>
          </div>
        </div>
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
