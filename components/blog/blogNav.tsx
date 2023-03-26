import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";
import { Text } from "../basic/genial/text";
import MoonIcon from "../icons/moon-outline.svg";
import SunIcon from "../icons/sun-outline.svg";

interface BlogNavProps {}
const BlogNav = ({}: BlogNavProps) => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="  bg-text-gray-500 dark:text-gray-100 ">
      <div
        className=" fixed   backdrop-blur-lg rounded drop-shadow-lg  z-50  border-gray-200 dark:border-gray-800  bg-opacity-60 dark:bg-opacity-40  w-full "
        style={{
          backdropFilter: "blur(23px)",
        }}
      >
        <div className=" max-w-screen-xl 2xl:max-w-screen-xl lg:px-0 px-3 py-3 justify-between flex flex-row mx-auto w-full">
          <div className="grid grid-cols-4 items-center gap-8 ">
            <Link href="/">
              <img src="/assets/logo1.png" className=" rounded h-12 mt-2" />
            </Link>
          </div>
          <div className="flex gap-10  items-center">
            <button
              className=" rounded  align-bottom outline-none focus:outline-none hover:bg-opacity-50   p-2 "
              onClick={toggleTheme}
            >
              {isDark ? (
                <MoonIcon
                  width={24}
                  height={24}
                  className="fill-current text-black dark:text-white"
                />
              ) : (
                <SunIcon
                  width={24}
                  height={24}
                  className="fill-current text-black dark:text-white"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogNav };
