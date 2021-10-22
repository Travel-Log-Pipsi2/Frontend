import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from 'constants/routes';
import { LandingPage, LoginPage, MainPage, RegisterPage } from 'views';
import { PrivateRoute } from 'components/router';
import { AuhtProvider } from 'utils/hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import Header from './components/layout/Header';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <AuhtProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalStyles />
          <Header />
          <Route path={routes.landing} component={LandingPage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.register} component={RegisterPage} />
          <PrivateRoute exact path={routes.home} component={MainPage} />
        </ThemeProvider>
      </AuhtProvider>
    </Router>
  );
}

export default App;
