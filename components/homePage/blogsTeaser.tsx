import Link from "next/link";
import { IPost } from "../../types/post";
import Thumbnail from "../basic/thumbnail";
import StarOutline from "../icons/star-outline.svg";
import HeartOutline from "../icons/heart-outline.svg";
import BulbOutline from "../icons/bulb-outline.svg";

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
    <div className=" mx-auto bg-blue-50 dark:bg-gray-900 " id="blogTeaser">
      <div className="2xl:max-w-screen-xl max-w-sm xl:max-w-screen-lg lg:max-w-screen-md mx-auto pt-6 pb-10">
        <div className="text-left mb-12 mt-6  ">
          <h1 className="dark:text-gray-50 text-gray-900 font-bold text-3xl">
            {title}
          </h1>

          <p className="text-md text-gray-500 dark:text-gray-400 mt-2">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {posts.map((post) => (
            <div
              key={post.slug}
              className={`rounded-xl bg-white dark:bg-black  py-4 px-4 border dark:border-gray-900 border-gray-200 overflow-hidden `}
            >
              <div className="content">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <Link href={`/posts/${post.slug}`}>
                    <a>{post.title} &rarr;</a>
                  </Link>
                </h2>
                <div className="mb-4 bg-blue-100 rounded-xl dark:bg-blue-900">
                  <Thumbnail
                    slug={post.slug}
                    title={post.title}
                    src={post.thumbnail}
                  />
                </div>
                <p className="dark:text-gray-300 text-gray-400 mb-4 text-md">
                  {post.date}
                  <span className="text-right py-1 text-white px-4 mx-2 bg-blue-700 rounded-xl">
                    #{post.hashtag}
                  </span>
                </p>
                <div className="text-gray-600 dark:text-gray-400 mb-3">
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
