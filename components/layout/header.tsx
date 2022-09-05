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
  slug?: string;
};

const localOpposite = {
  am: "en",
  en: "am",
};

const displayString = {
  am: "en",
  en: "አማ",
};

const Header: React.FC<props> = ({
  strings,
  changeTheme,
  theme,
  locale,
  slug = false,
}) => {
  const [ztheme, setTheme] = useState<boolean>(false);
  useEffect(() => {
    const xtheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark";
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
      document.body.classList.add('bg-black')
      localStorage.setItem("theme", "dark");
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [theme]);
  return (
    <header className="pt-4 pb-4 py-2 bg-white  dark:border-black dark:bg-black">
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg max-w-sm lg:max-w-screen-md ">
        <div className="grid grid-cols-7">
          <div className="flex flex-row justify-between items-center 2xl:col-span-4 xl:col-span-3  col-span-3 lg:col-span-2 ">
            <Link href="/">
              <a className="text-xl font-bold  dark:text-gray-400 text-gray-500 ">
                <img src="/assets/name.png" className="h-10" alt={strings.siteTitle} />
              </a>
            </Link>
          </div>
          <div className=" flex-row 2xl:pl-6 justify-between hidden items-center 2xl:col-span-3 2xl:ml-32 xl:ml-40 xl:col-span-4 lg:col-span-5 lg:flex">
            <Link href="/#workTeaser">
              <a className="text-lg dark:text-gray-400 text-gray-500 ">
                {strings.work}
              </a>
            </Link>
            <Link href="/blogs">
              <a className={`text-lg ${slug === "/blogs" ? "text-black dark:text-white" : " dark:text-gray-400 text-gray-500 "} `}>
                {strings.blog}
              </a>
            </Link>
            <div className="flex justify-between items-center w-7/12 px-2">
              <Link href="/#emailMe">
                <a className="text-lg  px-0  rounded-lg dark:text-gray-400 text-gray-500">
                  {strings.emailMe}
                </a>
              </Link>
              <Link locale={localOpposite[locale]} href={`${slug || ""}`}>
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
          <div className="flex lg:hidden col-span-4 relative">
            <div className="flex justify-end w-full items-center">
              <Link href="/blogs">
                <a className={`text-lg ${slug === "/blogs" ? "text-black dark:text-white" : " dark:text-gray-400 text-gray-500 "} `}>
                  {strings.blog}
                </a>
              </Link>
              <Link locale={localOpposite[locale]} href={`${slug || ""}`}>
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
