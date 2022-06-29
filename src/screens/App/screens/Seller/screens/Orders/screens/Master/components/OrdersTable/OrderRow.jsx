import React, { useState } from "react";
import {
  Data,
  Row,
} from "../../../../../../../../../../shared/Components/table/SpaciousTable";
import {
  Action,
  ActionGroup,
} from "../../../../../../../../../../shared/Components/table/TableActions";
import { methods } from "../../../../../../../../../../shared/utils/payment";
import { formatPrice } from "../../../../../../../../../../shared/utils/price";
import CollapseRow from "./CollapseRow";

const OrderRow = ({ data }) => {
  // deconstruct
  const {
    _id: orderId,
    shipmentDetails: {
      firstName,
      lastName,
      province,
      cityMunicipality,
      barangay,
    },
    paymentMethod,
    orderedProducts,
  } = data;

  // computer order total
  let orderTotal = 0;
  orderedProducts.forEach((product) => {
    orderTotal = orderTotal + (product.quantity + product.priceAtPoint);
  });

  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Row grid="grid-cols-9">
        <Data className="col-span-1 text-xs font-light break-all">
          {orderId}
        </Data>
        <Data className="col-span-2">{`${firstName} ${lastName}`}</Data>
        <Data className="col-span-2">{`${barangay}, ${cityMunicipality}, ${province}`}</Data>
        <Data className="col-span-1 text-my-accent">
          ₱{formatPrice(orderTotal)}
        </Data>
        <Data className="col-span-1">{methods[paymentMethod]}</Data>
        <Data className="col-span-2">
          <ActionGroup>
            <Action type="BUTTON" text="Edit" onClick={() => {}} />
            <Action
              type="BUTTON"
              text="Ordered Products"
              onClick={() => {
                setToggled((prev) => !prev);
              }}
            />
          </ActionGroup>
        </Data>
      </Row>

      {toggled && (
        <Row grid="grid-cols-9">
          <CollapseRow orderId={data._id} />
        </Row>
      )}
    </>
  );
};
export default OrderRow;
