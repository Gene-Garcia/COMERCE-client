import { createContext, useState } from "react";

const OrdersContext = createContext();
export default OrdersContext;

function OrdersProvider({ children }) {
  // array of object of an order
  const [orders, setOrders] = useState([]);
  // state varible to hold the select order.
  // the default value is null, to easily check if there is an order selected
  // using empty object as default will incur another util function that will loop the object to determine if it has keys
  const [order, setOrder] = useState(null);
  // loading state variable for fetching data
  const [loading, setLoading] = useState(true);

  // Wrapper Functions
  const setOrdersWrapper = (data) => {
    setOrders(data);
  };

  const setSelectedOrder = (selected) => {
    setOrder(selected);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        order,
        setOrder,
        loading,
        setLoading,
        setOrdersWrapper,
        setSelectedOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
export { OrdersProvider };
