import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ColorModeContext, StorageService } from '../../utils';
import * as colors from '../../utils/constants/colors.json';
import './style/index.css';

// images
import SpainFlag from '../../assets/tools/spain-flag.png';
import UsaFlag from '../../assets/tools/usa-flag.svg';

interface IToolsProps {}

const Tools: React.FC<IToolsProps> = () => {
  const theme = useTheme();
  const { i18n } = useTranslation();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100%',
          backgroundColor: colors[theme.palette.mode].blue[100],
          color: colors[theme.palette.mode].black[100],
          cursor: 'pointer',
          bottom: '20px',
          left: '30px',
        }}
        onClick={() => colorMode.toggleColorMode()}
      >
        {theme.palette.mode === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
      </Box>
      <Box
        sx={{
          position: 'fixed',
          cursor: 'pointer',
          bottom: '90px',
          left: '20px',
          width: '70px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: colors[theme.palette.mode].blue[100],
          color: colors[theme.palette.mode].black[100],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
        }}
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
          StorageService.setLang(i18n.language);
        }}
      >
        <LazyLoadImage
          effect="blur"
          src={!(i18n.language === 'es') ? SpainFlag : UsaFlag}
          width={20}
          height={10}
          style={{ objectFit: 'contain' }}
        />
        <Typography fontWeight={900} fontSize={18}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </Typography>
      </Box>
    </>
  );
};

export default Tools;
