import { Map } from 'components';
import { routes } from 'constants/routes';
import { Route, Switch } from 'react-router-dom';
import AddTravel from './Main/AddTravel';

const MainPage = (): JSX.Element => {
  console.log('ASD');

  return (
    <section>
      <Map />
      <Switch>
        <Route exact path={routes.addTravel} component={AddTravel} />
      </Switch>
    </section>
  );
};

export default MainPage;
