import React from "react";
import { useSelector } from "react-redux";
import InformationBody from "./InformationBody";

function ShipmentInformation() {
  // redux order reducer & states
  const loading = useSelector((s) => s.ORDER_HISTORY.loading);
  const order = useSelector((s) => s.ORDER_HISTORY.selectedOrder);

  return (
    <>
      {loading || !order ? (
        <>Loading...</>
      ) : (
        <div className="flex flex-col gap-4 xl:gap-6">
          {/* street address */}
          <div>
            <InformationBody
              title="Street Address"
              value={order.shipmentDetails.streetAddress}
            />
          </div>

          {/* barangay & city-municipality */}
          <div className="flex flex-col lg:flex-row gap-y-4 gap-x-24">
            <InformationBody
              title="Barangay"
              value={order.shipmentDetails.barangay}
            />
            <InformationBody
              title="City/Municipality"
              value={order.shipmentDetails.cityMunicipality}
            />
          </div>

          {/* province */}
          <div>
            <InformationBody
              title="Province"
              value={order.shipmentDetails.province}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default ShipmentInformation;
