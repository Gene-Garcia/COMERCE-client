import React from "react";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { PersonalCTA } from "./CallToAction";

const Personal = () => {
  return (
    <>
      {/* form */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="fName"
            value=""
            onChange={() => {}}
            placeholder="Your first name"
            background="bg-gray-100"
            label="First Name"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="lName"
            value=""
            onChange={() => {}}
            placeholder="Your last name"
            background="bg-gray-100"
            label="Last Name"
            error=""
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="text"
          name="streetAddress"
          value=""
          onChange={() => {}}
          placeholder="Your street level address"
          background="bg-gray-100"
          label="Street Address"
          error=""
          width="w-full"
        />

        <div className="flex flex-row justify-between gap-5">
          <EmbossedInput
            type="text"
            name="barangay"
            value=""
            onChange={() => {}}
            placeholder="The name of your barangay"
            background="bg-gray-100"
            label="Barangay"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="cityMunicipality"
            value=""
            onChange={() => {}}
            placeholder="Name of your city or municipality"
            background="bg-gray-100"
            label="City/Municipality"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="text"
            name="province"
            value=""
            onChange={() => {}}
            placeholder="Name of your province"
            background="bg-gray-100"
            label="Province"
            error=""
            width="w-full"
          />
        </div>

        <div className="flex flex-row justify-between gap-5">
          <EmbossedInput
            type="number"
            name="primaryNumber"
            value=""
            onChange={() => {}}
            placeholder="Your primary contact number"
            background="bg-gray-100"
            label="Primary Contact Number"
            error=""
            width="w-full"
            icon={
              <span className="mx-2 font-medium text-my-accent text-base">
                +63
              </span>
            }
          />

          <EmbossedInput
            type="number"
            name="secondaryNumber"
            value=""
            onChange={() => {}}
            placeholder="Secondary contact number"
            background="bg-gray-100"
            label="Secondary Contact Number"
            error=""
            width="w-full"
            icon={
              <span className="mx-2 font-medium text-my-accent text-base">
                +63
              </span>
            }
          />
        </div>
      </div>

      {/* cta */}
      <PersonalCTA onClick={() => {}} />
    </>
  );
};
export default Personal;
