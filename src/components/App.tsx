import * as React from 'react';
import 'components/styles.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { accentPurple, primaryPurple, secondaryBlue } from 'utils/styleUtils';
import LoginView from 'components/LoginView/LoginView';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import LectureView from "components/LectureView/LectureView";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryPurple,
      light: accentPurple,
      contrastText: '#ffff',
    },
    secondary: {
      main: secondaryBlue,
      contrastText: '#ffff',
    },
  },
});

const App: React.FunctionComponent = () => {
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  const view = loggedIn ? <LectureView/> : <LoginView/>;
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app-view">{view}</div>
    </MuiThemeProvider>
  );
};

export default App;
