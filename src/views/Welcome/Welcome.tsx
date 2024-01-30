import React, { useEffect, useState } from 'react';
import './style/index.css';
import { Box, Typography, useTheme } from '@mui/material';
import * as colors from '../../utils/constants/colors.json';
import { ContentLimitator } from '../../components';
import { ChevronDownOutline } from 'react-ionicons';

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
          backgroundColor: colors[theme.palette.mode].blue[800],
        }}
      />
      <Box sx={{ flex: '1' }} />
    </Box>
  );
};

const Welcome: React.FC<IWelcomeProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
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
            Hola! soy
          </Typography>
          <Typography
            variant="h2"
            fontWeight={700}
            align="center"
            fontFamily="IBM Plex Sans"
          >
            Jason Solarte
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            fontFamily="IBM Plex Sans"
          >
            {'Soy desarrollador '}
            <span
              style={{
                color: theme.palette.primary.main,
                borderRight: `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <WordPartialShow
                words={['front-end.', 'back-end.', 'full-stack.']}
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
              backgroundColor: colors[theme.palette.mode].blue[800],
              cursor: 'pointer',
              position: 'absolute',
              top: 'calc(50% + 176px)',
              left: 'calc(50% - 50px)',
            }}
          >
            <span className="slide-top">
              <ChevronDownOutline height="30px" width="30px" />
            </span>
          </Box>
        </Box>
      </ContentLimitator>
    </Box>
  );
};

export default Welcome;
