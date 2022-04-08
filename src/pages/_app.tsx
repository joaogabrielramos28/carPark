import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { LoginProvider } from "../contexts/Login";
import { RegisterProvider } from "../contexts/Register";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
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
