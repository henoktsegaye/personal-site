import Link from "next/link";
import { IPost } from "../../types/post";
import Thumbnail from "../basic/thumbnail";

type props = {
  posts: IPost[];
  strings: {
    title: string;
    description: string;
  };
};

const BlogsTeaser: React.FC<props> = ({ posts, strings }) => {
  const { title, description } = strings;
  return (
    <div className=" mx-auto bg-gray-50 dark:bg-gray-900 dark:bg-opacity-75 " id="blogTeaser">
      <div className="2xl:max-w-screen-xl max-w-sm xl:max-w-screen-lg lg:max-w-screen-md mx-auto pt-6 pb-10">
        <div className="text-left mb-12 mt-6  ">

        </div>

        <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-8 2xl:gap-12">
          {posts.map((post) => (
            <div
              key={post.slug}
              className={`rounded-xl dark:border-gray-900 border-gray-200 overflow-hidden `}
            >
              <div className="content">

                <div className="mb-4 bg-blue-100 rounded-xl dark:bg-blue-900">
                  <Thumbnail
                    slug={post.slug}
                    title={post.title}
                    src={post.thumbnail}
                  />
                </div>
                <h2 className="text-xl font-bold line-clamp-2 mb-4 text-black dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <Link href={`/blogs/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
                <p className="dark:text-gray-300 text-gray-600 mb-4 text-sm">
                  {post.date}
                  <span className="text-right py-1 text-gray-600 px-4 mx-2 text-sm dark:bg-gray-900 dark:text-gray-300 bg-gray-50 rounded-xl">
                    {post.hashtag}
                  </span>
                </p>
                <div className="text-gray-900 dark:text-gray-400 mb-3">
                  {post.description}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogsTeaser;
