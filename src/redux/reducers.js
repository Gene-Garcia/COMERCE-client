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

  ORDERS_MASTER: ordersMasterReducer,

  // Logistics reducers
  LOGISTICS_REGISTRATION: logisticsRegistrationReducer,
});
export default reducers;
