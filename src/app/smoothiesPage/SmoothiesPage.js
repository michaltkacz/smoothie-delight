import { makeStyles } from '@material-ui/core';
import { green, deepOrange, yellow, red } from '@material-ui/core/colors';

import React from 'react';

import Page from '../global/Page';
import mediaImage1 from '../../assets/smoothie-green.jpg';
import mediaImage2 from '../../assets/smoothie-orange.jpg';
import mediaImage4 from '../../assets/smoothie-red4.jpg';
import mediaImage3 from '../../assets/smoothie-yellow.jpg';
import useWindowPosition from '../../hook/useWindowPosition';

import SmoothieCard from './SmoothieCard';
import SmoothiesPageLayout from './SmoothiesPageLayout';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Pacifico',
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  cardGreen: {
    color: 'black',
    background: green[800],
    outlineColor: green[900],
  },
  cardOrange: {
    color: 'black',
    background: deepOrange[800],
    outlineColor: deepOrange[900],
  },
  cardYellow: {
    color: 'black',
    background: yellow[800],
    outlineColor: yellow[900],
  },
  cardRed: {
    color: 'black',
    background: red[800],
    outlineColor: red[900],
  },
}));

const SmoothiesPage = ({ id }) => {
  const classes = useStyles();
  const pageVisible = useWindowPosition('page2');
  return (
    <Page id={id}>
      <SmoothiesPageLayout
        smoothieCard1={
          <SmoothieCard
            image={mediaImage1}
            show={pageVisible}
            title='Calming Green'
            description='apple - kiwi - cucumber - mint - avocado - yoghurt'
            style={classes.cardGreen}
          />
        }
        smoothieCard2={
          <SmoothieCard
            image={mediaImage2}
            show={pageVisible}
            title='Restorative Orange'
            description='strawberry - peach - carrot - yoghurt'
            style={classes.cardOrange}
          />
        }
        smoothieCard3={
          <SmoothieCard
            show={pageVisible}
            image={mediaImage3}
            title='Refreshing Yellow'
            description='lemon - lime - orange - yoghurt'
            style={classes.cardYellow}
          />
        }
        smoothieCard4={
          <SmoothieCard
            show={pageVisible}
            image={mediaImage4}
            title='Energizing Red'
            description='strawberry - wild strawberry - raspberry - yoghurt'
            style={classes.cardRed}
          />
        }
      />
    </Page>
  );
};

export default SmoothiesPage;
