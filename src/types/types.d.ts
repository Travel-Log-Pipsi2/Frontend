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

interface IAddTravelContextType {
  geoData: {
    longitute: number;
    latitude: number;
    name: string;
  };
  initAdd: (point: unknown) => void;
}

export { IUser, IAuthContextType, IAddTravelContextType };
