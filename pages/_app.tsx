import NProgress from "nprogress";
import Router from "next/router";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "nprogress/nprogress.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../hooks/useTheme";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {" "}
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}
export default MyApp;
