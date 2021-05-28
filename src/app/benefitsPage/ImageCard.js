import { Card, CardMedia, makeStyles, Zoom } from '@material-ui/core';

import React from 'react';
const useStyles = makeStyles((theme) => ({
  card: {
    width: theme.spacing(32),
    height: theme.spacing(40),
    outline: 'solid 1px white',

    '&:hover': { outlineWidth: '3px' },
  },
  header: {
    fontFamily: 'Pacifico',
  },
  image: {
    backgroundPosition: 'top center',
    height: '100%',
    width: '100%',
  },
}));
const ImageCard = ({ image, show, style }) => {
  const classes = useStyles();

  return (
    <Zoom in={show}>
      <Card square className={`${classes.card} ${style}`}>
        <CardMedia className={classes.image} image={image} />
      </Card>
    </Zoom>
  );
};

export default ImageCard;
