import { heroTitle, socialMedia } from "../../lib/lang";

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
      <div className=" grid xl:grid-cols-6 grid-cols-3 items-center">
        <div className="col-span-3 text-left">
          <h1 className="text-3xl leading-normal align-middle font-semibold text-gray-600 dark:text-gray-400">
            <span> {title?.intro} </span>
            <span className="font-extrabold text-blue-500 text-6xl block mb-2">
              {title?.name}
            </span>
            {title?.secondIntro}
            <span className="font-bold block dark:text-gray-200 text-gray-600 text-6xl">
              {title?.title1}
            </span>
            <span className=" mt-6"> {title?.thirdIntro} </span>
            <span className=" block text-gray-600 dark:text-gray-200 font-bold text-4xl">
              {title?.title2}
            </span>
          </h1>
          <p className="text-gray-500 lg:mt-10 mt-2 text-lg">
            {" "}
            {hero?.subTitle}{" "}
          </p>
        </div>
        <div className="col-span-3 mt-10 lg:mt-0">
          <p className="dark:text-gray-200 text-gray-800 font-bold text-3xl mb-3">
            {secondRowTitle}
          </p>
          {moreText.map((content) => (
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-3">
              {content}
            </p>
          ))}

          <div className="flex flex-row flex-wrap mt-6">
            <a
              href={socialMedia.github}
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              github
            </a>
            <a
              href={socialMedia.twitter}
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              twitter
            </a>
            <a
              href={socialMedia.linkedIn}
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              linkedIn
            </a>

            <a
              href={socialMedia.instagram}
              className="dark:text-gray-200 text-gray-600 font-bold mr-4  "
            >
              instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
