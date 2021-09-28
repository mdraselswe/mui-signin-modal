import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Icon from '../Icon';

const CapsuleButton = styled(Button)(({ theme }) => ({
  color: '#000',
  borderRadius: 100,
  fontSize: 12,
  border: 'solid 1px #979797',
  padding: '.375rem 1.3rem',
  letterSpacing: '.3px',
  textTransform: 'inherit',
  justifyContent: 'flex-start',
  '&:hover': {
    borderColor: '#979797',
  },
  '& .MuiButton-startIcon': {
    marginRight: 23,
  },
}));

export default function AuthenticationButton({
  children,
  icon,
  iWidth,
  iHeight,
  ...otherProps
}) {
  return (
    <CapsuleButton
      variant='outlined'
      startIcon={<Icon name={icon} width={iWidth} height={iHeight} />}
      {...otherProps}
    >
      {children}
    </CapsuleButton>
  );
}
