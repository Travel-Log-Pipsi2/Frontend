import { createContext } from 'react';
import { IThemeContext } from 'types/types';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export default ThemeContext;
