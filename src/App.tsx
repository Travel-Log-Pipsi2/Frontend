import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'constants/routes';
import {
  ForgotPasswordPage,
  LandingPage,
  LoginPage,
  MainPage,
  RegisterPage,
  ResetPasswordPage,
} from 'views';
import { PrivateRoute } from 'components/router';
import { AuhtProvider } from 'utils/hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import { AddTravelProvider } from 'utils/hooks/useAddTravel';
import useTheme, { ThemeContextProvider } from 'utils/hooks/useTheme';
import Header from './components/layout/Header';
import { GlobalStyles } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function InnerWrapper() {
  const { currTheme } = useTheme();

  return (
    <ThemeProvider theme={currTheme}>
      <ToastContainer />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path={routes.landing} component={LandingPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.forgotPass} component={ForgotPasswordPage} />
        <Route exact path={routes.resetPass} component={ResetPasswordPage} />
        <PrivateRoute path={routes.home} component={MainPage} />
      </Switch>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AuhtProvider>
        <ThemeContextProvider>
          <AddTravelProvider>
            <InnerWrapper />
          </AddTravelProvider>
        </ThemeContextProvider>
      </AuhtProvider>
    </Router>
  );
}

export default App;
