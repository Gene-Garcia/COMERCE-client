import { useContext } from "react";
import OrdersContext from "../context/OrdersContext";

/*
 *
 *
 */
function useOrders() {
  const {
    orders,
    setOrders,
    order,
    setOrder,
    loading,
    setLoading,
    setOrdersWrapper,
    setSelectedOrder,
    computeSubTotal,
    getOrderById,
  } = useContext(OrdersContext);

  return {
    orders,
    setOrders,
    order,
    setOrder,
    loading,
    setLoading,
    setOrdersWrapper,
    setSelectedOrder,
    computeSubTotal,
    getOrderById,
  };
}
export default useOrders;
