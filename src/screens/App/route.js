// components' route
import HomeRoute from "./screens/Home/route";
import CatalogueRoute from "./screens/Catalogue/route";

import SignUpRoute from "./screens/SignUp/route";
import SignInRoute from "./screens/SignIn/route";
import PasswordRoute from "./screens/Password/route";

import UserIndexRoute from "./screens/User/route";

const route = {
  HOME: HomeRoute,
  CATALOGUE: CatalogueRoute,
  CatalogueRoute,
  SIGN_UP: SignUpRoute,
  SIGN_IN: SignInRoute,
  USER: UserIndexRoute,
  PASSWORD: PasswordRoute,
};

export default route;
