import routes from "../../../../shared/routes";
import UserIndex from "./index";

export default {
  path: routes.USER.path,
  component: UserIndex,
  exact: true,
};
