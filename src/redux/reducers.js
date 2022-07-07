import { combineReducers } from "redux";
import alertReducer from "./Alert/AlertReducer";
import checkoutReducer from "./Checkout/CheckoutReducer";
import manageInventoryReducer from "./Seller/ManageInventory/ManageInventoryReducer";
import orderHistoryReducer from "./OrderHistory/OrderHistoryReducer";
import manageProductReducer from "./Seller/ManageProduct/ManageProductReducer";
import paginationReducer from "./Pagination/PaginationReducer";
import rateOrderReducer from "./RateOrder/RateOrderReducer";
import sellerRegistrationReducer from "./Seller/SellerRegistration/SellerRegistrationReducer";
import shoppingCartReducer, {
  cartCounterReducer,
} from "./ShoppingCart/ShoppingCartReducer";
import shipOrdersReducer from "./Seller/ShipOrders/ShipOrdersReducer";
import ordersMasterReducer from "./Seller/OrdersMaster/OrdersMasterReducer";
import logisticsRegistrationReducer from "./Logistics/LogisticsRegistration/LogisticsRegistrationReducer";
import packOrdersReducer from "./Seller/PackOrders/PackOrdersReducer";
import sellerPickUpReducer from "./Logistics/SellerPickUp/SellerPickUpReducer";

const reducers = combineReducers({
  ALERT: alertReducer,

  PAGINATION: paginationReducer,

  CART_COUNT: cartCounterReducer,

  CHECKOUT: checkoutReducer,
  SHOPPING_CART: shoppingCartReducer,
  ORDER_HISTORY: orderHistoryReducer,
  RATE_ORDER: rateOrderReducer,

  // Seller Reducers
  SELLER_REGISTRATION: sellerRegistrationReducer,

  MANAGE_INVENTORY: manageInventoryReducer,
  MANAGE_PRODUCT: manageProductReducer,

  SHIP_ORDERS: shipOrdersReducer,
  PACK_ORDERS: packOrdersReducer,

  ORDERS_MASTER: ordersMasterReducer,

  // Logistics reducers
  LOGISTICS_REGISTRATION: logisticsRegistrationReducer,
  SELLER_PICK_UP: sellerPickUpReducer,
});
export default reducers;
