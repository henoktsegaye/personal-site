import Link from "next/link";
import { IPost } from "../../types/post";
import Thumbnail from "../basic/thumbnail";
type props = {
  works: IPost[];
  strings: {
    title: string;
    description: string;
    more: string;
  };
};

const WorksTeaser: React.FC<props> = ({ works, strings }) => {
  return (
    <div className=" mx-auto dark:bg-black bg-white " id="workTeaser">
      <div className="2xl:max-w-screen-xl max-w-sm xl:max-w-screen-lg lg:max-w-screen-md mx-auto pt-6 pb-10">
        <div className="text-left mb-12">
          <h1 className="dark:text-gray-100 text-gray-900 font-bold text-4xl">
            {strings?.title}
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-200 mt-2">
            {strings?.description}
          </p>
        </div>
        <div className="from-blue-700 to-gray-50 dark:from-blue-700 dark-to-gray-900"></div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {works.map((post) => (
            <div
              key={post.slug}
              className={`rounded-xl border  border-gray-200 dark:bg-gray-900 dark:border-gray-900 my-1  py-1 overflow-hidden `}
            >
              <div className="content">



                <div className="pb-1 pt-3 px-6">

                  <h2 className="text-xl font-bold mb-2 line-clamp-1 text-black dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                    <Link href={`/works/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h2>

                  <div className="dark:text-gray-300  text-gray-700 mb-1 ">

                    {post.tech
                      ? post?.tech.slice(0, 3).map((t) => (
                        <span className="text-gray-500 dark:text-gray-400 inline-block dark:bg-gray-900  text-base py-1 rounded-xl mr-2  ">
                          {t}
                        </span>
                      ))
                      : null}
                  </div>
                  <p className="dark:text-gray-200 h-16 text-gray-900 my-4">
                    {post.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-2" >
                    {post.date} | {post?.type}
                  </p>



                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorksTeaser;
