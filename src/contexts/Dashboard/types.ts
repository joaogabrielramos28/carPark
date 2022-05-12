import { ISpotsProps } from "types/Parks";

export interface IDashboardContextProps {
  menuSelected: string;
  setMenuSelected: React.Dispatch<React.SetStateAction<string>>;
  settingsIsOpen: boolean;
  handleToggleModal: () => void;
  adminModalConfirmationIsOpen: boolean;
  handleConfirmationAdminPromote: () => void;
  handleToggleAdminModalConfirmation: (uid?: string) => void;
  imageDropZoneModal: boolean;
  handleToggleImageDropZoneModal: () => void;
  selectedImages: IFile[];
  setSelectedImages: React.Dispatch<React.SetStateAction<IFile[]>>;
  handleDeleteSelectedImage: (name: string) => void;
  handleCreatePark: (values: any) => void;
  checkedSpot: ISpotsProps[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createParkLoading: boolean;
  handleDeletePark: (id: string) => Promise<void>;
}

export interface IFile {
  path: string;
  name: string;
  preview: string;
}

export interface ICreateParkValues {
  name: string;
  address: string;
  state: string;
  period: string;
  price: string;
}
