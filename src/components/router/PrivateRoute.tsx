/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from 'utils/hooks/useAuth';
import { routes } from 'constants/routes';

interface Props {
  component: React.ElementType;
  [x: string]: unknown;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
};
export default PrivateRoute;
