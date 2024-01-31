import React from 'react';
import './style/index.css';
import { Box, Typography, useTheme } from '@mui/material';
import { ContentLimitator } from '../../components';
import AboutImage from '../../assets/about-me.png';
import { useTranslation } from 'react-i18next';
import colors from '../../utils/constants/colors.json';

interface IAboutMeProps {}

const AboutMe: React.FC<IAboutMeProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <ContentLimitator>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap-reverse',
            padding: '70px 0',
            overflow: 'hidden',
            gap: '30px',
          }}
        >
          <img
            src={AboutImage}
            style={{
              overflow: 'hidden',
              flexBasis: '300px',
              height: '400px',
              objectFit: 'cover',
              flexGrow: 1,
              borderRadius: '15px',
              boxShadow: '0px 0px 50px 0px rgba(158,155,158,0.3)',
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              flexBasis: '280px',
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
            }}
          >
            <Typography
              variant="h3"
              color={colors[theme.palette.mode].blue[400]}
              fontFamily="Caveat"
              fontWeight={700}
            >
              {t('about.title')}
            </Typography>
            <Typography variant="h6" fontWeight={300}>
              {t('about.text1')}
            </Typography>
            <Typography variant="h6" fontWeight={300}>
              {t('about.text2')}
            </Typography>
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default AboutMe;
