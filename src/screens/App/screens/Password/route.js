// subroutes
import ForgotPasswordRoute from "./screens/ForgotPassword/route";
import ResetPasswordRoute from "./screens/ResetPassword/route";

export default {
  path: undefined,
  component: undefined,
  subroutes: {
    FORGOT_PASSWORD: ForgotPasswordRoute,
    RESET_PASSWORD: ResetPasswordRoute,
  },
};
