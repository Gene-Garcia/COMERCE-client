import React from "react";
import useOrders from "../../../../../../../../hooks/useOrders";
import InformationBody from "./InformationBody";

function ShipmentInformation() {
  const { order, loading } = useOrders();

  return (
    <>
      {loading || !order ? (
        <></>
      ) : (
        <div className="flex flex-col gap-6">
          {/* street address */}
          <div>
            <InformationBody
              title="Street Address"
              value={order.shipmentDetails.streetAddress}
            />
          </div>

          {/* barangay & city-municipality */}
          <div className="flex flex-row gap-24">
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
