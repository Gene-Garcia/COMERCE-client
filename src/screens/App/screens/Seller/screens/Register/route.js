import routes from "../../../../../../shared/Route/routes";
import Register from ".";

const route = {
  component: Register,
  path: routes.SELLER.subroutes.REGISTER.path,
  exact: true,
};
export default route;
