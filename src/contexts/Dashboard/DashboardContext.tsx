import { useRouter } from "next/router";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toastMessage } from "../../utils/toast";
import { useAuthContext } from "../Auth";
import {
  ICheckedSpot,
  ICreateParkProps,
  ICreateParkValues,
  IDashboardContextProps,
  IFile,
} from "./types";
import { uuid } from "uuidv4";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { collection, query, doc, setDoc } from "firebase/firestore";

import { database } from "../../services/firebase";

const DashboardContext = createContext({} as IDashboardContextProps);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const CHECKED_SPOT_INITIAL_VALUE = [
    {
      name: "car",
      checked: false,
    },
    {
      name: "bike",
      checked: false,
    },
    {
      name: "truck",
      checked: false,
    },
  ];

  const { user } = useAuthContext();
  const [menuSelected, setMenuSelected] = useState("");
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [adminModalConfirmationIsOpen, setAdminModalConfirmationIsOpen] =
    useState(false);
  const [imageDropZoneModal, setImageDropZoneModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<IFile[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<string>("");
  const [checkedSpot, setCheckedSpot] = useState<ICheckedSpot[]>(
    CHECKED_SPOT_INITIAL_VALUE
  );
  const [createParkLoading, setCreateParkLoading] = useState(false);
  const router = useRouter();
  const storage = getStorage();
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

  const handleDeleteSelectedImage = useCallback(
    (name: string) => {
      setSelectedImages(selectedImages.filter((image) => image.name !== name));
    },
    [selectedImages]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const name = event.target.name;

      const newCheckedSpotList = checkedSpot.map((spot) => {
        if (spot.name === name) {
          spot = {
            ...spot,
            checked: isChecked,
          };
        }

        return spot;
      });
      setCheckedSpot([...newCheckedSpotList]);
    },
    [checkedSpot]
  );

  const handleCreatePark = useCallback(
    async (values: ICreateParkValues) => {
      setCreateParkLoading(true);
      let imagesUrl: string[] = [];
      selectedImages.map(async (image: any) => {
        const storageRef = ref(storage, `parks/${image.name}`);
        await uploadBytes(storageRef, image);
        await getDownloadURL(storageRef)
          .then((url) => {
            imagesUrl = [...imagesUrl, url];
          })
          .finally(async () => {
            if (imagesUrl.length === selectedImages.length) {
              const newPark: ICreateParkProps = {
                ...values,
                id: uuid(),
                images: imagesUrl,
                spots: checkedSpot,
                main_image: imagesUrl[0],
              };

              try {
                await setDoc(doc(database, "parks", newPark.id), newPark);
                await api.post("/api/stripe/create-product", {
                  name: newPark.name,
                  id: newPark.id,
                  price: newPark.price,
                  images: newPark.main_image,
                });
                toastMessage("Parque criado com sucesso!");
                setCreateParkLoading(false);
                router.reload();
              } catch (err) {
                console.log(err);
                toastMessage("Erro ao criar parque!", "error");
                setCreateParkLoading(false);
              }
            }
          });
      });
    },
    [selectedImages, checkedSpot, storage, router]
  );

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
        handleCreatePark,
        checkedSpot,
        handleChange,
        createParkLoading,
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
