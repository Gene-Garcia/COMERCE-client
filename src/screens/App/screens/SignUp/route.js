// subroutes
import SellerSignUp from "./screens/Seller/route";
import UserSignUp from "./screens/User/route";

const route = {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    SELLER: SellerSignUp,
    USER: UserSignUp,
  },
};
export default route;
