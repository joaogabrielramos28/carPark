import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toastMessage } from "../../utils/toast";
import { IDashboardContextProps } from "./types";

const DashboardContext = createContext({} as IDashboardContextProps);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuSelected, setMenuSelected] = useState("");
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [adminModalConfirmationIsOpen, setAdminModalConfirmationIsOpen] =
    useState(false);
  const router = useRouter();

  const handleToggleModal = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  const handleConfirmationAdminPromote = async (uid: string) => {
    try {
      await api.post("/api/users/turn-admin", { uid });
      toastMessage("Usuário promovido com sucesso!");
    } catch (err) {
      console.log(err);
      toastMessage("Erro ao promover usuário!", "error");
    }
  };

  const handleToggleAdminModalConfirmation = () => {
    setAdminModalConfirmationIsOpen(!adminModalConfirmationIsOpen);
  };

  useEffect(() => {
    setMenuSelected(router.pathname);
  }, [router]);
  return (
    <DashboardContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
        settingsIsOpen,
        handleToggleModal,
        adminModalConfirmationIsOpen,
        handleConfirmationAdminPromote,
        handleToggleAdminModalConfirmation,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboardContext = () => {
  return React.useContext(DashboardContext);
};

export { DashboardProvider, useDashboardContext, DashboardContext };
