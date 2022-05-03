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
}

export interface IFile {
  path: string;
  name: string;
  preview: string;
}
