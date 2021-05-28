import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import React from 'react';
const useStyles = makeStyles((theme) => ({
  page: {
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
    },
  },
}));

const Page = ({ id, children, direction }) => {
  const classes = useStyles();
  return (
    <Grid
      id={id}
      container
      spacing={0}
      direction={direction || 'row'} // default - row
      justify='center'
      alignItems='center'
      alignContent='center'
      className={classes.page}
    >
      {children}
    </Grid>
  );
};

export default Page;
