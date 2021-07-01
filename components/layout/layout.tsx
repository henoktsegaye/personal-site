// components/Layout.tsx
import { langType, siteStrings } from "../../lib/lang";
import Header from "../layout/header";
import Meta from "../layout/meta";

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  strings: siteStrings;
  changeTheme: () => void;
  theme: boolean;
  locale: "en" | "am";
  allStrings: langType;
  slug?: string;
};

const Layout: React.FC<Props> = ({
  children,
  pageTitle,
  strings,
  changeTheme,
  theme,
  locale,
  allStrings,
  pageDescription,
  pageImage,
  slug,
}: Props) => {
  const { general, socialMedia } = allStrings;
  return (
    <div className=" bg-white dark:bg-black ">
      <Meta
        siteString={general}
        socialMedia={socialMedia}
        description={pageDescription}
        imgURL={pageImage}
        title={pageTitle}
      />
      <div className=" mx-auto ">
        <Header
          strings={strings}
          locale={locale}
          theme={theme}
          changeTheme={changeTheme}
          slug={slug}
        />
        <main className="pt-4 relative w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
