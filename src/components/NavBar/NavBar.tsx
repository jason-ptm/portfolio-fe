import {
  Box,
  Switch,
  SxProps,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ContentLimitator } from '..';
import * as colors from '../../utils/constants/colors.json';
import { routes } from '../../utils/constants/routes';
import './style/index.css';
import { ColorModeContext } from '../../utils';

interface INavBarProps {}

interface NavBarItemLinkProps {
  link: string;
  label: string;
}

interface NavBarMenuItemProps {
  handleClose: () => void;
  open: boolean;
  iconColor: string;
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#d9e3ff' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#1b37f5' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export const NavBarItemLink: React.FC<NavBarItemLinkProps> = ({
  link,
  label,
}) => {
  const theme = useTheme();

  return (
    <Typography variant="h6" fontWeight={500}>
      <NavLink
        to={link}
        className="navlink"
        style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive
            ? theme.palette.primary.main
            : colors[theme.palette.mode].black[800],
          transition: 'all 1s',
        })}
      >
        {label}
      </NavLink>
    </Typography>
  );
};

export const NavBarMenuItem: React.FC<NavBarMenuItemProps> = ({
  handleClose,
  open,
  iconColor,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'center',
        width: '30px',
        height: '30px',
      }}
      onClick={handleClose}
    >
      <Box
        sx={{
          width: '30px',
          height: '2px',
          backgroundColor: iconColor,
          transform: `rotate(${open ? 45 : 0}deg)`,
          transformOrigin: 'left',
          transition: 'all .6s',
        }}
      />
      <Box
        sx={{
          width: '30px',
          height: '2px',
          backgroundColor: iconColor,
          opacity: open ? 0 : 1,
          transition: 'all .6s',
        }}
      />
      <Box
        sx={{
          width: '30px',
          height: '2px',
          backgroundColor: iconColor,
          transform: `rotate(${open ? -45 : 0}deg)`,
          transformOrigin: 'left',
          transition: 'all .6s',
        }}
      />
    </Box>
  );
};

const NavBar: React.FC<INavBarProps> = () => {
  const menuQuery = useMediaQuery('(max-width: 750px)');
  const theme = useTheme();
  const location = useLocation();
  const colorMode = useContext(ColorModeContext);
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY >= 0 && window.scrollY < 200) setShowBackground(false);
      else if (!showBackground) setShowBackground(true);
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  useEffect(() => {
    if (menuQuery) setOpen(false);
  }, [menuQuery, location]);

  const getMenuStyles: SxProps = () => {
    return menuQuery
      ? {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5000,
          gap: '20px',
          backgroundColor: theme.palette.background.default,
          transform: `scale(${open ? 1 : 0})`,
          opacity: open ? 1 : 0,
          transition: 'scale 1s, opacity 0.5s',
        }
      : {
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        };
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 5000,
        width: '100%',
        height: `${showBackground ? 55 : 70}px`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: `${
          showBackground ? theme.palette.background.default : ''
        }`,
        transition: 'all 0.5s',
      }}
    >
      <ContentLimitator>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            height: '100%',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            fontFamily="IBM Plex Sans"
            sx={{
              position: 'relative',
              zIndex: 5100,
              letterSpacing: '0.5mm',
              textTransform: 'uppercase',
            }}
          >
            Solarte
          </Typography>

          {menuQuery && (
            <Box
              onClick={() => setOpen(!open)}
              sx={{
                zIndex: 5100,
                cursor: 'pointer',
              }}
            >
              <NavBarMenuItem
                iconColor={theme.palette.text.primary}
                handleClose={() => setOpen(!open)}
                open={open}
              />
            </Box>
          )}

          <Box sx={getMenuStyles('')}>
            {Object.values(routes).map((route) => (
              <NavBarItemLink
                key={route.slug}
                link={route.label}
                label={route.label}
              />
            ))}
            <MaterialUISwitch
              sx={{ m: 1 }}
              theme={theme}
              onClick={() => colorMode.toggleColorMode()}
              defaultChecked
            />
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default NavBar;
