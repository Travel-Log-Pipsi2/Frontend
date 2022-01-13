import { Map } from 'components';
import { routes } from 'constants/routes';
import { createContext, Suspense, useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import AddTravel from './Main/AddTravel';
import Friends from './Main/Friends';
import Profile from './Main/Profile';
import Travels from './Main/Travels';

const SectionStyled = styled.section`
  h2 {
    color: ${(props) => props.theme.colors.black};
    text-align: center;
  }

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

export const FriendMarkersCtx = createContext(null);

const MainPage = (): JSX.Element => {
  const [friendMarkers, setFriendMarkers] = useState(null);

  return (
    <SectionStyled>
      <Suspense fallback="Loading...">
        <FriendMarkersCtx.Provider value={{ friendMarkers, setFriendMarkers }}>
          <Map />

          <div className="control-wrapper">
            <Switch>
              <Route exact path={routes.addTravel} component={AddTravel} />
              <Route exact path={routes.travels} component={Travels} />
              <Route exact path={routes.friends} component={Friends} />
              <Route exact path={routes.profile} component={Profile} />
              <Route
                exact
                path={`${routes.friendProfile}/:id`}
                component={Profile}
              />
            </Switch>
          </div>
        </FriendMarkersCtx.Provider>
      </Suspense>
    </SectionStyled>
  );
};

export default MainPage;
