export interface IListUser {
  uid: string;
  customClaims: {
    admin: boolean;
  };
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
    uid: string;
  }[];
}
