import AuthContext from 'context/auth';
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IUser } from 'types/types';
import Cookies from 'js-cookie';

export function AuhtProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (Cookies.get('token')) {
      setUser({
        email: 'test@test.pl',
        name: 'Testowy',
      });
      setAuthenticated(true);
    }
    setLoadingInitial(false);
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  const loginCtx = () => {
    setAuthenticated(true);
  };

  const logoutCtx = () => {
    setUser(null);
    setAuthenticated(false);
    Cookies.remove('token');
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
