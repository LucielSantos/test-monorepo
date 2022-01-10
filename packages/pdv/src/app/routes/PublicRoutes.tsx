import { publicRoutes as routes } from "./routes";
import { Route } from './Route'

export const PublicRoutes = () =>
  routes.map((route, index) => 
      <Route  key={`public-route-${index}`} {...route} />
  );
