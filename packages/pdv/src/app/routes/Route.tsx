import { ComponentType, memo } from 'react';
import { Route as RootRoute } from 'react-router-dom';

import { IRoute } from 'vy/app/routes/routes'

interface RouteProps extends Omit<IRoute, 'permission'> {
  wrapper?: ComponentType;
}

export function BaseRoute({
  component: Component,
  exact,
  path,
  wrapper: WrapComponent,
  ...rest
}: RouteProps): JSX.Element {

  return (
    <RootRoute
      {...rest}
      path={path}
      exact={exact || false}
      render={props =>
        WrapComponent ? (
          <WrapComponent>
            <Component {...props} />
          </WrapComponent>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export const Route = memo(BaseRoute);
