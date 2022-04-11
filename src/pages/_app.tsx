import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { LoginProvider } from "../contexts/Login";
import { RegisterProvider } from "../contexts/Register";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Nprogress from "nprogress";
import { Router } from "next/router";
import "../../public/nprogress.css";
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
    <LoginProvider>
      <RegisterProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </RegisterProvider>
    </LoginProvider>
  );
}

export default MyApp;
