// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import MoonIcon from "../icons/moon-outline.svg";
import SunIcon from "../icons/sun-outline.svg";
import { SITE_NAME } from "../../lib/constants";
import { siteStrings } from "../../lib/lang";

type props = {
  strings: siteStrings;
  changeTheme: () => void;
  theme: boolean;
};


const Header: React.FC<props> = ({ strings, changeTheme, theme }) => {
  console.log('the theme is >>>', theme);
  return (
    <header className="pt-4 pb-4  bg-white border-b border-gray-100 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm ">
        <div className="grid grid-cols-7">
          <div className="flex flex-row justify-between items-center 2xl:col-span-4 xl:col-span-3  lg:col-span-2 ">
            <Link href="/">
              <a className="text-xl font-bold  dark:text-gray-400 text-gray-500 ">
                {" "}
                {strings.siteTitle}{" "}
              </a>
            </Link>
          </div>
          <div className=" flex-row 2xl:pl-12 justify-between hidden items-center 2xl:col-span-3 xl:col-span-4 lg:col-span-5 lg:flex">
            <Link href="#workTeaser">
              <a className="text-lg  dark:text-gray-400 text-gray-500 ">
                {" "}
                {strings.work}{" "}
              </a>
            </Link>{" "}
            <Link href="#middleContent">
              <a className="text-lg  dark:text-gray-400 text-gray-500 ">
                {strings.middleContent}
              </a>
            </Link>
            <Link href="#blogTeaser">
              <a className="text-lg  dark:text-gray-400 text-gray-500 ">
                {" "}
                {strings.blog}{" "}
              </a>
            </Link>{" "}
            <div className="flex justify-center items-center">
              <Link href="#emailMe">
                <a className="text-lg bg-blue-600 dark:bg-blue-700 px-4 py-2 rounded-lg text-gray-200">
                  {" "}
                  {strings.emailMe}{" "}
                </a>
              </Link>
              <button className="ml-3 align-bottom outline-none focus:outline-none hover:bg-opacity-50 bg-gray-100 dark:bg-gray-900 p-2 rounded-full" onClick={changeTheme}>
                {theme?
                  <MoonIcon width={24} height={24} className="fill-current text-gray-600 dark:text-gray-300" />:
                  <SunIcon width={24} height={24} className="fill-current text-gray-600 dark:text-gray-300" /> }
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
