import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AboutImage from '../../assets/about-me.png';
import { ContentLimitator } from '../../components';
import colors from '../../utils/constants/colors.json';
import './style/index.css';

interface IAboutMeProps {}

const AboutMe: React.FC<IAboutMeProps> = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '100px 0 50px 0',
      }}
      id="about"
    >
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
          <LazyLoadImage
            effect="blur"
            src={AboutImage}
            style={{
              overflow: 'hidden',
              flexBasis: '300px',
              height: '400px',
              objectFit: 'cover',
              flexGrow: 1,
              borderRadius: '8px',
              boxShadow: '0px 0px 50px 0px rgba(158,155,158,0.3)',
            }}
          />
          <Box
            sx={{
              flexGrow: 1.5,
              flexBasis: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
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
            <Button
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '250px',
                height: '50px',
                borderRadius: '4px',
                border: `1px solid ${colors[theme.palette.mode].black[200]}`,
                gap: '8px',
                boxShadow: `4px 4px 0px 0px ${
                  colors[theme.palette.mode].blue[600]
                }`,
                color: colors[theme.palette.mode].black[900],
              }}
            >
              <Typography align="center" fontFamily="Inter" fontWeight={500}>
                {t('about.cv')}
              </Typography>
              <CloudDownloadOutlinedIcon />
            </Button>
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default AboutMe;
