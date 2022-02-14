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
      <div className=" grid xl:grid-cols-6  grid-cols-3 items-end justify-between ">
       
        <div className="col-span-3  text-left pb-4 pl-4">
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
          <p className="text-gray-600 capitalize lg:mt-8 mt-1 text-sm">
            {hero?.subTitle}{" "}
          </p>
        </div>
        <div className="col-span-6 xl:col-span-3 ">
          <div className=" px-4 ">
            <img
              src="/assets/hiwa.png"
              className=" left-0 filter myimg object-cover drop-shadow-2xl  backdrop-saturate-150 brightness-110 contrast-150  grayscale blur-sm text-left justify-items-start "
              alt=""
            />
          </div>
        </div>

        <div className="col-span-6    rounded-xl bg-white  dark:bg-gray-900  dark:from-black dark:to-black to-white  drop-shadow-2xl dark:border-gray-800 py-8 pr-4  pl-4  lg:mt-0"  >
          <p className="dark:text-gray-200 text-black capitalize text-2xl  mt-2 mb-6">
            {secondRowTitle}
          </p>
          {moreText.map((content) => (
            <p className="text-gray-800  dark:text-gray-400 text-lg mb-3">
              {content}
            </p>
          ))}

          <div className="flex flex-row  flex-wrap mt-6">
           
            <a
              href={socialMedia.twitter}
              className="dark:text-gray-200 flex align-middle  items-center  text-lg rounded-lg pr-4 py-2 text-gray-600  mr-2  "
            >
              <TwitterIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-blue-600 "
              />
              twitter
            </a>
            <a
              href={socialMedia.linkedIn}
              className="dark:text-gray-200 flex align-middle items-center  text-lg  rounded-lg px-4 py-2  text-gray-600  mr-2  "
            >
              <LinkedInIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-blue-600 "
              />
              linkedIn
            </a>

            <a
              href={socialMedia.instagram}
              className="dark:text-gray-200 flex  align-middle items-center  text-lg rounded-lg px-4 py-2  text-gray-600  mr-2  "
            >
              <InstagramIcon
                width={16}
                height={16}
                className="fill-current mr-2 text-red-600 "
              />
              instagram
            </a>
            <a
              href={socialMedia.github}
              className="dark:text-gray-200   flex align-middle items-center  text-lg  rounded-lg px-4 py-2  text-black  mr-2   "
            >
              {" "}
              <GithubIcon
                width={16}
                height={16}
                className="fill-current  mr-2 text-gray-600 "
              />
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
