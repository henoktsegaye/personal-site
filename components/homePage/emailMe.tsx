import Link from "next/link";
import { getConnected } from "../../lib/lang";

type props = {
  strings: getConnected;
};

const EmailMe: React.FC<props> = ({ strings }) => {
  const { title, subtitle, link } = strings;
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg max-w-screen-sm lg:max-w-screen-md mx-2  md:mx-auto my-20" id="emailMe">
      <div className="bg-white dark:bg-blue-700 rounded-xl py-6 px-10 shadow-sm border dark:border-black border-gray-200">
        <p className="text-3xl dark:text-white text-gray-600 font-bold">
          {title}
        </p>
        <p className="text-gray-500 dark:text-gray-300 mt-4 mb-2">{subtitle}</p>
        <Link href={link.href} passHref={true}>
          <button className="bg-blue-600 dark:bg-black text-white px-6 py-4 rounded-lg mt-6">
            {link.text}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default EmailMe;
