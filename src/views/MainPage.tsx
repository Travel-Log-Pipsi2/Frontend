import { Map } from 'components';
import { routes } from 'constants/routes';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AddTravel from './Main/AddTravel';

const SectionStyled = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
  }

  .control-wrapper {
    z-index: 5;
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      max-width: 540px;
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
        </Switch>
      </div>
    </SectionStyled>
  );
};

export default MainPage;
