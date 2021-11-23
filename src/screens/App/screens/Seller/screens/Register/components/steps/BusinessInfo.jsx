import React from "react";
import useAlert from "../../../../../../../../hooks/useAlert";
import { useForm } from "../../../../../../../../hooks/useForm";
import useSellerRegistration from "../../../../../../../../hooks/useSellerRegistration";
import InputField, {
  FileInput,
} from "../../../../../../../../shared/Components/seller/InputField";
import { BusinessInfoCTA } from "../utils/CTA";
import Title from "../utils/Title";

function BusinessInfo() {
  // alert message
  const { setMessage, setSeverity } = useAlert();

  // seller context
  // const {} = useSellerRegistration()

  // file input on change
  const fileOnChange = (e) => {
    console.log(e);
  };

  // submit function
  const createBusiness = () => {
    setSeverity("success");
    setMessage("Accounted created succesfully");
  };

  const init = { businessName: "", established: "", tagline: "" };

  const validate = (data, setErrors) => {
    let temp = { ...errors };

    if ("businessName" in data)
      temp.businessName = data.businessName ? "" : "Business name is required";

    if ("established" in data)
      temp.established = data.established ? "" : "Date is required";

    if ("tagline" in data)
      temp.tagline = data.tagline ? "" : "Put N/A if unavailable";

    setErrors(temp);
  };

  const { values, errors, handleInput, handleFormSubmit } = useForm(
    init,
    init,
    validate,
    createBusiness
  );

  return (
    <div className="flex flex-col justify-between gap-10">
      <Title name="Business Information" />

      <div className="flex flex-col gap-8">
        <FileInput
          name="logo"
          onChange={fileOnChange}
          label="BUSINESS LOGO"
          helper="JPEG and PNG files only"
        />

        <div className="flex flex-row gap-10">
          <InputField
            type="text"
            name="businessName"
            value={values.businessName}
            error={errors.businessName}
            onChange={handleInput}
            label="BUSINESS NAME"
            placeholder="name of your business"
            className="w-1/2"
          />

          <InputField
            type="date"
            name="established"
            value={values.established}
            error={errors.established}
            onChange={handleInput}
            label="ESTABLISHMENT DATE"
            placeholder="date of launching"
            className="w-1/2"
          />
        </div>

        <InputField
          type="text"
          name="tagline"
          value={values.tagline}
          error={errors.tagline}
          onChange={handleInput}
          label="TAGLINE"
          placeholder="a tagline to catch customers' attention"
          className="w-full"
        />
      </div>

      <BusinessInfoCTA onClick={handleFormSubmit} />
    </div>
  );
}
export default BusinessInfo;
