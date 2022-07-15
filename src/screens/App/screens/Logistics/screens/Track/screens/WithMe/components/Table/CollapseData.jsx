import React from "react";
import CompactTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/CompactTable";
import { formatDate } from "../../../../../../../../../../shared/utils/date";

const OrderCollapseData = ({ data: orders, toggleCollapse }) => {
  return (
    <>
      <Close onClick={() => toggleCollapse("ORDERS", false)} />

      {/* table */}
      <CompactTable elevate="rounded-md">
        <Head grid="grid-cols-6">
          <Heading className="col-span-1">Order ID</Heading>
          <Heading className="col-span-1">QTY</Heading>
          <Heading className="col-span-2">Date Placed</Heading>
          <Heading className="col-span-2">ETA Date</Heading>
        </Head>

        <Body>
          {orders.map(
            ({ products, _order: { _id: orderId, ETADate, orderDate } }, i) => (
              <Row key={i} grid="grid-cols-6">
                <Data className="col-span-1 text-xs font-light break-all">
                  {orderId}
                </Data>
                <Data className="col-span-1 break-words text-center">
                  {products.length}
                </Data>
                <Data className="col-span-2 text-sm break-all">
                  {formatDate(orderDate)}
                </Data>
                <Data className="col-span-2 text-sm break-all">
                  {formatDate(ETADate)}
                </Data>
              </Row>
            )
          )}
        </Body>
      </CompactTable>
    </>
  );
};

const AttemptsCollapseData = ({ data: attempts, toggleCollapse }) => {
  return (
    <>
      <Close onClick={() => toggleCollapse("ATTEMPTS", false)} />

      {/* table */}
      <CompactTable elevate="rounded-md">
        <Head grid="grid-cols-3">
          <Heading className="col-span-1">Date</Heading>
          <Heading className="col-span-2">Reason</Heading>
        </Head>

        <Body>
          {attempts.map(({ _id, reason, attemptDate: date }) => (
            <Row key={_id} grid="grid-cols-3">
              <Data className="col-span-1 text-sm break-all">
                {formatDate(date)}
              </Data>
              <Data className="col-span-2 text-sm break-words">{reason}</Data>
            </Row>
          ))}
        </Body>
      </CompactTable>
    </>
  );
};

const Close = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-1 px-1.5 bg-my-white-tone rounded 
            inline-flex gap-1 items-center 
            text-xs font-medium text-black
            transition duration-200 ease-linear
            hover:shadow-md hover:bg-gray-200
            active:bg-red-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      CLOSE
    </button>
  );
};

export { OrderCollapseData, AttemptsCollapseData };
