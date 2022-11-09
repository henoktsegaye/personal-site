import { footer, socialMedia } from "../../lib/lang";
import TwitterIcon from "../icons/twitter.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import GithubIcon from "../icons/github.svg";

type props = {
  footer: footer;
  smaller?: boolean;
  socialMedia: socialMedia;
};

const Footer: React.FC<props> = ({ socialMedia, footer, smaller = false }) => {
  const { title } = footer;
  return (
    <div className="bg-white border-t border-gray-100 dark:border-gray-900 dark:bg-black ">
      <div
        className={` ${!smaller ? "2xl:max-w-screen-xl" : "lg:max-w-screen-lg"
          } xl:max-w-screen-lg max-w-sm lg:max-w-screen-md py-10 mx-auto`}
      >
        <p className="text-left text-gray-600 dark:text-gray-300">{title}</p>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row">
            <a href={socialMedia.github}>
            <GithubIcon
            width={16}
            height={16}
            className="fill-current mr-6 text-black dark:text-gray-300"
          />
            </a>
            <a href={socialMedia.linkedIn}>
            <LinkedInIcon
            width={16}
            height={16}
            className="fill-current mr-6 text-black dark:text-gray-300"
          />
            </a>
            <a href={socialMedia.twitter}>
            <TwitterIcon
            width={16}
            height={16}
            className="fill-current mr-6 text-black dark:text-gray-300"
          /> 
            </a>
            <a href={socialMedia.instagram}>
            <InstagramIcon
            width={16}
            height={16}
            className="fill-current mr-6 text-black dark:text-gray-300"
          />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
