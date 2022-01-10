import { ComponentType, memo } from "react";
import { Route, Redirect } from "react-router-dom";
import { routePaths } from "../../constants/routes";
import { verifyAuthentication } from "../../utils/authorization";
import { IRoute } from "../routes";

interface RoutePrivateProps extends IRoute {
  wrapComponent?: ComponentType<any>;
}

function PrivateRouteComponent({
  component: Component,
  exact,
  path,
  wrapComponent: WrapComponent,
  permission,
  ...rest
}: RoutePrivateProps): JSX.Element {
  return (
    <Route
      {...rest}
      path={path}
      exact={exact || false}
      render={(props) =>
        verifyAuthentication(permission) ? (
          WrapComponent ? (
            <WrapComponent>
              <Component {...(props as any)} />
            </WrapComponent>
          ) : (
            <Component {...(props as any)} />
          )
        ) : (
          <Redirect to={{ pathname: routePaths.login }} />
        )
      }
    />
  );
}

export const PrivateRoute = memo(PrivateRouteComponent);
