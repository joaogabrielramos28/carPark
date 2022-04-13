import React from "react";
import { LoginProvider } from "./Login";
import { MeProvider } from "./Me/MeContext";
import { RegisterProvider } from "./Register";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <RegisterProvider>
          <MeProvider>{children}</MeProvider>
        </RegisterProvider>
      </ThemeProvider>
      <GlobalStyle />
    </LoginProvider>
  );
};

export default AppProvider;
