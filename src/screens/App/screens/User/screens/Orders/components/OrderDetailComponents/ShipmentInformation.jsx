import React from "react";
import InformationBody from "./InformationBody";

function ShipmentInformation() {
  return (
    <div className="flex flex-col gap-6">
      {/* street address */}
      <div>
        <InformationBody
          title="Street Address"
          value="Lot 1, Block 14, Jade St., Juana 1"
        />
      </div>

      {/* barangay & city-municipality */}
      <div className="flex flex-row gap-24">
        <InformationBody title="Barangay" value="San Francisco" />
        <InformationBody title="City/Municipality" value="Biñan" />
      </div>

      {/* province */}
      <div>
        <InformationBody title="Province" value="Laguna" />
      </div>
    </div>
  );
}
export default ShipmentInformation;
