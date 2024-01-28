import { ThemeOptions, createTheme } from '@mui/material';
import { createContext, useEffect, useMemo, useState } from 'react';
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

export const themSettings = (mode: 'dark' | 'light'): ThemeOptions => {
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
              default: colors.black[900],
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
              default: colors.blue[1000],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      h1: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
      h2: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
      h3: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
      h4: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
      h5: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
      h6: {
        fontFamily: ['Inter', 'Nunito', 'sans-serif'].join(','),
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-colors-scheme: dark)'
    );

    const handleDarkModeChange = (event: MediaQueryListEvent) => {
      setMode(event.matches ? 'dark' : 'light');
    };

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    setMode(darkModeMediaQuery.matches ? 'dark' : 'light');

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themSettings(mode)), [mode]);

  return { theme, colorMode };
};
