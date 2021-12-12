import React from "react";
import {
  AreaInput,
  DataListInput,
  DefaultInput,
  GalleryInput,
  NameInput,
  PriceInput,
  SubmitCTA,
} from "../ProductForm";

function AddProduct() {
  return (
    <div>
      <div className="flex flex-row gap-20 justify-between">
        <div className="w-1/2 space-y-6">
          <NameInput />

          <PriceInput />

          <DataListInput />

          <DefaultInput label="BRAND" />

          <AreaInput />

          <DefaultInput
            label="Keywords"
            helper="seperate tags using a coma ',' "
          />
        </div>

        <div className="w-1/2 space-y-6">
          <GalleryInput />

          <div className="border-b border-gray-300 rounded"></div>

          <SubmitCTA />
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
