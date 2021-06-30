import { footer } from "../../lib/lang";

type props = {
  footer: footer;
};

const Footer: React.FC<props> = ({ footer }) => {
  const { title } = footer;
  return (
    <div className="bg-white border-t border-gray-100 dark:border-gray-900 dark:bg-black ">
      <div className=" 2xl:max-w-screen-xl xl:max-w-screen-lg max-w-sm lg:max-w-screen-md py-10 mx-auto ">
        <p className="text-left text-gray-600 dark:text-gray-300">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Footer;
