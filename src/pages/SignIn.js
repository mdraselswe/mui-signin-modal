import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import EmailSignInForm from '../components/SignInForm';
import Icon from '../components/Icon';
import SignInButtonList from '../components/SignInButtonList';
import { styled } from '@mui/material/styles';

const SignUpLink = styled(Link)(({ theme }) => ({
  color: '#000',
  fontSize: '14px',
  letterSpacing: '.2px',
  marginTop: '10px',
  fontWeight: 'bold',
}));

const SignUpText = styled(Typography)(({ theme }) => ({
  color: '#7d7d7d',
  fontSize: '14px',
  letterSpacing: '.2px',
  marginTop: '10px',
  display: 'inline-block',
  marginRight: '3px',
}));

const PrivacyLink = styled(Link)(({ theme }) => ({
  color: '#00000066',
  fontSize: '12px',
  fontStyle: 'italic',
  margin: '0 3px',
}));

const BackToSignIn = styled(Button)(({ theme }) => ({
  color: '#000',
  fontSize: '14px',
  marginTop: '10px',
  textTransform: 'inherit',
}));
const SignIn = ({ error, back }) => {
  return (
    <Box
      sx={{
        padding: '15px 55px',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          marginBottom: '44px',
        }}
      >
        <Icon name='logo' width={141} height={17} />
      </Box>

      <Box>
        <Typography
          variant='h6'
          component='h3'
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#0d0321',
            marginBottom: '35px',
          }}
        >
          To continue, please sign in here…
        </Typography>
      </Box>

      <Box>
        <EmailSignInForm error={error} back={back} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '35px',
          marginBottom: '40px',
        }}
      >
        <Box
          sx={{
            width: '50%',
            borderBottom: '1px solid #00000026',
          }}
        />
        <Box
          sx={{
            margin: '0 20px',
            fontSize: '12px',
          }}
        >
          Or
        </Box>
        <Box
          sx={{
            width: '50%',
            borderBottom: '1px solid #00000026',
          }}
        />
      </Box>

      <Box sx={{ maxWidth: '205px', margin: '31px auto' }}>
        {back ? (
          <BackToSignIn
            variant='text'
            startIcon={<Icon name='back' width={15} height={15} />}
          >
            Back to sign in option
          </BackToSignIn>
        ) : (
          <SignInButtonList />
        )}
      </Box>

      <Box>
        <SignUpText>Don’t have an account?</SignUpText>
        <SignUpLink href='#' underline='none'>
          Sign Up!
        </SignUpLink>
      </Box>

      <Box>
        <Typography
          variant='body2'
          component='p'
          sx={{
            color: '#00000066',
            fontSize: '12px',
            maxWidth: '380px',
            margin: '30px auto 40px auto',
          }}
        >
          “Continue”, “Sign in” agree to Fusionread’s
          <PrivacyLink>terms & conditions</PrivacyLink>
          and aware that we may use <PrivacyLink>privacy policy</PrivacyLink> to
          you
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;
