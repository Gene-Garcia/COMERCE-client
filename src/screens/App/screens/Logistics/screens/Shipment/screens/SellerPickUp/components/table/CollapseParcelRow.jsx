import React from "react";
import CompactTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/CompactTable";

const CollapseParcelRow = ({ products }) => {
  return (
    <Row grid="grid-cols-4">
      <Data className="col-span-2">
        <CompactTable>
          <Head grid="grid-cols-4">
            <Heading className="col-span-1">Order ID</Heading>
            <Heading className="col-span-1">Product ID</Heading>
            <Heading className="col-span-2">Item Name</Heading>
          </Head>

          <Body>
            {products.map((product) => (
              <ParcelRow key={product.productId} product={product} />
            ))}
          </Body>
        </CompactTable>
      </Data>
    </Row>
  );
};
export default CollapseParcelRow;

const ParcelRow = ({ product }) => {
  return (
    <Row grid="grid-cols-4">
      <Data className="col-span-1 break-all text-xs font-light">
        {product.orderId}
      </Data>
      <Data className="col-span-1 break-all text-xs font-light">
        {product.productId}
      </Data>
      <Data className="col-span-2">{product.itemName}</Data>
    </Row>
  );
};
