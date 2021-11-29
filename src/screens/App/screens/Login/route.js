import routes from "../../../../shared/Route/routes";
import Login from "./index";

// subroutes
import SellerLoginRoute from "./screens/Seller/route";
import UserLoginRoute from "./screens/User/route";

const route = {
  path: routes.LOGIN.path,
  component: Login,
  exact: true,

  subroutes: {
    SELLER: SellerLoginRoute,
    USER: UserLoginRoute,
  },
};
export default route;
