import routes from "../../../../shared/Route/routes";
import SignUp from "./index";

// subroutes
import SellerSignUp from "./screens/Seller/route";
import UserSignUp from "./screens/User/route";

const route = {
  path: routes.SIGN_UP.path,
  component: SignUp,
  exact: true,

  subroutes: {
    SELLER: SellerSignUp,
    USER: UserSignUp,
  },
};
export default route;
