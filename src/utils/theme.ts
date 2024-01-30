import { ThemeOptions, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { StorageService } from './';
import * as colors from './constants/colors.json';

export const themeColorTokens = (mode: string) => ({
  ...(mode === 'dark'
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
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.blue[600],
            },
            secondary: {
              main: colors.black[1000],
            },
            neutral: {
              dark: colors.black[900],
              main: colors.black[800],
              light: colors.black[700],
            },
            background: {
              default: colors.black[100],
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
    localStorageTheme ? localStorageTheme : 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => {
          StorageService.setThemeMode(prev === 'light' ? 'dark' : 'light');
          return prev === 'light' ? 'dark' : 'light';
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
