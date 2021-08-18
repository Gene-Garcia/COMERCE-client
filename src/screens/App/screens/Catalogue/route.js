import routes from "../../../../shared/routes";
import Catalogue from "./index";

import ShowcaseRoute from "./screens/ProductShowcase/route";

const route = {
  path: routes.CATALOGUE.path,
  component: Catalogue,
  exact: true,
  subroutes: {
    PRODUCT_SHOWCASE: ShowcaseRoute,
  },
};

export default route;
