export interface IMeContextProps {
  isEditing: boolean;
  handleToogleEditMode: () => void;
  changeImage: string;
  handleChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendEmailConfirmation: () => void;
  update: (
    newName?: string,
    password?: string,
    confirmPassword?: string
  ) => void;
  lastLoginDate: string;
  createdAtDate: string;
}