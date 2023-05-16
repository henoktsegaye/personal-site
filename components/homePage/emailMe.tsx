import Link from "next/link";
import { getConnected } from "../../lib/lang";

type props = {
  strings: getConnected;
};

const EmailMe: React.FC<props> = ({ strings }) => {
  const { title, subtitle, link } = strings;
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg max-w-sm lg:max-w-screen-md mx-2  md:mx-auto my-10" id="emailMe">
      <div className="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-25 rounded-xl py-6 px-10 shadow-sm  dark:border-gray-800 border-gray-200">
        <p className="text-3xl dark:text-white text-black font-bold">
          {title}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-2 mb-0">{subtitle}</p>
        <a href={link.href} >
        <button className="bg-blue-600 py-3 px-6 rounded mt-8 text-white">
            {link.text}
          </button>
        </a>
      </div>
    </div>
  );
};
export default EmailMe;
