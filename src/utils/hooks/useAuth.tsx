import AuthContext from 'context/auth';
import { ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IUser } from 'types/types';
import { getLSItem, removeLSItem, setLSItem } from 'utils/helpers/localStorage';

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
    if (getLSItem('token')) {
      setUser({
        email: 'test@test.pl',
        name: 'Testowy',
      });
      setAuthenticated(true);
    }
    setLoadingInitial(false);
    console.log('WSTĘPNA INIT');
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  const login = (email: string, password: string) => {
    setUser({
      email: 'test@test.pl',
      name: 'Testowy',
    });
    setAuthenticated(true);
    setLSItem('token', 'testowy');
    console.log('ZALOGOWANO');
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    removeLSItem('token');
    console.log('WYLOGOWANO');
  };

  const signUp = () => {
    console.log('REJESTRACJA');
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      logout,
      signUp,
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
