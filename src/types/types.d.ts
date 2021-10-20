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
  login: (email: string, password: string) => void;
  signUp: (email: string, name: string, passwords: string) => void;
  logout: () => void;
}

export { IUser, IAuthContextType };
