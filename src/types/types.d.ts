/* eslint-disable no-unused-vars */
interface IUser {
  email: string;
  name: string;
}

interface IAuthContextType {
  isAuthenticated: boolean;
  user?: IUser;
  loading: boolean;
  error?: any;
  loginCtx: () => void;
  signUpCtx: () => void;
  logoutCtx: () => void;
}

export { IUser, IAuthContextType };
