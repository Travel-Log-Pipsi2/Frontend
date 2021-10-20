import { IAuthContextType } from 'types/types';
import { createContext } from 'react';

const AuthContext = createContext<IAuthContextType>({} as IAuthContextType);

export default AuthContext;
