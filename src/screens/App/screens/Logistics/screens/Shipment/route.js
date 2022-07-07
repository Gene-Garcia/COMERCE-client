import routes from "../../../../../../shared/Route/routes";

// Subroutes
import CustomerDeliverySubroute from "./screens/CustomerDelivery/route";
import SellerPickUpSubroute from "./screens/SellerPickUp/route";

export default {
  path: undefined,
  component: undefined,

  subroutes: {
    SELLER_PICK_UP: SellerPickUpSubroute,
    CUSTOMER_DELIVERY: CustomerDeliverySubroute,
  },
};
