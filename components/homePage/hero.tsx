const Hero: React.FC = () => {
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto my-12 mb-24">
      <div className=" grid lg:grid-cols-6 grid-cols-3 items-center">
        <div className="col-span-3 text-left">
          <h1 className="text-3xl leading-normal align-middle font-semibold text-gray-600 dark:text-gray-400">
            <span>Hi I am</span>
            <span className="font-extrabold text-blue-500 text-6xl block mb-2">
              Henok Tsegaye.
            </span>
            I am a
            <span className="font-bold block dark:text-gray-200 text-gray-600 text-6xl">
              technologies
            </span>
            <span className=" mt-6">and mainly a </span>
            <span className=" block text-gray-600 dark:text-gray-200 font-bold text-4xl">
              software Developer.
            </span>
          </h1>
          <div className="text-gray-500 mt-10 text-lg"> some notification</div>
        </div>
        <div className="col-span-3">
          <p className="dark:text-gray-200 text-gray-800 font-bold text-3xl mb-3">
            {" "}
            I CARE!
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row flex-wrap mt-6">
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              facebook
            </a>
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              Twitter
            </a>
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              github
            </a>
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              pinterest
            </a>
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              instagram
            </a>
            <a
              href="#!"
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              linkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
