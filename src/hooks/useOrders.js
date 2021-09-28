import { useContext } from "react";
import OrdersContext from "../context/OrdersContext";

/*
 *
 *
 */
function useOrders() {
  const { orders, setOrders, loading, setLoading } = useContext(OrdersContext);

  return { orders, setOrders, loading, setLoading };
}
export default useOrders;
