// components/Layout.tsx
import { SITE_NAME } from "../../lib/constants";
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
  datePublished?: Date;
  dateModified?: Date;
  blog?: boolean;
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
  datePublished,
  dateModified,
  blog
}: Props) => {
  const { general, socialMedia } = allStrings;

  return (
    <>
      <Meta
        siteString={general}
        socialMedia={socialMedia}
        description={pageDescription}
        imgURL={pageImage}
        title={pageTitle}
      >
        {blog && datePublished && dateModified && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${pageTitle}",
        "image": [
        "${pageImage}"
        ],
        "datePublished": "${datePublished.toISOString()}",
        "dateModified": "${dateModified.toISOString()}",
        "author": [{
          "@type": "Person",
        "name": "${SITE_NAME}",
        "url": "http://henoktsegaye.com"
      }]
      }
        `}} >
          </script>
        )}
      </Meta>
      <div className=" bg-white flex flex-col  dark:bg-black ">
        <Header
          strings={strings}
          locale={locale}
          theme={theme}
          changeTheme={changeTheme}
          slug={slug}
        />
        <main className=" relative w-full h-full">{children}</main>
      </div>
    </>
  );
};

export default Layout;
