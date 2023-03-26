import { footer, socialMedia } from "../../lib/lang";
import TwitterIcon from "../icons/twitter.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import GithubIcon from "../icons/github.svg";
import { Text } from "../basic/genial/text";

type props = {
  footer: footer;
  smaller?: boolean;
  socialMedia: socialMedia;
};

const Footer: React.FC<props> = ({ socialMedia, footer, smaller = false }) => {
  const { title } = footer;
  return (
    <div className=" border-t text-xl border-gray-100 dark:border-gray-800 ">
      <div
        className={` flex flex-row pt-8 pb-4 justify-between items-end max-w-screen-lg  2xl:max-w-screen-xl px-4 lg:px-0 mx-auto`}
      >
        <div className="" >
        
          <div className="flex flex-row justify-between mb-3">
            <div className="flex flex-row gap-7 ">
              <a href={socialMedia.github}>
                <GithubIcon
                  width={16}
                  height={16}
                  className="fill-current  text-black dark:text-gray-300"
                />
              </a>
              <a href={socialMedia.linkedIn}>
                <LinkedInIcon
                  width={16}
                  height={16}
                  className="fill-current  text-black dark:text-gray-300"
                />
              </a>
              <a href={socialMedia.twitter}>
                <TwitterIcon
                  width={16}
                  height={16}
                  className="fill-current text-black dark:text-gray-300"
                />
              </a>
              <a href={socialMedia.instagram}>
                <InstagramIcon
                  width={16}
                  height={16}
                  className="fill-current  text-black dark:text-gray-300"
                />
              </a>
            </div>
            
          </div>
          <div>
          <Text className="" > Hi, I am Henok Tsegaye, You can call me Henok <br /> I am a full stack software engineer.</Text>
        <Text className="" > ---</Text>
          <Text >
             Developed with Next.js and Tailwind CSS.
          </Text>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
