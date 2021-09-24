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
    <div className=" max-w-screen-xl my-4 mx-auto mb-20">
      <h2 className="text-left text-2xl dark:text-white text-gray-500 w-full mb-5 ml-3 ">
        {title}
      </h2>
      <div className="flex flex-row  justify-start flex-nowrap overflow-x-hidden  ">
        <div className="w-30 mx-2 relative bg-gradient-to-r from-blue-50 to-blue-100 p-4 justify-center items-center flex rounded-xl">
          <ReactIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />
          react js
          <span className="absolute bottom-2 left-2 text-xl z-10">
            💪
          </span>
        </div>
        <div className="w-30 relative mx-2 bg-gray-100 p-4 justify-center items-center flex rounded-xl">
          {" "}
          <NextjsIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />{" "}
          next js
          <span className="absolute bottom-2 left-2 text-xl z-10">
            👍
          </span>
        </div>
        <div className="w-30 mx-2 bg-yellow-100 p-4 relative justify-center items-center flex rounded-xl">
          {" "}
          <JavascriptIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />{" "}
          javascript{" "}
          <span className="absolute bottom-2 left-2 text-xl z-10">
            😎
          </span>
        </div>
        <div className="w-30 mx-2 bg-green-100 p-4 relative justify-center items-center flex rounded-xl">
          {" "}
          <NodejsIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />{" "}
          node js
          <span className="absolute bottom-2 left-2 text-xl z-10">
            😎
          </span>
        </div>
        <div className="w-30 mx-2 bg-green-100 p-4 relative justify-center items-center flex rounded-xl">
          {" "}
          <MongoIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />
          mongo
          <span className="absolute bottom-2 left-2 text-xl z-10">
            👍
          </span>
        </div>
        <div className="w-30 mx-2 bg-gray-100 p-4 relative justify-center items-center flex rounded-xl">
          {" "}
          <WordpressIcon
            width={46}
            height={46}
            className="fill-current mr-2 text-gray-600 dark:text-gray-300"
          />
          wordpress
          <span className="absolute bottom-2 left-2 text-xl z-10">
            😎
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageShowCase;
