import routes from "../../shared/routes";

// components' route
import SignUpRoute from "./screens/SignUp/route";
import SignInRoute from "./screens/SignIn/route";
import PasswordRoute from "./screens/Password/route";

import UserIndexRoute from "./screens/User/route";

export default {
  SIGN_UP: SignUpRoute,
  SIGN_IN: SignInRoute,
  USER: UserIndexRoute,
  PASSWORD: PasswordRoute,
};
