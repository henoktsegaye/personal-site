import { footer, socialMedia } from "../../lib/lang";
import TwitterIcon from "../icons/twitter.svg";
import LinkedInIcon from "../icons/linkedin.svg";
import InstagramIcon from "../icons/instagram.svg";
import EmailIcon from "../icons/email-outline.svg";
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
      <div className=" grid xl:grid-cols-2   grid-cols-1 pt-8 pb-4 justify-between items-start max-w-screen-lg  2xl:max-w-screen-xl px-4 lg:px-0 mx-auto">
        <div className=" mr-10">
          <div>
            <div className="flex flex-row justify-between my-4">
              <div className="flex flex-row gap-7 ">
                <a href={socialMedia.github}>
                  <GithubIcon
                    width={22}
                    height={22}
                    className="fill-current  text-black dark:text-gray-300"
                  />
                </a>
                <a href={socialMedia.linkedIn}>
                  <LinkedInIcon
                    width={22}
                    height={22}
                    className="fill-current  text-black dark:text-gray-300"
                  />
                </a>
                <a href={socialMedia.twitter}>
                  <TwitterIcon
                    width={22}
                    height={22}
                    className="fill-current text-black dark:text-gray-300"
                  />
                </a>
                <a href={socialMedia.instagram}>
                  <InstagramIcon
                    width={22}
                    height={22}
                    className="fill-current  text-black dark:text-gray-300"
                  />
                </a>
                <a href={socialMedia.email}>
                  <EmailIcon
                    width={22}
                    height={22}
                    className="fill-current  text-black dark:text-gray-300"
                  />
                </a>
              </div>
            </div>
            <Text className="mt-4" size="lg">
              Hi, I am Henok Tsegaye, You can call me Henok <br /> I am a full
              stack software engineer.You can contact me through my social media
              or email.
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Text size="xl" className="mb-4">
            Tools to use
            <span className="text-sm ml-2">
              Tools I made to use for myself and others who might find it useful
            </span>
          </Text>
          <div className="flex flex-col">
            <a
              href="http://audio-waveform.henoktsegaye.com/"
              className="text-blue-500 text-lg"
              target="_blank"
            >
              Audio Waveform
              <span className="text-sm ml-4">
                make a video from audio and image (using audio waveform)
              </span>
            </a>
            <a
              href="http://json-formatter.henoktsegaye.com/"
              className="text-blue-500 text-lg"
              target="_blank"
            >
              Json Formatter
              <span className="text-sm ml-4">
                format json data ( with syntax highlighting and collapsible tree
                view )
              </span>
            </a>
            <a
              href="http://flow-chart-maker.henoktsegaye.com/"
              className="text-blue-500 text-lg"
              target="_blank"
            >
              Flow-Chart Maker{" "}
              <span className="text-sm ml-4">make flow chart</span>
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <Text className="mt-8">
            {" "}
            Developed with Next.js and Tailwind CSS.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
