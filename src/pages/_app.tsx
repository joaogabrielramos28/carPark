import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { LoginProvider } from "./auth/login/context";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </LoginProvider>
  );
}

export default MyApp;
