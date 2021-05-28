import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import React from 'react';

import bgImage from '../assets/smoothie-lg.jpg';
import myTheme from '../theme/myTheme';

import BenefitsPage from './benefitsPage/BenefitsPage';
import HeaderBar from './global/HeaderBar';
import NewsletterPage from './newsletterPage/NewsletterPage';
import SmoothiesPage from './smoothiesPage/SmoothiesPage';
import WelcomePage from './welcomePage/WelcomePage';

const useStyles = makeStyles({
  root: {
    minHeight: '400vh',
    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%), url("${bgImage}")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <HeaderBar />
        <WelcomePage id='page1' />
        <SmoothiesPage id='page2' />
        <BenefitsPage id='page3' />
        <NewsletterPage id='page4' />
      </div>
    </ThemeProvider>
  );
};

export default App;
