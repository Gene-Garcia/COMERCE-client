import routes from "../../../../../../shared/routes";
import Showcase from "./index";

const route = {
  path: routes.CATALOGUE.subroutes.PRODUCT_SHOWCASE.path,
  component: Showcase,
  exact: true,
};

export default route;
