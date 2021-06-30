import Link from "next/link";
import { IPost } from "../../types/post";
import Thumbnail from "../basic/thumbnail";
type props = {
  works: IPost[];
  strings: {
    title: string;
    description: string;
  };
};

const WorksTeaser: React.FC<props> = ({ works, strings }) => {
  return (
    <div className=" mx-auto dark:bg-blue-800 bg-blue-600 " id="workTeaser">
      <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto pt-6 pb-10">
        <div className="text-left mb-12">
          <h1 className="dark:text-gray-100 text-gray-100 font-bold text-3xl">
            {strings?.title}
          </h1>

          <p className="text-md text-gray-200 mt-2">{strings?.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-0">
          {works.map((post) => (
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
                  <Link href={`/works/${post.slug}`}>
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
  );
};
export default WorksTeaser;
