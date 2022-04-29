import type { AppProps } from "next/app";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Nprogress from "nprogress";
import { Router } from "next/router";
import "../../public/nprogress.css";
import AppProvider from "../contexts";
Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});

Router.events.on("routeChangeComplete", () => {
  Nprogress.done();
});
Router.events.on("routeChangeError", () => {
  Nprogress.done();
});

import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease",
      duration: 1000,
    });
  }, []);
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
