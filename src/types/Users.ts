export interface IListUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  photoURL: string;
  disabled: boolean;
  metadata: {
    lastSignInTime: string;
  };
  providerData: {
    providerId: string;
  }[];
}
