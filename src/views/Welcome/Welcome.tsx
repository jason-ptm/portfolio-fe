import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContentLimitator } from '../../components';
import { darkModeKey } from '../../utils';
import * as colors from '../../utils/constants/colors.json';
import './style/index.css';

interface IWelcomeProps {}

interface IWordPartialShowProps {
  words: string[];
  timer: number;
}

export const WordPartialShow: React.FC<IWordPartialShowProps> = ({
  words,
  timer,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingTimer = setInterval(() => {
      const currentChar = words[currentIndex][currentWord.length];

      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, -1));
      } else if (currentChar) {
        setCurrentWord((prev) => prev + currentChar);
      }

      if (currentWord === words[currentIndex]) {
        setIsDeleting(true);
      }

      if (currentWord === '' && isDeleting) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    }, timer);

    return () => clearInterval(typingTimer);
  }, [currentWord, currentIndex, isDeleting, timer, words]);

  return <>{currentWord}</>;
};

export const Background: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '-1',
      }}
    >
      <Box
        sx={{
          flex: '1',
          backgroundColor: colors[theme.palette.mode].blue[1000],
        }}
      />
      <Box sx={{ flex: '1' }} />
    </Box>
  );
};

const Welcome: React.FC<IWelcomeProps> = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Background />
      <ContentLimitator>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: ' center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            color={theme.palette.primary.main}
            sx={{
              textTransform: 'uppercase',
            }}
            fontFamily={'Sixtyfour'}
          >
            {t('welcome.title1')}
          </Typography>
          <Typography
            variant="h1"
            fontWeight={700}
            align="center"
            fontFamily="IBM Plex Sans"
          >
            {t('welcome.title2')}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            fontFamily="IBM Plex Sans"
          >
            {`${t('welcome.title3')} `}
            <span
              style={{
                color: theme.palette.primary.main,
                borderRight: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <WordPartialShow
                words={t('welcome.professions', { returnObjects: true })}
                timer={200}
              />
            </span>
          </Typography>
          <Box
            sx={{
              margin: '20px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '50px',
              backgroundColor: colors[theme.palette.mode].blue[1000],
              cursor: 'pointer',
              position: 'absolute',
              zIndex: 100,
              top: 'calc(50% + 176px)',
              left: 'calc(50% - 50px)',
            }}
          >
            <span className="slide-top">
              <KeyboardArrowDownIcon height="30px" width="30px" />
            </span>
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default Welcome;
