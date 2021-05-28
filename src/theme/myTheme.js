import { createMuiTheme } from '@material-ui/core';
import { purple, deepOrange } from '@material-ui/core/colors';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
});

export default myTheme;
