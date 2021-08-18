// subroutes
import ForgotPasswordRoute from "./screens/ForgotPassword/route";
import ResetPasswordRoute from "./screens/ResetPassword/route";

const route = {
  path: undefined,
  component: undefined,
  subroutes: {
    FORGOT_PASSWORD: ForgotPasswordRoute,
    RESET_PASSWORD: ResetPasswordRoute,
  },
};

export default route;
