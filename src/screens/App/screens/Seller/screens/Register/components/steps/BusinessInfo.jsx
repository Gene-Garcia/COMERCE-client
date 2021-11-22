import React from "react";
import InputField, {
  FileInput,
} from "../../../../../../../../shared/Components/seller/InputField";
import { BusinessInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";

function BusinessInfo() {
  return (
    <div className="flex flex-col justify-between gap-10">
      <Title name="Business Information" />

      <div className="flex flex-col gap-8">
        <FileInput
          name="logo"
          label="BUSINESS LOGO"
          helper="JPEG and PNG files only"
        />

        <div className="flex flex-row gap-10">
          <InputField
            type="text"
            name="businessName"
            label="BUSINESS NAME"
            placeholder="name of your business"
            className="w-5/12"
          />

          <InputField
            type="date"
            name="established"
            label="ESTABLISHMENT DATE"
            placeholder="date of launching"
            className="w-5/12"
          />
        </div>

        <InputField
          type="text"
          name="tagline"
          label="TAGLINE"
          placeholder="a tagline to catch customers' attention"
          className="w-full"
        />
      </div>

      <BusinessInfoCTA />
    </div>
  );
}
export default BusinessInfo;
