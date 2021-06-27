// components/Header.tsx
import Link from "next/link";

import { SITE_NAME } from "../../lib/constants";

const Header: React.FC = () => {
  return (
    <header className="pt-4 pb-6  bg-white border-b border-gray-100 dark:border-gray-900 dark:bg-black">
      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm ">
        <div className="grid grid-cols-7">
          <div className="flex flex-row justify-between col-span-6 ">
            <Link href="/">
              <a className="text-lg  text-gray-400"> Blog </a>
            </Link>
          </div>
          <div className=" flex-row justify-between hidden lg:flex">
            <Link href="/">
              <a className="text-lg  text-gray-400"> Blog </a>
            </Link>{" "}
            <Link href="/">
              <a className="text-lg  text-gray-400"> Blog </a>
            </Link>{" "}
            <Link href="/">
              <a className="text-lg  text-gray-400"> Blog </a>
            </Link>
            <Link href="/">
              <a className="text-lg  text-gray-400"> Blog </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
