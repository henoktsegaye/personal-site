// components/Layout.tsx
import { siteStrings } from "../../lib/lang";
import Header from "../layout/header";
import Meta from "../layout/meta";

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
  strings: siteStrings;
  changeTheme: () => void;
  theme: boolean;
};

const Layout: React.FC<Props> = ({
  children,
  pageTitle,
  strings,
  changeTheme,
  theme,
}: Props) => {
  return (
    <div className=" bg-white dark:bg-black ">
      <Meta pageTitle={pageTitle} />
      <div className=" mx-auto ">
        <Header strings={strings} theme={theme} changeTheme={changeTheme} />
        <main className="pt-4 relative w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
