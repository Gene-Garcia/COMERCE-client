import routes from "../../../../../../shared/Route/routes";

import ProductSubRoute from "./screens/Product/route";

export default {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    PRODUCT: ProductSubRoute,
  },
};
