import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import colors from '../../utils/constants/colors.json';
import './style/index.css';
import config from '../../utils/constants/configs.json';
import CopyToClipboardButton from '../../components/CopyToClipBoard/CopyToClipBoard';
import { darkModeKey } from '../../utils';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  const theme = useTheme();

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:
          theme.palette.mode === darkModeKey
            ? colors[theme.palette.mode].black[200]
            : colors[theme.palette.mode].black[1000],
        color: colors[theme.palette.mode].black[100],
        padding: '80px 0',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '80%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            backgroundColor:
              theme.palette.mode === darkModeKey
                ? colors[theme.palette.mode].black[200]
                : colors[theme.palette.mode].black[1000],
            padding: '0 30px',
            position: 'relative',
            zIndex: 2000,
            width: 'max-content',
          }}
        >
          <InstagramIcon
            sx={{
              color:
                theme.palette.mode === darkModeKey
                  ? colors[theme.palette.mode].black[1000]
                  : colors[theme.palette.mode].black[100],
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              padding: '10px',
              '&:hover': {
                color:
                  theme.palette.mode === darkModeKey
                    ? colors[theme.palette.mode].red[100]
                    : colors[theme.palette.mode].red[500],
              },
            }}
            onClick={() => openInNewTab(config.links.instagram)}
          />
          <LinkedInIcon
            sx={{
              color:
                theme.palette.mode === darkModeKey
                  ? colors[theme.palette.mode].black[1000]
                  : colors[theme.palette.mode].black[100],
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              padding: '10px',
              '&:hover': {
                color:
                  theme.palette.mode === darkModeKey
                    ? colors[theme.palette.mode].blue[400]
                    : colors[theme.palette.mode].blue[700],
              },
            }}
            onClick={() => openInNewTab(config.links.linkedin)}
          />
          <GitHubIcon
            sx={{
              color:
                theme.palette.mode === darkModeKey
                  ? colors[theme.palette.mode].black[1000]
                  : colors[theme.palette.mode].black[100],
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              padding: '10px',
              '&:hover': {
                color:
                  theme.palette.mode === darkModeKey
                    ? colors[theme.palette.mode].blue[800]
                    : colors[theme.palette.mode].blue[500],
              },
            }}
            onClick={() => openInNewTab(config.links.github)}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            backgroundColor: colors[theme.palette.mode].black[600],
            width: '100%',
            height: '1px',
            top: 'calc(50% - 1px)',
            zIndex: 1000,
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          fontFamily="Protest Guerrilla"
          sx={{
            marginBottom: '20px',
            color:
              theme.palette.mode === darkModeKey
                ? colors[theme.palette.mode].black[1000]
                : colors[theme.palette.mode].black[100],
          }}
        >
          SOLARTE
        </Typography>
        <CopyToClipboardButton
          label={config.mail}
          textProperties={{
            color:
              theme.palette.mode === darkModeKey
                ? colors[theme.palette.mode].black[1000]
                : colors[theme.palette.mode].black[300],
            sx: {
              cursor: 'pointer',
            },
          }}
          textToCopy={config.mail}
        />
        <Typography
          color={
            theme.palette.mode === darkModeKey
              ? colors[theme.palette.mode].black[1000]
              : colors[theme.palette.mode].black[300]
          }
        >
          {config.phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
