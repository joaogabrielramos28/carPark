export interface IDashboardContextProps {
  menuSelected: string;
  setMenuSelected: React.Dispatch<React.SetStateAction<string>>;
  settingsIsOpen: boolean;
  handleToggleModal: () => void;
}
