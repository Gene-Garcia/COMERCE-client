// subroutes
import SellerSignUp from "./screens/Seller/route";
import UserSignUp from "./screens/User/route";
import LogisticsSignUp from "./screens/Logistics/route";

const route = {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    SELLER: SellerSignUp,
    USER: UserSignUp,
    LOGISTICS: LogisticsSignUp,
  },
};
export default route;
