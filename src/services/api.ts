import axios from 'axios';
import Cookies from 'js-cookie';

class AuthService {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://localhost:44359/api';

    axios
      .get('https://localhost:44359/api/Test')
      .then(() => console.log('Connection established'))
      .catch((err) => console.log(err));
  }

  login = (data) => axios.post<any>(`${this.baseUrl}/Authenticate/Login`, data);

  forgotPassword = (email: string) =>
    axios.post<any>(`${this.baseUrl}/Authenticate/Forgot-password`, null, {
      params: {
        email,
      },
    });

  resetPassword = (data) =>
    axios.post<any>(`${this.baseUrl}/Authenticate/Reset-password`, data);

  register = (data) =>
    axios.post<any>(`${this.baseUrl}/Authenticate/Register`, data);

  loginWithFacebook = (data) =>
    axios.post<any>(
      `${this.baseUrl}/ExternalAuthenticate/External-response`,
      data
    );
}

const AuthAPI = new AuthService();

export default AuthAPI;
