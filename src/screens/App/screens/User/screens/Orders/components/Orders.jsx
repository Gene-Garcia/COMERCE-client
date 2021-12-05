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
          setLoading(false);

          if (!err.response)
            setMessage("Something went wrong. Please try again.");
          else if (err.response.status === 401) history.push("/forbidden");
          else if (err.response.status === 403) history.push("/unauthorized");
          else setMessage(err.response.data.error);
        });
    }

    getOrders();
    // console.log(query.get("oid"));
  }, []);

  return (
    <>
      <Title title="User Orders" />

      <Container xSpacing="p-4 sm:px-8 lg:px-14 xl:px-16">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-10 w-full">
            <div className="w-full md:w-2/5 lg:w-thirty xl:w-1/4 rounded-lg shadow-md md:shadow-lg">
              <OrderLinks />
            </div>

            <div className="w-full md:w-3/5 lg:w-seventy xl:w-3/4">
              <OrderDetails />
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
export default Orders;
