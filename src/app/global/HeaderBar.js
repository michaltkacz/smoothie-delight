import React from 'react';

import SmoothScrollLink from './SmoothScrollLink';

const useStyles = makeStyles((theme) => ({
  outerBar: {
    background: 'rgb(0, 0, 0, 0.3)',
    boxShadow: 'none',
  },
  innerBar: {
    width: '95%',
    margin: '0 auto',
  },
  companyName: {
    fontFamily: 'Chela One',
    color: theme.palette.secondary.main,
  },
}));

const HeaderBar = () => {
  const classes = useStyles();
  return (
    <Slide direction='down' in={true}>
      <AppBar className={classes.outerBar}>
        <Toolbar className={classes.innerBar}>
          <SmoothScrollLink to='page1'>
            <Typography variant='h5' className={classes.companyName}>
              Zmoothiee Drinks
            </Typography>
          </SmoothScrollLink>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default HeaderBar;
