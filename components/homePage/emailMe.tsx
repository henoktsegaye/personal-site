import Link from "next/link";
import { getConnected } from "../../lib/lang";

type props = {
  strings: getConnected;
};

const EmailMe: React.FC<props> = ({ strings }) => {
  const { title, subtitle, link } = strings;
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg max-w-sm lg:max-w-screen-md mx-2  md:mx-auto my-20" id="emailMe">
      <div className="bg-blue-50 dark:bg-black rounded-xl py-6 px-10 shadow-sm border dark:border-gray-800 border-gray-200">
        <p className="text-3xl dark:text-white text-black font-bold">
          {title}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4 mb-2">{subtitle}</p>
        <a href={link.href} >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg mt-6">
            {link.text}
          </button>
        </a>
      </div>
    </div>
  );
};
export default EmailMe;
