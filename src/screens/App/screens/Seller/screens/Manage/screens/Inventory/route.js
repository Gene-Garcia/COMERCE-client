import routes from "../../../../../../../../shared/Route/routes";
import Inventory from ".";

export default {
  path: routes.SELLER.subroutes.MANAGE.subroutes.INVENTORY.path,
  component: Inventory,
  exact: true,
};
