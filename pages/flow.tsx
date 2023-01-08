// pages/index.tsx
import { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import LanguageStrings, { langType } from "../lib/lang";
import { Flow } from "../components/chart/GenericBox";

type Props = {
  localeString: langType;
  locale: "am" | "en";
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const FlowChart: React.FC<Props> = ({ localeString, locale }) => {
  const {
    general,
    flowStrings
  } = localeString;

  const [theme, setTheme] = useState<boolean>(false);
  const [width, height] = useWindowSize();
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
    <Layout
      strings={general}
      pageTitle={flowStrings.title}
      pageDescription={flowStrings.subTitle}
      changeTheme={toogleTheme}
      theme={theme}
      locale={locale}
      allStrings={localeString}
      slug="/flow"
    >
      <div className="h-screen">
        <div className="   mx-auto  h-5/6 ">
          {width !== 0 && height !== 0 && (
            <Flow width={width} height={height} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FlowChart;

export const getStaticProps = async ({
  locale = "en",
}: {
  locale: "am" | "en";
}) => {
  const localeString: langType = LanguageStrings[locale];

  return { props: { localeString, locale } };
};
