import { heroTitle, socialMedia } from "../../lib/lang";
import DownloadIcon from "../icons/download-outline.svg";
import LanguageShowCase from "./languageShowCase";

type props = {
  hero: {
    title: heroTitle;
    subTitle: string;
    secondRowTitle: string;
    moreText: string[];
  };
  socialMedia: socialMedia;
};

const HeroAnother: React.FC<props> = ({ hero, socialMedia }) => {
  const { title, subTitle, secondRowTitle, moreText } = hero;
  return (
    <div className="2xl:max-w-screen-xl  rounded-2xl     xl:max-w-screen-lg lg:max-w-screen-md max-w-sm mx-auto pt-2 pb-4 lg:pt-6 lg:pb-8 my-6 px-2 ">
        <div className="grid grid-cols-1 bg-gray-100 dark:bg-gray-900">
            <div className="py-10 px-10">
                <h1 className=" text-6xl    "> {title.intro}
                <span className=" inline-block text-blue-600 font-bold "> {title.name} </span>
                <span className="inline-block">{title.secondIntro} {title.thirdIntro} {title.title1} {title.title2}</span>
                </h1>
            </div>
            <div>

            </div>
        </div>
=    </div>
  );
};
export default HeroAnother;
