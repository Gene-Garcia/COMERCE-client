import { createContext, useState } from "react";

const OrdersContext = createContext();
export default OrdersContext;

function OrdersProvider({ children }) {
  // array of object of an order
  const [orders, setOrders] = useState([]);
  // state varible to hold the select order
  const [order, setOrder] = useState({});
  // loading state variable for fetching data
  const [loading, setLoading] = useState(true);

  return (
    <OrdersContext.Provider
      value={{ orders, setOrders, order, setOrder, loading, setLoading }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
export { OrdersProvider };
