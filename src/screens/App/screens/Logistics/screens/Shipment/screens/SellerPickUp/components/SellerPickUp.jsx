import React from "react";
import { LogisticsContainer } from "../../../../../../../../../shared/Components/pages/Container";
import { LogisticsTitle } from "../../../../../../../../../shared/Components/pages/Title";

const SellerPickUp = () => {
  return (
    <LogisticsContainer>
      <LogisticsTitle title="Orders for Pick Up" />
      <div className="my-6 xs:my-10 border-b border-gray-300"></div>

      <table className="w-full">
        <thead>
          <tr className="text-sm text-gray-400 font-medium">
            <th className="">
              <input type="checkbox" className="h-4 w-4 mt-1" />
            </th>

            <th>Order ID</th>

            <th>ETA Date</th>

            <th>Seller</th>

            <th>Pick Up Address</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <Tr />
          <Tr />
          <Tr />
        </tbody>
      </table>
    </LogisticsContainer>
  );
};
export default SellerPickUp;

const Tr = () => {
  return (
    <tr>
      <td>
        <input type="checkbox" className="w-3 h-3" />
      </td>
    </tr>
  );
};
