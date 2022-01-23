import { combineReducers } from "redux";
import alertReducer from "./Alert/AlertReducer";
import checkoutReducer from "./Checkout/CheckoutReducer";
import manageInventoryReducer from "./Seller/ManageInventory/ManageInventoryReducer";
import orderHistoryReducer from "./OrderHistory/OrderHistoryReducer";

const reducers = combineReducers({
  ALERT: alertReducer,
  CHECKOUT: checkoutReducer,
  MANAGE_INVENTORY: manageInventoryReducer,
  ORDER_HISTORY: orderHistoryReducer,
});
export default reducers;
