/* eslint-disable no-console */
import AuthContext from 'context/auth';
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IUser } from 'types/types';
import Cookies from 'js-cookie';
import AuthAPI from 'services/api';

const dummyNotification = [
  { sender: 'Shiragaira', notification: true, done: false },
  { sender: 'Alabama', notification: false, done: false },
  { sender: 'Oklahoma', notification: false, done: true },
];

export function AuhtProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(null);
  const [error, setError] = useState<any>();
  const [loading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const location = useLocation();

  const setPlaces = async (userId) => {
    await AuthAPI.getUserMarkers(userId)
      .then(({ data }) => {
        const { content = [] } = data;
        setUser((prev) => ({
          ...prev,
          places: content,
        }));
      })
      .catch((err) => console.log(err));
  };

  const setStats = () => {
    AuthAPI.getUserStats()
      .then(({ data }) => {
        const { content = {} } = data;
        setUser((prev) => ({
          ...prev,
          statistics: content,
        }));
      })
      .catch((err) => console.log(err));
  };

  const setInvites = () => {
    AuthAPI.getInvites()
      .then(({ data }) => {
        console.log(data);
        const { content = {} } = data;
        setUser((prev) => ({
          ...prev,
          notifications: content,
        }));
      })
      .catch((err) => console.log(err));
  };

  const setFriends = () => {
    AuthAPI.getFriends()
      .then(({ data }) => {
        console.log(data);
        const { content = {} } = data;
        setUser((prev) => ({
          ...prev,
          friends: content,
        }));
      })
      .catch((err) => console.log(err));
  };

  const updateUserData = async () => {
    let id = '';
    await AuthAPI.getUserInfo()
      .then(({ data }) => {
        const { content = {} } = data;
        id = content.id;
        setUser((prev) => ({
          ...prev,
          ...content,
        }));
        return id;
      })
      .then((resId) => {
        setPlaces(resId);
        setStats();
        setInvites();
        setFriends();
      })
      .catch((err) => console.log(err));
    return id;
  };

  const loginCtx = (token) => {
    Cookies.set('token', token);
    setUser({
      email: '',
      username: '',
      id: '',
      places: [],
      notifications: [],
      statistics: {},
      friends: [],
    });
    updateUserData();
    setAuthenticated(true);
  };
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      loginCtx(token);
    }
    setLoadingInitial(false);
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  const logoutCtx = () => {
    Cookies.remove('token');
    setUser(null);
    setAuthenticated(false);
  };

  const signUpCtx = () => {};

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      loginCtx,
      logoutCtx,
      signUpCtx,
      isAuthenticated,
      updateUserData,
    }),
    [user, loading, error, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
