import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MenuOutline, CloseOutline } from 'react-ionicons';
import { NavLink, useLocation } from 'react-router-dom';
import * as colors from '../../utils/constants/colors.json';
import { routes } from '../../utils/constants/routes';
import ContentLimitator from '../ContentLimitator';
import './style/index.css';

interface INavBarProps {}
interface NavBarItemLinkrops {
  link: string;
  label: string;
}

export const NavBarItemLink: React.FC<NavBarItemLinkrops> = ({
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
            : colors[theme.palette.mode].black[300],
          transition: 'all 1s',
        })}
      >
        {label}
      </NavLink>
    </Typography>
  );
};

const NavBar: React.FC<INavBarProps> = () => {
  const menuQuery = useMediaQuery('(max-width: 750px)');
  const theme = useTheme();
  const location = useLocation();
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 0 && window.scrollY < 200) setShowBackground(false);
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
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5000,
          gap: '20px',
          backgroundColor: theme.palette.background.default,
          transform: `translateX(${open ? 0 : 100}%)`,
          opacity: open ? 1 : 0,
          transition: 'all 0.3s',
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
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
            sx={{
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
              {open ? (
                <CloseOutline color={'#00000'} height="25px" width="25px" />
              ) : (
                <MenuOutline color={'#00000'} height="25px" width="25px" />
              )}
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
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default NavBar;
