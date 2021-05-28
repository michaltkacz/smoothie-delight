import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  block: {
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
    },
    margin: 0,
  },
  leftBlock: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  rightBlock: {
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
}));

const SmoothiesPageLayout = ({
  smoothieCard1,
  smoothieCard2,
  smoothieCard3,
  smoothieCard4,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        container
        spacing={4}
        alignItems='center'
        alignContent='center'
        className={`${classes.block} ${classes.leftBlock}`}
      >
        <Grid item>{smoothieCard1}</Grid>
        <Grid item>{smoothieCard2}</Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        spacing={4}
        alignItems='center'
        alignContent='center'
        className={`${classes.block} ${classes.rightBlock}`}
      >
        <Grid item>{smoothieCard3}</Grid>
        <Grid item>{smoothieCard4}</Grid>
      </Grid>
    </>
  );
};

export default SmoothiesPageLayout;
