import {
  Card,
  CardContent,
  makeStyles,
  Typography,
  Zoom,
} from '@material-ui/core';

import React from 'react';
const useStyles = makeStyles((theme) => ({
  card: {
    width: theme.spacing(32),
    height: theme.spacing(16),
    background: 'radial-gradient(white -10%, lightgray 100%)',
    outline: 'solid 1px white',

    '&:hover': { outlineWidth: '3px' },
  },
  header: {
    fontFamily: 'Pacifico',
    // color: theme.palette.primary.dark,
    marginBottom: '0.5rem',
  },
  text: {
    fontStyle: 'italic',
  },
}));
const TextCard = ({ title, description, show, style }) => {
  const classes = useStyles();

  return (
    <Zoom in={show}>
      <Card square className={`${classes.card} ${style}`}>
        <CardContent>
          <Typography variant='h5' align='center' className={classes.header}>
            {title}
          </Typography>
          <Typography variant='body2' align='center' className={classes.text}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default TextCard;
