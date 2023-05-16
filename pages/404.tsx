// pages/index.tsx
import { useState } from "react";
import { IPost } from "../types/post";
import { getAllPosts } from "../lib/mdxUtils";
import Footer from "../components/layout/footer";
import Display404 from "../components/basic/display404";
import LanguageStrings, { langType } from "../lib/lang";
import Meta from "../components/layout/meta";
import { BlogNav } from "../components/blog/blogNav";

type Props = {
  files: {
    posts: IPost[];
    works: IPost[];
  };
  localeString: langType;
  locale: "am" | "en";
};

const NotFound: React.FC<Props> = ({ files, localeString, locale }) => {
  const { posts, works } = files;
  const {
    socialMedia,

    getConnected,
    footer,
    general,
    string404,
  } = localeString;

  const [theme, setTheme] = useState<boolean>(false);

  const toogleTheme = () => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-black");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-black");
    }
    setTheme(!theme);
  };

  return (
    <div className=" h-full w-full ">
      <Meta
        socialMedia={socialMedia}
        siteString={{
          siteTitle: general.siteTitle,
          siteDescription: general.siteDescription,
        }}
        title="homepage"
      />
      <BlogNav />
      <Display404 strings={string404} />

      <Footer socialMedia={socialMedia} footer={footer} />
    </div>
  );
};

export default NotFound;

export const getStaticProps = async ({
  locale = "en",
}: {
  locale: "am" | "en";
}) => {
  const files = getAllPosts([
    "slug",
    "date",
    "thumbnail",
    "title",
    "description",
  ]);

  const localeString: langType = LanguageStrings[locale];

  return { props: { files, localeString, locale } };
};
