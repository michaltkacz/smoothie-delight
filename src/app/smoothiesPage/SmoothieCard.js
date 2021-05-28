import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
  Zoom,
} from '@material-ui/core';

import React from 'react';
const useStyles = makeStyles((theme) => ({
  card: {
    width: theme.spacing(32),
    height: theme.spacing(60),
    outlineStyle: 'solid',
    outlineWidth: '1px',

    '&:hover': { outlineWidth: '3px' },
  },
  header: {
    fontFamily: 'Pacifico',
  },
  image: {
    backgroundPosition: 'bottom center',
    height: '70%',
    width: '100%',
  },
}));
const SmoothieCard = ({ image, title, description, show, style }) => {
  const classes = useStyles();

  return (
    <Zoom in={show}>
      <Card square className={`${classes.card} ${style}`}>
        <CardHeader
          title={title}
          titleTypographyProps={{ className: classes.header, align: 'center' }}
        />
        <CardMedia className={classes.image} image={image} />
        <CardContent>
          <Typography variant='body1' color='textSecondary'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default SmoothieCard;
