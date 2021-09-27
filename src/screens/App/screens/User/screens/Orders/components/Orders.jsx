import React from "react";
import Container from "../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../shared/Components/pages/Title";
import OrderDetails from "./OrderDetailComponents/OrderDetails";
import OrderLinks from "./OrderLinks";

function Orders() {
  return (
    <>
      <Title title="User Orders" />

      <Container>
        <div className="flex flex-row gap-8">
          <div className="w-1/4">
            <OrderLinks />
          </div>

          <div className="w-3/4">
            <OrderDetails />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Orders;
