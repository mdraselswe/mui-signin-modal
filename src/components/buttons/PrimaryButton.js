import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const CapsuleButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  borderRadius: 100,
  fontSize: 13,
  border: 'solid 1px transparent',
  padding: '.165rem 2.3126rem',
  textTransform: 'capitalize',
  backgroundColor: '#116954',
  '&:hover': {
    border: '1px solid transparent',
    backgroundColor: '#26856e',
  },
}));

export default function PrimaryButton({ children, ...otherProps }) {
  return (
    <CapsuleButton variant='outlined' {...otherProps}>
      {children}
    </CapsuleButton>
  );
}
