import React, { Fragment } from "react";
import CompactTable, {
  Body,
  Data,
  Head,
  Heading,
  Row,
} from "../../../../../../../../../../shared/Components/table/CompactTable";

const CollapseParcelRow = ({ orders }) => {
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
            {Object.entries(orders).map(([key, products]) => (
              <Row key={key} grid="grid-cols-4">
                {products.map((product) => (
                  <Fragment key={product.productId}>
                    <Data className={`col-span-1 break-all text-xs font-light`}>
                      {key}
                    </Data>
                    <Data className="col-span-1 break-all text-xs font-light">
                      {product.productId}
                    </Data>
                    <Data className="col-span-2">{product.itemName}</Data>
                  </Fragment>
                ))}
              </Row>
            ))}
          </Body>
        </CompactTable>
      </Data>
    </Row>
  );
};
export default CollapseParcelRow;
