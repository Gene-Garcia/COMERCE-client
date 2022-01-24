import { combineReducers } from "redux";
import alertReducer from "./Alert/AlertReducer";
import checkoutReducer from "./Checkout/CheckoutReducer";
import manageInventoryReducer from "./Seller/ManageInventory/ManageInventoryReducer";
import orderHistoryReducer from "./OrderHistory/OrderHistoryReducer";
import manageProductReducer from "./Seller/ManageProduct/ManageProductReducer";
import paginationReducer from "./Pagination/PaginationReducer";

const reducers = combineReducers({
  ALERT: alertReducer,

  PAGINATION: paginationReducer,

  CHECKOUT: checkoutReducer,
  ORDER_HISTORY: orderHistoryReducer,

  MANAGE_INVENTORY: manageInventoryReducer,
  MANAGE_PRODUCT: manageProductReducer,
});
export default reducers;
