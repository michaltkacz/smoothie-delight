import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import React, { useState } from 'react';

import Page from '../global/Page';
import NewsletterPageLayout from './NewsletterPageLayout';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Pacifico',
    color: theme.palette.primary.dark,
    marginBottom: '2rem',
  },
  card: {
    margin: '0 1rem',
    padding: '2rem 3rem',
    background: 'radial-gradient(white -10%, lightgray 100%)',
  },
}));

const NewsletterPage = ({ id }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [signUpResult, setSignUpResult] = useState('init');
  const [signUpResultMessage, setSignUpResultMessage] = useState('');

  const validateEmail = () => {
    const pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    return pattern.test(email);
  };

  const singUpForNewsletter = async () => {
    if (!email) {
      setSignUpResult('error');
      setSignUpResultMessage('Please, type in your email');
      return;
    }

    if (!validateEmail()) {
      setSignUpResult('error');
      setSignUpResultMessage('Email is invalid');
      return;
    }

    // simulate success
    setTimeout(() => {
      setEmail('');
      setSignUpResult('success');
      setSignUpResultMessage(
        'Success! Check your inbox to receive a coupon :)'
      );
    }, 200);

    //  --- typical behaviour with backend ---
    // const data = { email };
    // try {
    //   const response = await fetch('endpoint-url', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const message = await response.text();

    //   setSignUpResultMessage(message);
    //   response.status === 200
    //     ? setSignUpResult('success')
    //     : setSignUpResult('error');
    // } catch (error) {
    //   setSignUpResult('error');
    //   setSignUpResultMessage('Unknown error occured. Please, try again later');
    // }
  };

  const alerts = {
    success: (
      <Alert
        onClose={() => setSignUpResult('init')}
        variant='filled'
        severity='success'
      >
        {signUpResultMessage}
      </Alert>
    ),
    error: (
      <Alert
        onClose={() => setSignUpResult('init')}
        variant='filled'
        severity='error'
      >
        {signUpResultMessage}
      </Alert>
    ),
  };

  return (
    <Page id={id}>
      <NewsletterPageLayout>
        <Paper square className={classes.card}>
          <Typography variant='h3' align='center' className={classes.title}>
            Sing up for newsletter
          </Typography>
          <Typography variant='body1' align='center'>
            Sing up now and receive an extra coupon for your two favourite, free
            smoothies!
          </Typography>
          <FormControl fullWidth error={signUpResult === 'error'}>
            <InputLabel htmlFor='email-input'>Email address</InputLabel>
            <Input
              type='email'
              required
              fullWidth
              error={signUpResult === 'error'}
              placeholder='example@mail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email-input'
              aria-describedby='email-helper-text'
            />
            <FormHelperText id='email-helper-text'>
              We'll never share your email
            </FormHelperText>
            <Button color='primary' onClick={singUpForNewsletter}>
              Sign up!
            </Button>
          </FormControl>
          {alerts[signUpResult]}
        </Paper>
      </NewsletterPageLayout>
    </Page>
  );
};

export default NewsletterPage;
