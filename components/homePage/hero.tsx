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
    <div className="2xl:max-w-screen-xl hero rounded-2xl bg-gray-50 dark:bg-black xl:max-w-screen-lg lg:max-w-screen-md max-w-sm mx-auto pt-2 pb-4 my-6 px-2 ">
      <div className=" grid xl:grid-cols-6  grid-cols-3 items-center justify-between ">
       
        <div className="col-span-3  text-left py-4 pl-4">
          <h1 className=" leading-normal font-normal align-middle  text-black dark:text-gray-600">
            <span className="text-5xl mb-8 block" > {title?.intro} </span>
            <span className=" text-4xl uppercase text-blue-600 font-extrabold block mb-8 mt-0 pb-1 pt-0">
              {title?.name}
            </span>
            <div className="mt-2 text-4xl block ">
              {title?.secondIntro} <span className="font-bold  dark:text-white uppercase text-3xl">
                {title?.title1}
              </span>
            </div>
            <span className="text-4xl mt-8 mb-2 inline-block"> {title?.thirdIntro} </span>
            <span className="  block mt-2  t uppercase dark:text-white font-bold text-3xl">
              {title?.title2}
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-600 capitalize lg:mt-4 mt-1 text-xs">
            {hero?.moreText}
          </p>
          <p className="text-gray-600 dark:text-gray-400 capitalize mt-2 text-sm"> 
          {hero?.subTitle}
          </p>
        </div>
        <div className="col-span-6 xl:col-span-3 ">
          <div className=" px-4">
            <img
              src="/assets/hiwa.png"
              className=" left-0  filter myimg object-cover drop-shadow-2xl  backdrop-saturate-150 brightness-110 contrast-150  grayscale blur-sm text-left justify-items-start "
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default Hero;
