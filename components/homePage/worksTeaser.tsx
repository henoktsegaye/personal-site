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
          <h1 className="dark:text-gray-100 text-blue-900 font-normal text-6xl">
            {strings?.title}
          </h1>

          <p className="text-md text-gray-400 dark:text-gray-200 mt-2">
            {strings?.description}
          </p>
        </div>
        <div className="from-blue-700 to-gray-50 dark:from-blue-700 dark-to-gray-900"></div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
          {works.map((post) => (
            <div
              key={post.slug}
              className={`rounded-xl border border-gray-100 dark:border-gray-900 my-2 p-4 bg-gradient-to-t ${
                post.color ? post.color : "dark:from-blue-700 from-blue-200"
              } dark:to-gray-900 to-gray-50 overflow-hidden `}
            >
              <div className="content">
                <h2 className="text-2xl font-normal mb-4 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <Link href={`/works/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
                <p className="dark:text-gray-300 text-gray-600 mb-4 text-md">
                  {post.date}
                </p>

                <div className="dark:text-gray-200 text-gray-600 mb-3">
                  {post.description}
                </div>
                <div className="mb-4 bg-blue-100 rounded-xl dark:bg-blue-900">
                  <Thumbnail
                    slug={post.slug}
                    title={post.title}
                    src={post.thumbnail}
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <Link href={`/works/${post.slug}`}>
                    <a
                      href=""
                      className="my-4 text-center relative w-full bg-black py-3 px-8 text-white rounded-lg"
                    >
                      {strings?.more}
                    </a>
                  </Link>
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
