import React from "react";
import InformationBody from "./InformationBody";

function OrderInformation() {
  return (
    <div className="flex flex-row gap-24">
      {/* date ordered */}
      <div>
        <InformationBody title="Date Ordered" value="September 18, 2021" />
      </div>

      {/* eta */}
      <div>
        <InformationBody
          title="Order Estimated Time of Delivery"
          value="September 23, 2021"
        />
      </div>
    </div>
  );
}
export default OrderInformation;
