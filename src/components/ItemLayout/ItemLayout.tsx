import { Box, Typography, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import * as colors from '../../utils/constants/colors.json';
import './style/index.css';

interface IItemLayoutProps {
  icon: ReactNode;
  startDate: string;
  endDate?: string;
  title: string;
  subtitle: string;
  text?: string;
}

const ItemLayout: React.FC<IItemLayoutProps> = ({
  icon,
  startDate,
  endDate,
  title,
  subtitle,
  text,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        padding: '25px 0',
        borderBottom: `1px solid ${colors[theme.palette.mode].black[200]}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: '60px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: colors[theme.palette.mode].blue[600],
        }}
      >
        {icon}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          flexGrow: 1,
        }}
      >
        <Box>
          <Typography
            color={colors[theme.palette.mode].blue[600]}
            fontWeight={700}
            variant="h6"
          >
            {`${startDate}${endDate ? ` - ${endDate}` : ''}`}
          </Typography>
          <Typography fontWeight={700} variant="h5">
            {title}
          </Typography>
          <Typography fontWeight={600} variant="h6">
            {subtitle}
          </Typography>
        </Box>
        {text && (
          <Typography
            fontWeight={300}
            variant="body1"
            color={colors[theme.palette.mode].black[700]}
          >
            {text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ItemLayout;
