import { Map } from 'components';
import { routes } from 'constants/routes';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AddTravel from './Main/AddTravel';
import Friends from './Main/Friends';
import Travels from './Main/Travels';

const SectionStyled = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
  }

  .control-wrapper {
    z-index: 5;
    padding: 56px 24px 80px;
    width: 100%;

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      overflow-y: auto;
      max-height: 100vh;
      max-width: 480px;
      width: 100%;
      box-shadow: 8px 0 16px rgba(0, 0, 0, 0.25);
    }
  }

  .map-wrapper {
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 100%;
    }
  }
`;

const MainPage = (): JSX.Element => {
  console.log('ASD');

  return (
    <SectionStyled>
      <Map />
      <div className="control-wrapper">
        <Switch>
          <Route exact path={routes.addTravel} component={AddTravel} />
          <Route exact path={routes.travels} component={Travels} />
          <Route exact path={routes.friends} component={Friends} />
        </Switch>
      </div>
    </SectionStyled>
  );
};

export default MainPage;
