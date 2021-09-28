import { createContext, useState } from "react";

const OrdersContext = createContext();
export default OrdersContext;

function OrdersProvider({ children }) {
  // array of object of an order
  const [orders, setOrders] = useState([]);
  // loading state variable for fetching data
  const [loading, setLoading] = useState(true);

  return (
    <OrdersContext.Provider value={{ orders, setOrders, loading, setLoading }}>
      {children}
    </OrdersContext.Provider>
  );
}
export { OrdersProvider };
