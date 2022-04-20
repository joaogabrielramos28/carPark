import { useRouter } from "next/router";
import React, { createContext, useEffect } from "react";
import { IDashboardContextProps } from "./types";

const DashboardContext = createContext({} as IDashboardContextProps);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuSelected, setMenuSelected] = React.useState("");
  const router = useRouter();
  useEffect(() => {
    setMenuSelected(router.pathname);
  }, [router]);
  return (
    <DashboardContext.Provider value={{ menuSelected, setMenuSelected }}>
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => {
  return React.useContext(DashboardContext);
};

export { DashboardProvider, useDashboardContext, DashboardContext };
