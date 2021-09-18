// components/Meta.tsx
import Head from "next/head";
import { useRouter } from "next/router";

import { SITE_URL } from "../../lib/constants";
import { siteStrings, socialMedia } from "../../lib/lang";

type Props = {
  siteString: siteStrings;
  socialMedia: socialMedia;
  title?: string;
  description?: string;
  imgURL?: string;
};

const Meta: React.FC<Props> = ({
  siteString,
  socialMedia,
  title,
  description,
  imgURL,
}: Props) => {
  const { siteTitle, siteDescription } = siteString;
  const router = useRouter();
  const ogUrl = SITE_URL + router.asPath;
  const ogType = router.pathname === "/" ? "website" : "article";
  const ogTitle = title;
  const ogImage = SITE_URL + imgURL;
  const TWITTER_USERNAME = socialMedia.twitter;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`${title} | ${siteTitle} `}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00a300" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={description} key="description" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={ogTitle} />
      <meta
        property="og:description"
        content={description}
        key="ogDescription"
      />
      <meta property="og:image" content={ogImage} key="ogImage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_USERNAME} />
    </Head>
  );
};

export default Meta;
