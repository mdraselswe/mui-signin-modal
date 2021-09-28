import { InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import React from 'react';
import Icon from '../Icon';

const CssTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#116954',
  },

  '& .MuiInputBase-root': {
    color: '#333333',
    backgroundColor: 'rgba(17, 105, 84, 0.05)',
    borderRadius: 3,
  },
  '& ::placeholder': {
    color: '#7d7d7d',
    letterSpacing: '0.22px',
    fontSize: 14,
    opacity: 1,
  },
  // When variant is outlined
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(17, 105, 84, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(17, 105, 84, 0.1)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(17, 105, 84, 0.1)',
      borderWidth: '1px',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '.532rem .8rem',
  },
  '& .MuiInputLabel-outlined': {
    transform: 'translate(14px, 15px) scale(1)',
  },
  '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
    transform: 'translate(14px, -6px) scale(.75)',
  },

  // Multiline Input
  '& .MuiOutlinedInput-multiline': {
    padding: 5,
  },

  // Helper Text
  '& .MuiFormHelperText-contained': {
    margin: '8px 0 0',
  },
  //   Adornment / icon
  '& .MuiInputAdornment-root': {
    marginRight: 3,
  },
  //  error
  '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ff5a47',
  },
  //   helper text error
  '& .MuiFormHelperText-root.Mui-error': {
    color: '#ff5a47',
    fontSize: 13,
  },
}));

const PrimaryInput = ({ icon = 'mail', iWidth, iHeight, ...otherProps }) => {
  return (
    <CssTextField
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Icon name={icon} width={iWidth} height={iHeight} />
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  );
};

export default PrimaryInput;
