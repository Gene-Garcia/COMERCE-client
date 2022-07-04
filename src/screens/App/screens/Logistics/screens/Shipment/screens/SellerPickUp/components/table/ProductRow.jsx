import React, { useState } from "react";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import CollapseParcelRow from "./CollapseParcelRow";

const ProductRow = ({
  businessId,
  product: {
    businessName,
    email,
    contactNumber,
    pickUpAddress,
    productQuantity,
    products,
    checked,
  },
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Row grid="grid-cols-14">
        <Data className="col-span-1 text-center">
          <input type="checkbox" checked={checked} className="" />
        </Data>
        <Data className="col-span-1 font-light text-xs break-all">
          {businessId}
        </Data>

        <Data className="col-span-3">{`${pickUpAddress.street}, ${pickUpAddress.barangay}, ${pickUpAddress.cityMunicipality}, ${pickUpAddress.province}`}</Data>

        <Data className="col-span-1">{productQuantity}</Data>
        <Data className="col-span-2">{businessName}</Data>
        <Data className="col-span-2">{contactNumber}</Data>
        <Data className="col-span-2">{email}</Data>

        <Data className="col-span-2">
          <ActionGroup>
            <Action
              type="BUTTON"
              text="Show Parcels"
              onClick={() => {
                setCollapsed((prev) => !prev);
              }}
            />
            <Action type="BUTTON" text="Pick Up" onClick={() => {}} />
          </ActionGroup>
        </Data>
      </Row>

      {collapsed && <CollapseParcelRow products={products} />}
    </>
  );
};
export default ProductRow;
