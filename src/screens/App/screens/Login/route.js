// subroutes
import SellerLoginRoute from "./screens/Seller/route";
import UserLoginRoute from "./screens/User/route";

const route = {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    SELLER: SellerLoginRoute,
    USER: UserLoginRoute,
  },
};
export default route;
