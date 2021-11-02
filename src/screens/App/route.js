// components' route
import HomeRoute from "./screens/Home/route";
import CatalogueRoute from "./screens/Catalogue/route";

import SignUpRoute from "./screens/SignUp/route";
import LoginRoute from "./screens/Login/route";
import SignOutRoute from "./screens/SignOut/route";
import PasswordRoute from "./screens/Password/route";

import CheckoutRoute from "./screens/Checkout/route";

import UserIndexRoute from "./screens/User/route";

const route = {
  HOME: HomeRoute,
  CATALOGUE: CatalogueRoute,
  CatalogueRoute,
  SIGN_UP: SignUpRoute,
  LOGIN: LoginRoute,
  USER: UserIndexRoute,
  PASSWORD: PasswordRoute,
  SIGN_OUT: SignOutRoute,
  CHECKOUT: CheckoutRoute,
};

export default route;
