import routes from "../../../../shared/Route/routes";
import UserIndex from "./index";

// subroute
import ChangePasswordRoute from "./screens/ChangePassword/route";
import CartRoute from "./screens/Cart/route";
import CheckoutRoute from "./screens/Checkout/route";
import OrdersRoute from "./screens/Orders/route";

const route = {
  path: routes.USER.path,
  component: UserIndex,
  exact: true,
  subroutes: {
    CHANGE_PASSWORD: ChangePasswordRoute,
    CART: CartRoute,
    CHECKOUT: CheckoutRoute,
    ORDERS: OrdersRoute,
  },
};
export default route;
