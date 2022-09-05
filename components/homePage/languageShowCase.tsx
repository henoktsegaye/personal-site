import { FC } from "react";
import { string } from "prop-types";
import ReactIcon from "../icons/react.svg";
import JavascriptIcon from "../icons/javascript.svg";
import NodejsIcon from "../icons/nodejs.svg";
import NextjsIcon from "../icons/nextjs.svg";
import MongoIcon from "../icons/mongodb.svg";
import WordpressIcon from "../icons/wordpress.svg";

type props = {
  title?: string;
  subTitle?: string;
};

const LanguageShowCase: FC<props> = ({ title, subTitle }) => {
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg max-w-screen-xl my-4 mx-auto mb-20">
      <h2 className="text-left text-3xl dark:text-white text-black w-full mb-5 ml-3 ">
        {title}
      </h2>
      <div className="flex flex-row  justify-start flex-nowrap overflow-x-auto  ">
        <div className="w-30 dark:bg-blue-900 dark:text-white mx-2 relative bg-blue-50 p-4 justify-center items-center flex rounded-xl">
          <ReactIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-black dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >

          React JS
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            💪
          </span>
        </div>
        <div className="w-30 relative mx-2 dark:text-white bg-gray-100 dark:bg-gray-900 p-4 justify-center items-center flex rounded-xl">
          {" "}
          <NextjsIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >

          Next JS
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            👍
          </span>
        </div>
        <div className="w-30 mx-2 bg-yellow-100 dark:bg-yellow-900 dark:text-white p-4 relative justify-center items-center flex rounded-xl">
          <JavascriptIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-black dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >

          Javascript
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            😎
          </span>
        </div>
        <div className="w-30 mx-2 bg-green-100 dark:bg-green-900 dark:text-white p-4 relative justify-center items-center flex rounded-xl">
          {" "}
          <NodejsIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-black dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >

          Node JS
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            😎
          </span>
        </div>
        <div className="w-30 mx-2 bg-green-100 dark:bg-green-900 dark:text-white p-4 relative justify-center items-center flex rounded-xl">
          <MongoIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-black dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >

          MongoDB
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            👍
          </span>
        </div>
        <div className="w-30 mx-2 bg-gray-100 p-4 relative dark:bg-gray-100 dark:text-black justify-center items-center flex rounded-xl">
          {" "}
          <WordpressIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />
          <p className="whitespace-nowrap" >
          Wordpress
          </p>
          <span className="absolute bottom-2   left-2 text-xl z-10">
            😎
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageShowCase;
