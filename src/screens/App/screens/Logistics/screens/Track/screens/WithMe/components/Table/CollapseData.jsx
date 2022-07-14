import React from "react";
import CompactTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/CompactTable";

const OrderCollapseData = ({ toggleCollapse }) => {
  return (
    <>
      <Close onClick={() => toggleCollapse("ORDERS", false)} />

      {/* table */}
      <CompactTable elevate="rounded-md">
        <Head grid="grid-cols-2">
          <Heading className="col-span-1">Order ID</Heading>
          <Heading className="col-span-1">Quantity</Heading>
        </Head>

        <Body>
          {[0, 0].map((e, i) => (
            <Row key={i} grid="grid-cols-2">
              <Data className="col-span-1 text-xs font-light break-all">
                624914c0b6f1580e80ccfb6a
              </Data>
              <Data className="col-span-1 text-sm break-words">2 piece(s)</Data>
            </Row>
          ))}
        </Body>
      </CompactTable>
    </>
  );
};

const AttemptsCollapseData = ({ toggleCollapse }) => {
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
          {[0, 0].map((e, i) => (
            <Row key={i} grid="grid-cols-3">
              <Data className="col-span-1 text-xs font-light break-all">
                624914c0b6f1580e80ccfb6a
              </Data>
              <Data className="col-span-2 text-sm break-words">
                Customer cannot be contacted
              </Data>
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
