import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface IContentLimitatorProps {
  children: ReactNode;
  maxWidth?: number;
}

const ContentLimitator: React.FC<IContentLimitatorProps> = ({
  children,
  maxWidth,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '0 30px',
        maxWidth: maxWidth ? maxWidth : '1230px',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default ContentLimitator;