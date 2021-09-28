import { Stack } from '@mui/material';
import React from 'react';
import AuthenticationButton from './buttons/AuthenticationButton';
const SignInButtonList = () => {
  return (
    <Stack spacing={2}>
      <AuthenticationButton fullWidth icon='google' iWidth={16} iHeight={16}>
        Sign in with Google
      </AuthenticationButton>

      <AuthenticationButton fullWidth icon='fb' iWidth={8} iHeight={16}>
        Sign in with Facebook
      </AuthenticationButton>

      <AuthenticationButton fullWidth icon='twitter' iWidth={16} iHeight={16}>
        Sign in with Twitter
      </AuthenticationButton>
    </Stack>
  );
};

export default SignInButtonList;
