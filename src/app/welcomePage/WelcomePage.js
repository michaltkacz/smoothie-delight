import {
  IconButton,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import React from 'react';

import Page from '../global/Page';
import SmoothScrollLink from '../global/SmoothScrollLink';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Pattaya',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    textShadow: `2px 2px 1px ${theme.palette.primary.dark}`,
    marginBottom: '0.5rem',
  },
  text: {
    fontFamily: 'Pacifico',
    fontSize: '1.2rem',
    color: theme.palette.primary.main,
  },
  companyName: {
    fontFamily: 'Chela One',
    color: theme.palette.secondary.main,
  },
  container: {
    textAlign: 'center',
  },
  textLink: {
    fontFamily: 'Pacifico',
    color: theme.palette.primary.main,
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.primary.light,
      cursor: 'pointer',
    },
  },
}));

const WelcomePage = ({ id }) => {
  const classes = useStyles();

  return (
    <Page id={id} direction='column'>
      <Grid item>
        <Slide direction='right' in={true}>
          <div className={classes.container}>
            <Typography variant='h1' align='center' className={classes.title}>
              Smoothie Delight
            </Typography>
            <Typography variant='body1' align='center' className={classes.text}>
              brand new line of smoothies coming from
            </Typography>
            <Typography
              variant='h2'
              align='center'
              className={classes.companyName}
            >
              Zmoothiee Drinks
            </Typography>
            <SmoothScrollLink to='page2'>
              <IconButton
                variant='outlined'
                color='primary'
                aria-label='scroll down to next page'
              >
                <ExpandMoreOutlinedIcon style={{ fontSize: 50 }} />
              </IconButton>
            </SmoothScrollLink>
          </div>
        </Slide>
      </Grid>
    </Page>
  );
};

export default WelcomePage;
