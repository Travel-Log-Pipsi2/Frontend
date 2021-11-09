import axios from 'axios';
import Cookies from 'js-cookie';

class AuthService {
  readonly baseUrl: string;

  constructor() {
    this.baseUrl = 'https://localhost:54194/api';

    axios
      .get('https://localhost:54194/api/Test')
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
