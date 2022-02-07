import React from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../../../../../shared/utils/date";
import InformationBody from "./InformationBody";

function OrderInformation() {
  // redux order reducer & states
  const loading = useSelector((s = s.ORDER_HISTORY.loading));
  const order = useSelector((s = s.ORDER_HISTORY.selectedOrder));

  return (
    <>
      {loading || !order ? (
        <>Loading...</>
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
