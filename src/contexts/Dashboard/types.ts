export interface IDashboardContextProps {
  menuSelected: string;
  setMenuSelected: React.Dispatch<React.SetStateAction<string>>;
  settingsIsOpen: boolean;
  handleToggleModal: () => void;
  adminModalConfirmationIsOpen: boolean;
  handleConfirmationAdminPromote: (uid: string) => void;
  handleToggleAdminModalConfirmation: () => void;
}
