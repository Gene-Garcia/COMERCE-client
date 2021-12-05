import React from "react";
import useOrders from "../../../../../../../../hooks/useOrders";
import { formatDate } from "../../../../../../../../shared/utils/date";
import InformationBody from "./InformationBody";

function OrderInformation() {
  const { order, loading } = useOrders();

  return (
    <>
      {loading || !order ? (
        <></>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-24">
          {/* date ordered */}
          <div>
            <InformationBody
              title="Date Ordered"
              value={formatDate(order.orderDate, 1)}
            />
          </div>

          {/* eta */}
          <div>
            <InformationBody
              title="Order Estimated Time of Delivery"
              value={formatDate(order.ETADate, 1)}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default OrderInformation;
