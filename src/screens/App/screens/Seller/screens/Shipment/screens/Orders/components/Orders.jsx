import React, { useEffect, useState } from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import HeaderButton from "../../../../../../../../../shared/Components/seller/HeaderButton";
import OrderTable from "./utils/OrderTable";
import axios from "../../../../../../../../../shared/caller";
import useAlert from "../../../../../../../../../hooks/useAlert";

const Orders = ({ history }) => {
  // alert context
  const { setMessage, setSeverity } = useAlert();

  const [temp, setTemp] = useState([]);

  // api call to get the pending for shipment orders of this user/seller
  useEffect(() => {
    async function getPendingOrders() {
      await axios
        .get("/api/seller/orders/pending")
        .then((res) => {
          if (res.status === 200) setTemp(res.data.orders);
        })
        .catch((err) => {
          setSeverity("error");
          if (!err.response)
            setMessage(
              "Something went wrong. Please refresh your browser and try again."
            );
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else setMessage(err.response.data.error);
        });
    }

    getPendingOrders();
  }, []);
  return (
    <SellerContainer>
      <div className="flex flex-col xs:flex-row justify-between items-center gap-4 xs:gap-0">
        <SellerTitle title="Orders for Shipment" />

        <div className="space-x-4 flex flex-row justify-center items-center">
          <HeaderButton type="BUTTON" title="Ship Selected" />
        </div>
      </div>

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div>
        <OrderTable orders={temp} />
      </div>
    </SellerContainer>
  );
};
export default Orders;
