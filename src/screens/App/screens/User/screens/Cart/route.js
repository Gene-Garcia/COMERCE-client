import routes from "../../../../../../shared/Route/routes";
import Cart from ".";

const route = {
  path: routes.USER.subroutes.CART.path,
  component: Cart,
  exact: true,
};
export default route;
