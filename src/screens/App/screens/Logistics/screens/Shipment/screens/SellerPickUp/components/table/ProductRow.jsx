import React from "react";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";

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
  return (
    <Row grid="grid-cols-14">
      <Data className="col-span-1 text-center">
        <input type="checkbox" checked={checked} className="" />
      </Data>
      <Data className="col-span-1 font-light text-xs break-all">
        {businessId}
      </Data>

      <Data className="col-span-4">{`${pickUpAddress.street}, ${pickUpAddress.barangay}, ${pickUpAddress.cityMunicipality}, ${pickUpAddress.province}`}</Data>

      <Data className="col-span-1">{productQuantity}</Data>
      <Data className="col-span-2">{businessName}</Data>
      <Data className="col-span-2">{contactNumber}</Data>
      <Data className="col-span-2">{email}</Data>

      <Data className="col-span-1">
        <ActionGroup>
          <Action type="BUTTON" text="PICK UP" onClick={() => {}} />
        </ActionGroup>
      </Data>
    </Row>
  );
};
export default ProductRow;
