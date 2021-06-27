import Image from "next/image";

type props = {
  title: string;
  content: string;
  a: {
    link: string;
    target: string;
    text: string;
  };
};

const MiddleContent: React.FC<props> = () => {
  return (
    <div className="2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-md max-w-screen-sm mx-auto my-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center py-10 ">
        <div className="order-2 lg:order-1">
          <div className="text-4xl font-bold mb-10 text-gray-600 dark:text-gray-100 ">
            How i get started
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-blue-600 py-4 px-6 rounded-lg mt-8 text-white">
            Get started &rarr;
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/assets/pic-3.png"
            alt={`Cover Image `}
            width={1280}
            height={720}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
export default MiddleContent;
