import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#0d47a1',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ffc107',
      dark: '#e62958',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
});

export default rawTheme;
