// pages/posts/[slug].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Layout from "../../components/layout";
import Thumbnail from "../../components/thumbnail";
import { IPost } from "../../types/post";
import { SITE_URL } from "../../lib/constants";
import { getPost, getAllPosts } from "../../lib/mdxUtils";

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, "slug">;
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const ogImage = SITE_URL + frontMatter.thumbnail;

  return (
    <Layout pageTitle={frontMatter.title}>
      <Head>
        <meta
          name="description"
          content={frontMatter.description}
          key="description"
        />
        <meta
          property="og:description"
          content={frontMatter.description}
          key="ogDescription"
        />
        <meta property="og:image" content={ogImage} key="ogImage" />
      </Head>
      <div className="max-w-screen-lg mx-auto pb-20">
        <article className="prose prose-blue">
          <div className="mb-4">
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
          </div>

          <h1 className="text-gray-700 text-4xl font-bold mb-6 dark:text-gray-200">
            {frontMatter.title}
          </h1>

          <p className="font-bold text-gray-700 dark:text-gray-200v mb-10 ">
            yield: {frontMatter.yields}
          </p>

          <p className="text-gray-700 dark:text-gray-200">
            {frontMatter.description}
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, data } = getPost(params?.slug as string);

  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
