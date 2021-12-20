import routes from "../../../../../../shared/Route/routes";

import ProductSubRoute from "./screens/Product/route";
import InventorySubRoute from "./screens/Inventory/route";

export default {
  path: undefined,
  component: undefined,
  exact: undefined,

  subroutes: {
    PRODUCT: ProductSubRoute,
    INVENTORY: InventorySubRoute,
  },
};
