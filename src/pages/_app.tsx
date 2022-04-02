import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { LoginProvider } from "./auth/login/context";
import { RegisterProvider } from "./auth/register/context";
function MyApp({ Component, pageProps }: AppProps) {
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
