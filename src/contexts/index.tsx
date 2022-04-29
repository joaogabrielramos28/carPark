import React from "react";
import { AuthProvider } from "./Auth";
import { MeProvider } from "./Me/MeContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { DashboardProvider } from "./Dashboard";

import { ToastContainer } from "react-toastify";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MeProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </MeProvider>
      </ThemeProvider>
      <GlobalStyle />
      <ToastContainer theme="colored" />
    </AuthProvider>
  );
};

export default AppProvider;
