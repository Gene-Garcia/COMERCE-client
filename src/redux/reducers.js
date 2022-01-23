import { combineReducers } from "redux";
import alertReducer from "./Alert/AlertReducer";
import checkoutReducer from "./Checkout/CheckoutReducer";
import manageInventoryReducer from "./Seller/ManageInventory/ManageInventoryReducer";

const reducers = combineReducers({
  ALERT: alertReducer,
  CHECKOUT: checkoutReducer,
  MANAGE_INVENTORY: manageInventoryReducer,
});
export default reducers;
