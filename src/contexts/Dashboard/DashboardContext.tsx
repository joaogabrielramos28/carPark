import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toastMessage } from "../../utils/toast";
import { useAuthContext } from "../Auth";
import { IDashboardContextProps, IFile } from "./types";

const DashboardContext = createContext({} as IDashboardContextProps);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext();
  const [menuSelected, setMenuSelected] = useState("");
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [adminModalConfirmationIsOpen, setAdminModalConfirmationIsOpen] =
    useState(false);
  const [imageDropZoneModal, setImageDropZoneModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<IFile[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<string>("");
  const router = useRouter();

  const handleToggleModal = () => {
    setSettingsIsOpen(!settingsIsOpen);
  };

  const handleToggleImageDropZoneModal = () => {
    setImageDropZoneModal(!imageDropZoneModal);
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

  const handleDeleteSelectedImage = (name: string) => {
    setSelectedImages(selectedImages.filter((image) => image.name !== name));
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
        imageDropZoneModal,
        handleToggleImageDropZoneModal,
        selectedImages,
        setSelectedImages,
        handleDeleteSelectedImage,
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
