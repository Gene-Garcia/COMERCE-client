import React from "react";
import { SellerContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { SellerTitle } from "../../../../../../../../../shared/Components/pages/Title";
import OrderTable from "./OrdersTable/OrderTable";
import OrderStatusButton from "./utils/OrderStatusButton";

const OrdersMaster = () => {

  return (
    <SellerContainer>
      <SellerTitle title="Orders Master Data" />

      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <div className="bg-my-white-tint rounded">
        {/* order status */}
        <OrderStatusButton />

        <div className="h-1.5 bg-my-white-tone"></div>

        <OrderTable />
      </div>
    </SellerContainer>
  );
};
export default OrdersMaster;
