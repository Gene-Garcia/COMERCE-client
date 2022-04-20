import React from "react";
import { FormButton } from "../../../../../../../../../../../../shared/Components/button/ButtonBase";
import { InputFirst } from "../../../../../../../../../../../../shared/Components/input/InputBase";

const AddressCard = () => {
  return (
    <div className="space-y-4">
      <InputFirst
        type="text"
        name={""}
        value={""}
        onChange={""}
        inputStyle="bg-transparent rounded-t-sm px-2 text-base"
        border="py-1.5 border-b-2 rounded-t shadow"
        label="Street Address"
        error={""}
        focusWithin="focus-within:border-my-accent"
      />

      <div className="flex flex-row justify-between gap-4">
        <InputFirst
          type="text"
          name={""}
          value={""}
          onChange={""}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="BARANGAY"
          error={""}
          focusWithin="focus-within:border-my-accent"
          width="w-full"
        />

        <InputFirst
          type="text"
          name={""}
          value={""}
          onChange={""}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="CITY/MUNICIPALITY"
          error={""}
          focusWithin="focus-within:border-my-accent"
          width="w-full"
        />
      </div>

      <InputFirst
        type="text"
        name={""}
        value={""}
        onChange={""}
        inputStyle="bg-transparent rounded-t-sm px-2 text-base"
        border="py-1.5 border-b-2 rounded-t shadow"
        label="PROVINCE"
        error={""}
        focusWithin="focus-within:border-my-accent"
        width="w-1/2"
      />

      <div className="ml-auto w-max">
        <FormButton
          size="REGULAR"
          text="SAVE CHANGES"
          uppercase="uppercase"
          onClick={() => {}}
          textColor="text-white"
          type="BUTTON"
        />
      </div>
    </div>
  );
};
export default AddressCard;
