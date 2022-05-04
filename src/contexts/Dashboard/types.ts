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
  checkedSpot: ICheckedSpot[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFile {
  path: string;
  name: string;
  preview: string;
}

export interface ICheckedSpot {
  checked: boolean;
  name: String;
}

export interface ICreateParkValues {
  name: string;
  address: string;
  state: string;
  period: string;
  price: string;
  spots?: ICheckedSpot[];
  images?: IFile[];
}
