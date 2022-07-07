// subroutes
import SellerLoginRoute from "./screens/Seller/route";
import UserLoginRoute from "./screens/User/route";
import LogisticRoute from "./screens/Logistics/route";

const route = {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    SELLER: SellerLoginRoute,
    USER: UserLoginRoute,
    LOGISTICS: LogisticRoute,
  },
};
export default route;
