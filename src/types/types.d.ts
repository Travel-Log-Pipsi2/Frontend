import { stringify } from 'querystring';
import { ITheme } from 'styles/styled';

interface IUser {
  email: string;
  name: string;
  places: IPlace[];
  notifications: INotification[];
  statistics: {
    [key: string]: string | number;
  };
}

interface IAuthContextType {
  isAuthenticated: boolean;
  user?: IUser;
  loading: boolean;
  error?: any;
  loginCtx: (data) => void;
  signUpCtx: () => void;
  logoutCtx: () => void;
}

interface IAddTravelContextType {
  geoData: {
    longitude: number;
    latitude: number;
    name: string;
    text?: string;
  };
  initAdd: (point: unknown) => void;
}

interface IThemeContext {
  currTheme: ITheme;
  isDarkMode: boolean;
  changeTheme: () => void;
}

interface ITravel {
  desc?: string;
  startDate: Date;
  endDate: Date;
}

interface IPlace {
  longitude: number;
  latitude: number;
  name: string;
  country: string;
  travels: ITravel[];
}

interface INotification {
  sender: stringify;
  notification: boolean;
  done: boolean;
}

export {
  IUser,
  IAuthContextType,
  IAddTravelContextType,
  IThemeContext,
  ITravel,
  IPlace,
};
