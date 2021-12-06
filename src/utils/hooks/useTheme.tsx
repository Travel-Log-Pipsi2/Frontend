/* eslint-disable no-unused-expressions */
import ThemeContext from 'context/theme';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { themeDark, theme } from 'styles/theme';
import Cookies from 'js-cookie';

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [currTheme, setCurrTheme] = useState(theme);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currMode = Cookies.get('isDarkMode');
    currMode === 'true' && setDarkMode(true);
  }, []);

  useEffect(() => {
    isDarkMode ? setCurrTheme(themeDark) : setCurrTheme(theme);
    Cookies.set('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const changeTheme = () => setDarkMode((prev) => !prev);

  const memoedValue = useMemo(
    () => ({
      currTheme,
      isDarkMode,
      changeTheme,
    }),
    [currTheme, isDarkMode]
  );

  return (
    <ThemeContext.Provider value={memoedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function useThemeContext() {
  return useContext(ThemeContext);
}
