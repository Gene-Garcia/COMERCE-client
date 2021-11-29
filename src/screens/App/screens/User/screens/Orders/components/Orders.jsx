import React, { useEffect } from "react";
import useOrders from "../../../../../../../hooks/useOrders";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";
import Loading from "../../../../../../../shared/Loading/Loading";
import OrderDetails from "./OrderDetails";
import OrderLinks from "./OrderLinks";
import axios from "../../../../../../../shared/caller";
import useAlert from "../../../../../../../hooks/useAlert";
import useQuery from "../../../../../../../hooks/useQuery";

function Orders({ history }) {
  // query to get parameter in url
  const query = useQuery();
  // alert context message
  const { setMessage, setSeverity } = useAlert();
  // orders context
  const { loading, setLoading, setOrdersWrapper, setSelectedOrder } =
    useOrders();

  // use effect to fetch all the user's order. also includes validation if there is a logged in user
  useEffect(() => {
    async function getOrders() {
      await axios
        .get("/api/order/orders")
        .then((res) => {
          if (res.status === 200) {
            setOrdersWrapper(res.data.orders);

            // determine if there is oid parameter
            if (query.get("oid"))
              setSelectedOrder(
                res.data.orders.find((e) => e._id == query.get("oid"))
              );
            // no oid so set a default
            else
              setSelectedOrder(
                res.data.orders.length > 0 ? res.data.orders[0] : null
              );

            setLoading(false);
          }
        })
        .catch((err) => {
          setSeverity("error");

          if (!err.response) {
            setMessage(
              "We apologise but we cannot retrieve your orders. Try again later."
            );
            history.push("/");
          } else if (err.response.status === 401 || err.response.status === 403)
            history.push("/login/user");
          else setMessage(err.response.data.error);
        });
    }

    getOrders();
    console.log(query.get("oid"));
  }, []);

  return (
    <>
      <Title title="User Orders" />

      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-1/4 rounded-lg shadow-md md:shadow-lg md:place-self-start flex-shrink-0">
                <OrderLinks />
              </div>

              <div className="w-3/4 flex-grow-0 flex-shrink">
                <OrderDetails />
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  );
}
export default Orders;
