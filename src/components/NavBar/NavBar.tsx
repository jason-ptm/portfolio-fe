import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { ContentLimitator } from '..';
import * as colors from '../../utils/constants/colors.json';
import { routes } from '../../utils/constants/routes';
import './style/index.css';

interface INavBarProps {}

interface IRoute {
  label?: string;
  slug: string;
  offset: number;
}

interface NavBarMenuItemProps {
  handleClose: () => void;
  open: boolean;
  iconColor: string;
}

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
  const menuQuery = useMediaQuery('(max-width: 950px)');
  const theme = useTheme();
  const { t } = useTranslation();
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
            fontFamily="Protest Guerrilla"
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
            {Object.values(routes).map((route: IRoute, index) =>
              route?.label ? (
                <Typography
                  key={index}
                  variant="h6"
                  fontWeight={500}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Link
                    onClick={() => setOpen(false)}
                    to={route.label}
                    spy={true}
                    smooth={true}
                    offset={route.offset}
                    duration={500}
                    className="navlink"
                    activeStyle={{
                      textDecoration: 'none',
                      color: colors[theme.palette.mode].black[900],
                      transition: 'all 1s',
                    }}
                  >
                    {t(`navBar.${route.label}`)}
                  </Link>
                </Typography>
              ) : (
                <></>
              )
            )}
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default NavBar;
