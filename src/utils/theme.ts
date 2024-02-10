import { ThemeOptions, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { StorageService } from './';
import * as colors from './constants/colors.json';

export const darkModeKey = 'dark';
export const lightModeKey = 'light';

export const themeColorTokens = (mode: string) => ({
  ...(mode === darkModeKey
    ? {
        ...colors.dark,
      }
    : {
        ...colors.light,
      }),
});

export const themeSettings = (mode: 'dark' | 'light'): ThemeOptions => {
  const colors = themeColorTokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === darkModeKey
        ? {
            primary: {
              main: colors.blue[600],
            },
            secondary: {
              main: colors.black[200],
            },
            neutral: {
              dark: colors.black[200],
              main: colors.black[800],
              light: colors.black[700],
            },
            background: {
              default: colors.black[100],
            },
            text: {
              primary: colors.black[1000],
            },
          }
        : {
            primary: {
              main: colors.blue[500],
            },
            secondary: {
              main: colors.black[1000],
            },
            neutral: {
              dark: colors.black[300],
              main: colors.black[200],
              light: colors.black[100],
            },
            background: {
              default: colors.black[100],
            },
          }),
    },
    typography: {
      fontFamily: [
        'Nunito',
        'Inter',
        'sans-serif',
        'Sixtyfour',
        'IBM Plex Sans',
        'Caveat',
        'Protest Guerrilla',
      ].join(','),
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const localStorageTheme = StorageService.getThemeMode();
  const [mode, setMode] = useState(
    localStorageTheme ? localStorageTheme : lightModeKey
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => {
          StorageService.setThemeMode(
            prev === lightModeKey ? darkModeKey : lightModeKey
          );
          return prev === lightModeKey ? darkModeKey : lightModeKey;
        }),
    }),
    []
  );

  const theme = useMemo(
    () => createTheme(themeSettings(mode as 'light' | 'dark')),
    [mode]
  );

  return { theme, colorMode };
};
