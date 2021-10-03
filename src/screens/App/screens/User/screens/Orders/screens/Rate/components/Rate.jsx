import React from "react";
import Container from "../../../../../../../../../shared/Components/pages/Container";
import Title from "../../../../../../../../../shared/Components/pages/Title";
import ProductLinks from "./ProductLinks";
import SelectedProduct from "./SelectedProduct";

function Rate() {
  return (
    <>
      <Title title="Rate Orders" />

      <Container>
        <div className="flex flex-row gap-12">
          <div className="w-2/5">
            <div className="rounded-lg shadow-lg p-8">
              <p className="font-medium text-lg text-gray-600 mb-6">
                Products To Rate
              </p>

              <ProductLinks />
            </div>
          </div>

          <div className="w-3/5">
            <div className="rounded-lg shadow-lg p-8">
              <p className="font-medium text-lg text-gray-600">
                Selected Product
              </p>

              <SelectedProduct />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Rate;
