// components/Layout.tsx
import Header from "../layout/header";
import Meta from "../layout/meta";

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <div className=" bg-white dark:bg-black ">
      <Meta pageTitle={pageTitle} />
      <div className=" mx-auto ">
        <Header />
        <main className="pt-4 relative w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
