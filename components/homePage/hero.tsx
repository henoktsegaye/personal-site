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
    <div className="2xl:max-w-screen-xl hero rounded-2xl bg-gray-100 dark:bg-gray-900  xl:max-w-screen-lg lg:max-w-screen-md max-w-sm mx-auto pt-2 pb-4 lg:pt-6 lg:pb-8 my-6 px-2 ">
      <div className=" grid xl:grid-cols-6  grid-cols-3 items-center justify-between ">
       
        <div className="col-span-3  text-left 2xl:py-12 py-4 pl-4">
          <h1 className=" leading-normal font-normal align-middle  text-black dark:text-gray-600">
            <span className="text-5xl mb-8 block text-gray-600" > {title?.intro} </span>
            <span className=" text-5xl uppercase text-blue-600 font-bold block mb-8 mt-0 pb-1 pt-0">
              {title?.name}
            </span>
            <div className="mt-2 text-4xl block text-gray-600">
              {title?.secondIntro} <span className="font-bold text-gray-900 dark:text-white uppercase text-3xl">
                {title?.title1}
              </span>
            </div>
            <span className="text-4xl mt-4 mb-4 inline-block text-gray-600"> {title?.thirdIntro} </span>
            <span className="  block mt-1 mb-6 uppercase dark:text-white font-bold text-3xl">
              {title?.title2}
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-600 capitalize lg:mt-4 mt-1 text-sm">
            {hero?.moreText}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base"> 
          {hero?.subTitle}
          </p>
        </div>
        <div className="col-span-6 xl:col-span-3 ">
          <div className=" px-4">
            <img
              src="/assets/face-ex.jpeg"
              className=" left-0 rounded-xl filter myimg object-cover grayscale blur-xs text-left justify-items-start "
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default Hero;
