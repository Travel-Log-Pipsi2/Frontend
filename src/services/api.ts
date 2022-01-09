/* eslint-disable class-methods-use-this */
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

  private getConfig() {
    const token = Cookies.get('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
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
      `${this.baseUrl}/ExternalAuthenticate/Facebook-login`,
      data
    );

  getUserInfo = () =>
    axios.get<any>(`${this.baseUrl}/UserInfo/GetInfo`, this.getConfig());

  getUserStats = () =>
    axios.get<any>(`${this.baseUrl}/UserInfo/GetStats/`, this.getConfig());

  getMarkers = () =>
    axios.get<any>(`${this.baseUrl}/Marker/GetMarkers`, this.getConfig());

  getUserMarkers = (userId) =>
    axios.get<any>(
      `${this.baseUrl}/Marker/GetMarkers/${userId}`,
      this.getConfig()
    );

  createTravel = (travelData) =>
    axios.post<any>(
      `${this.baseUrl}/Marker/CreateTravel`,
      travelData,
      this.getConfig()
    );

  deleteTravel = (travelId) =>
    axios.delete<any>(`${this.baseUrl}/Marker/DeleteTravel`, {
      params: {
        TravelID: travelId,
      },
      ...this.getConfig(),
    });
}

const AuthAPI = new AuthService();

export default AuthAPI;
