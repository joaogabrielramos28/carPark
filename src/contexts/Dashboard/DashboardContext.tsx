import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toastMessage } from "../../utils/toast";
import { useAuthContext } from "../Auth";
import { IDashboardContextProps } from "./types";

const DashboardContext = createContext({} as IDashboardContextProps);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();
  const [menuSelected, setMenuSelected] = useState("");
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [adminModalConfirmationIsOpen, setAdminModalConfirmationIsOpen] =
    useState(false);
  const [selectedUser, setSelectedUser] = React.useState<string>("");
  const router = useRouter();

  const handleToggleModal = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  const handleConfirmationAdminPromote = async () => {
    try {
      await api.post("/api/users/turn-admin", { uid: selectedUser });
      toastMessage("Usuário promovido com sucesso!");
      router.reload();
    } catch (err) {
      console.log(err);
      toastMessage("Erro ao promover usuário!", "error");
    }
  };

  const handleToggleAdminModalConfirmation = (uid?: string) => {
    if (uid) setSelectedUser(uid);

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
