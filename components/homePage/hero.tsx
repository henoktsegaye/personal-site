import { heroTitle, socialMedia } from "../../lib/lang";
import TwitterIcon from "../icons/twitter.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import GithubIcon from "../icons/github.svg";

type props = {
  hero: {
    title: heroTitle;
    subTitle: string;
    secondRowTitle: string;
    moreText: string[];
  };
  socialMedia: socialMedia;
};

const Hero: React.FC<props> = ({ hero, socialMedia }) => {
  const { title, subTitle, secondRowTitle, moreText } = hero;
  return (
    <div className="2xl:max-w-screen-xl  xl:max-w-screen-lg lg:max-w-screen-md max-w-sm mx-auto my-12 mb-24">
      <div className=" grid xl:grid-cols-6  grid-cols-3 items-end">
        <div className="col-span-3">
          <div className="mr-12 px-4 ">
            <img
              src="/assets/renew.png"
              className=" left-0 filter drop-shadow-2xl brightness-100 saturation-100 grayscale contrast-150 text-left justify-items-start "
              alt=""
            />
          </div>
        </div>
        <div className="col-span-3  text-left pb-4">
          <h1 className="text-3xl leading-normal align-middle font-semibold text-gray-600 dark:text-gray-400">
            <span> {title?.intro} </span>
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-600 dark:via-red-500 from-blue-600 via-red-500 to-yellow-600 dark:to-yellow-600  text-6xl block mb-1 py-2">
              {title?.name}
            </span>
            {title?.secondIntro}
            <span className="font-bold block dark:text-gray-200 text-gray-500 text-6xl">
              {title?.title1}
            </span>
            <span className=" mt-4 inline-block"> {title?.thirdIntro} </span>
            <span className=" block mt-2  text-gray-600 dark:text-gray-200 font-bold text-4xl">
              {title?.title2}
            </span>
          </h1>
          <p className="text-gray-500 lg:mt-4 mt-2 text-md">
            {hero?.subTitle}{" "}
          </p>
        </div>

        <div className="col-span-6 mt-10   bg-gradient-to-r from-blue-50 dark:from-gray-900 dark:to-black to-white border-1 border-gray-200 shadow-2xl drop-shadow-2xl dark:border-gray-900 py-6 px-6 rounded-xl lg:mt-0">
          <p className="dark:text-gray-200 text-gray-800 capitalize font-bolder text-4xl mb-3">
            {secondRowTitle}
          </p>
          {moreText.map((content) => (
            <p className="text-gray-600 font-light dark:text-gray-400 text-lg mb-3">
              {content}
            </p>
          ))}

          <div className="flex flex-row  flex-wrap mt-6">
            <a
              href={socialMedia.github}
              className="dark:text-gray-200 flex align-middle items-center  text-xs bg-gray-200  dark:bg-black rounded-lg px-4 py-2  text-gray-600 font-bold mr-4   "
            >
              {" "}
              <GithubIcon
                width={16}
                height={16}
                className="fill-current  mr-2 text-gray-600 dark:text-gray-100"
              />
              github
            </a>
            <a
              href={socialMedia.twitter}
              className="dark:text-gray-200 flex align-middle items-center  text-xs bg-gray-200  dark:bg-black rounded-lg px-4 py-2  text-gray-600 font-bold mr-4  "
            >
              <TwitterIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-gray-600 dark:text-gray-300"
              />
              twitter
            </a>
            <a
              href={socialMedia.linkedIn}
              className="dark:text-gray-200 flex align-middle items-center  text-xs bg-gray-200  dark:bg-black rounded-lg px-4 py-2  text-gray-600 font-bold mr-4  "
            >
              <LinkedInIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-gray-600 dark:text-gray-300"
              />
              linkedIn
            </a>

            <a
              href={socialMedia.instagram}
              className="dark:text-gray-200 flex align-middle items-center  text-xs bg-gray-200  dark:bg-black rounded-lg px-4 py-2  text-gray-600 font-bold mr-4  "
            >
              <InstagramIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-gray-600 dark:text-gray-300"
              />
              instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
