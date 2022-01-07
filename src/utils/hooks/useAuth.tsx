import AuthContext from 'context/auth';
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IUser } from 'types/types';
import Cookies from 'js-cookie';

const dummyData = [
  {
    longitude: 21,
    latitude: 50,
    name: 'Test A',
    country: 'Poland',
    travels: [
      {
        desc: 'Aliqua reprehenderit officia excepteur velit consequat quis ut do.',
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
  {
    longitude: 22,
    latitude: 51,
    name: 'Test B',
    country: 'Poland',
    travels: [
      {
        desc: 'Consequat sunt aliquip sint officia aute dolor occaecat tempor sunt in aliqua.',
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        desc: 'Esse proident ea eiusmod consequat sunt excepteur est laboris exercitation mollit elit ea commodo.',
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        desc: 'Consectetur Lorem sunt laborum laborum quis.',
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
  {
    longitude: 23,
    latitude: 49,
    name: 'Test C',
    country: 'Poland',
    travels: [
      {
        desc: 'Amet laboris veniam laborum eiusmod tempor non in nostrud cupidatat occaecat laborum elit.',
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
  {
    longitude: 21,
    latitude: 52,
    name: 'Test D',
    country: 'Poland',
    travels: [
      {
        desc: 'Amet exercitation proident laborum ea aute ipsum cillum consequat.',
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
  {
    longitude: 20,
    latitude: 50,
    name: 'Test E',
    country: 'Poland',
    travels: [
      {
        desc: 'Ad ullamco ipsum voluptate laboris exercitation elit nulla nostrud aute eu incididunt.',
        startDate: new Date(),
        endDate: new Date(),
      },
      {
        desc: 'Duis ea ad ea quis.',
        startDate: new Date(),
        endDate: new Date(),
      },
    ],
  },
];

const dummyNotification = [
  { sender: 'Shiragaira', notification: true, done: false },
  { sender: 'Alabama', notification: false, done: false },
  { sender: 'Oklahoma', notification: false, done: true },
];

const dummyStatistics = {
  allPlaces: 0,
  allTravels: 0,
  allCountries: 0,
  allDaysInTravel: 0,
  mostVisitedCountry: 'Poland',
  currYearCountries: 0,
  currYearTravels: 0,
};

export function AuhtProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    if (Cookies.get('token')) {
      setUser({
        email: 'test@test.pl',
        name: 'Testowy',
        places: dummyData,
        notifications: dummyNotification,
        statistics: dummyStatistics,
      });
      setAuthenticated(true);
    }
    setLoadingInitial(false);
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  const loginCtx = (data) => {
    Cookies.set('token', data.content);
    setUser({
      email: 'test@test.pl',
      name: 'Testowy',
      places: dummyData,
      notifications: dummyNotification,
      statistics: dummyStatistics,
    });
    setAuthenticated(true);
  };

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
