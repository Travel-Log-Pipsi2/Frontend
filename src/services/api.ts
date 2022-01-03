import axios from 'axios';
import Cookies from 'js-cookie';

class AuthService {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://localhost:63696/api';

    axios
      .get('https://localhost:63696/api/Test')
      .then(() => console.log('Connection established'))
      .catch((err) => console.log(err));
  }

  login = (email: string, password: string) =>
    axios
      .post<any>(`${this.baseUrl}/Authenticate/Login`, {
        email,
        password,
      })
      .then(({ data }) => {
        const { content, successStatus } = data;

        if (successStatus) {
          Cookies.set('token', content);
          return Promise.resolve(data);
        }

        return Promise.reject(data);
      })
      .catch((error) => Promise.reject(error));

  logout = () => {
    Cookies.remove('token');
  };

  forgotPassword = (email: string) =>
    axios
      .post<any>(`${this.baseUrl}/Authenticate/Forgot-password`, null, {
        params: {
          email,
        },
      })
      .then(({ data }) => Promise.resolve(data))
      .catch((error) => Promise.reject(error));

  resetPassword = (
    email: string,
    newPassword: string,
    confirmNewPassword: string,
    token: string
  ) =>
    axios
      .post<any>(`${this.baseUrl}/Authenticate/Reset-password`, {
        email,
        newPassword,
        confirmNewPassword,
        token,
      })
      .then(({ data }) => Promise.resolve(data))
      .catch((error) => Promise.reject(error));

  register = (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) =>
    axios
      .post<any>(`${this.baseUrl}/Authenticate/Register`, {
        username,
        email,
        password,
        confirmPassword,
      })
      .then(({ data }) => {
        const { successStatus } = data;
        if (successStatus) {
          return Promise.resolve(data);
        }

        return Promise.reject(data);
      })
      .catch((error) => Promise.reject(error));
}

const AuthAPI = new AuthService();

export default AuthAPI;
