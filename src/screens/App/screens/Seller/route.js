import routes from "../../../../shared/Route/routes";

// subroutes
import RegisterSubroute from "./screens/Register/route";

const route = {
  path: undefined,
  component: undefined,
  exact: true,
  subroutes: {
    REGISTER: RegisterSubroute,
  },
};
export default route;
