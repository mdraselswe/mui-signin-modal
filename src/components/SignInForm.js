import { Link, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import PrimaryInput from './inputs/PrimaryInput';

const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  color: '#7d7d7d',
  fontSize: '13px',
  letterSpacing: '.3px',
  display: 'block',
  textAlign: 'right',
  marginTop: '10px',
}));

const SignInForm = ({ error, back }) => {
  return (
    <form style={{ textAlign: 'center' }}>
      <Stack spacing={2}>
        {error ? (
          <PrimaryInput
            error
            helperText='Incorrect! Try again'
            placeholder='Enter your email address…'
            icon='mail'
            iWidth={16}
            iHeight={10}
          />
        ) : (
          <PrimaryInput
            fullWidth
            placeholder='Enter your email address…'
            icon='mail'
            iWidth={16}
            iHeight={10}
          />
        )}
        {back && (
          <PrimaryInput
            placeholder='Enter your password'
            fullWidth
            icon='password'
            iWidth={16}
            iHeight={5}
            type='password'
          />
        )}
      </Stack>

      <ForgotPasswordLink href='#' underline='none'>
        Forgot email address?
      </ForgotPasswordLink>
      <PrimaryButton
        sx={{
          marginTop: '10px',
        }}
      >
        Continue
      </PrimaryButton>
    </form>
  );
};

export default SignInForm;
