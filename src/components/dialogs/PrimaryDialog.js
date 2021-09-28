import { Box, useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: 581,
  },
}));
const PrimaryDialog = React.memo((props) => {
  const {
    openPrimary,
    togglePrimary,
    hideCrossBtn,
    children,
    scrollType,
    ...otherProps
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CustomDialog
      open={openPrimary}
      scroll={scrollType}
      onClose={togglePrimary}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
      fullScreen={fullScreen}
      {...otherProps}
    >
      {!hideCrossBtn && (
        <Box
          sx={{
            color: '#000',
            cursor: 'pointer',
            zIndex: '999',
            fontSize: '13px',
            transition: 'all .5s',
            width: '25px',
            height: '25px',
            marginLeft: 'auto',
            textAlign: 'center',
            marginRight: '25px',
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            border: '1px solid #000',

            '&:hover': {
              color: '#000',
            },
          }}
          onClick={togglePrimary}
        >
          &#10005;
        </Box>
      )}
      {children}
    </CustomDialog>
  );
});

export default PrimaryDialog;
