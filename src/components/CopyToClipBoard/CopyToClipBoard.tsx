import { CssVarsProvider, Snackbar } from '@mui/joy';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ICopyToClipboardButton {
  textToCopy: string;
  label: string;
  // eslint-disable-next-line
  textProperties: any;
}

const CopyToClipboardButton: React.FC<ICopyToClipboardButton> = ({
  label,
  textToCopy,
  textProperties,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <>
      <CssVarsProvider>
        <Typography onClick={handleClick} {...textProperties}>
          {label}
        </Typography>
        <Snackbar
          color="primary"
          variant="solid"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={1000}
        >
          {t('copied')}
        </Snackbar>
      </CssVarsProvider>
    </>
  );
};

export default CopyToClipboardButton;
