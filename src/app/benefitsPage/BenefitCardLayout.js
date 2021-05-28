import { Grid } from '@material-ui/core';

import React from 'react';

const BenefitCardLayout = ({ upper, lower }) => {
  return (
    <Grid
      item
      container
      xs={true}
      spacing={3}
      direction='column'
      justify='center'
      alignItems='center'
      alignContent='center'
      style={{ margin: 0 }}
    >
      <Grid item>{upper}</Grid>
      <Grid item>{lower}</Grid>
    </Grid>
  );
};

export default BenefitCardLayout;
