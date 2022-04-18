import type { AppProps } from "next/app";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Nprogress from "nprogress";
import { Router } from "next/router";
import "../../public/nprogress.css";
import AppProvider from "../contexts";
import { wrapper } from "../store/index.store";

Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});

Router.events.on("routeChangeComplete", () => {
  Nprogress.done();
});
Router.events.on("routeChangeError", () => {
  Nprogress.done();
});

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

export default wrapper.withRedux(MyApp);
