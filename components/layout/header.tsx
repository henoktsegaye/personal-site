// components/Header.tsx
import { useEffect, useState } from "react";
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
  locale: "am" | "en";
};

const localOpposite = {
  am: "en",
  en: "am",
};

const displayString = {
  am: "en",
  en: "አማ",
};

const Header: React.FC<props> = ({ strings, changeTheme, theme, locale }) => {
  const [ztheme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    const xtheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";
    if (xtheme == "dark") {
      changeTheme();
    }
  }, []);
  useEffect(() => {
    const xtheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";
    if (xtheme == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [theme]);
  return (
    <header className="pt-4 pb-4  bg-gray-100 lg:bg-white border-b border-gray-100 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg max-w-sm lg:max-w-screen-md ">
        <div className="grid grid-cols-7">
          <div className="flex flex-row justify-between items-center 2xl:col-span-4 xl:col-span-3  col-span-3 lg:col-span-2 ">
            <Link href="/">
              <a className="text-xl font-bold  dark:text-gray-400 text-gray-500 ">
                {" "}
                {strings.siteTitle}{" "}
              </a>
            </Link>
          </div>
          <div className=" flex-row 2xl:pl-6 justify-between hidden items-center 2xl:col-span-3 xl:col-span-4 lg:col-span-5 lg:flex">
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
              <Link locale={localOpposite[locale]} href="">
                <span className="ml-4 mr-2 dark:text-gray-400 text-gray-500 text-lg cursor-pointer">
                  {displayString[locale]}
                </span>
              </Link>
              <button
                className="ml-3 align-bottom outline-none focus:outline-none hover:bg-opacity-50 bg-gray-100 dark:bg-gray-900 p-2 rounded-full"
                onClick={changeTheme}
              >
                {ztheme ? (
                  <MoonIcon
                    width={24}
                    height={24}
                    className="fill-current text-gray-600 dark:text-gray-300"
                  />
                ) : (
                  <SunIcon
                    width={24}
                    height={24}
                    className="fill-current text-gray-600 dark:text-gray-300"
                  />
                )}
              </button>
            </div>
          </div>
          <div className="flex lg:hidden col-span-4">
          <div className="flex justify-center items-center">
              <Link href="#emailMe">
                <a className="text-lg bg-blue-600 dark:bg-blue-700 px-4 py-2 rounded-lg text-gray-200">
                  {" "}
                  {strings.emailMe}{" "}
                </a>
              </Link>
              <Link locale={localOpposite[locale]} href="">
                <span className="ml-4 mr-2 dark:text-gray-400 text-gray-500 text-lg cursor-pointer">
                  {displayString[locale]}
                </span>
              </Link>
              <button
                className="ml-3 align-bottom outline-none focus:outline-none hover:bg-opacity-50 bg-gray-100 dark:bg-gray-900 p-2 rounded-full"
                onClick={changeTheme}
              >
                {ztheme ? (
                  <MoonIcon
                    width={24}
                    height={24}
                    className="fill-current text-gray-600 dark:text-gray-300"
                  />
                ) : (
                  <SunIcon
                    width={24}
                    height={24}
                    className="fill-current text-gray-600 dark:text-gray-300"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
