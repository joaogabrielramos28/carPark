import React from "react";
import { LoginProvider } from "./Login";
import { MeProvider } from "./Me/MeContext";
import { RegisterProvider } from "./Register";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { DashboardProvider } from "./Dashboard";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoginProvider>
      <ThemeProvider theme={theme}>
        <RegisterProvider>
          <MeProvider>
            <DashboardProvider>{children}</DashboardProvider>
          </MeProvider>
        </RegisterProvider>
      </ThemeProvider>
      <GlobalStyle />
    </LoginProvider>
  );
};

export default AppProvider;
