import React from "react";
import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { VehicleCTA } from "./CallToAction";

const Vehicle = () => {
  return (
    <>
      {/* form field */}
      <div className="flex flex-col gap-5">
        <EmbossedInput
          type="text"
          name="maker"
          value=""
          onChange={() => {}}
          placeholder="Car manufacturer"
          background="bg-gray-100"
          label="Maker"
          error=""
          width="w-full"
        />

        <div className="flex flex-row gap-4 justify-between">
          <EmbossedInput
            type="text"
            name="plateNo"
            value=""
            onChange={() => {}}
            placeholder="Car plate number"
            background="bg-gray-100"
            label="Plate Number"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="datalist"
            name="classification"
            value=""
            onChange={() => {}}
            placeholder="Car classification"
            background="bg-gray-100"
            label="Classification"
            error=""
            width="w-full"
            listId="car-classifications"
            listData={[]}
          />
        </div>

        <EmbossedInput
          type="text"
          name="owner"
          value=""
          onChange={() => {}}
          placeholder="Registered car owner"
          background="bg-gray-100"
          label="Registered Owner"
          error=""
          width="w-full"
        />

        <div className="flex flex-row gap-4 justify-between">
          <EmbossedInput
            type="text"
            name="fuel"
            value=""
            onChange={() => {}}
            placeholder="Used car fuel"
            background="bg-gray-100"
            label="Fuel"
            error=""
            width="w-full"
          />

          <EmbossedInput
            type="number"
            name="engineCC"
            value=""
            onChange={() => {}}
            placeholder="Car engine CC"
            background="bg-gray-100"
            label="Engine CC"
            error=""
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="datalist"
          name="transmission"
          value=""
          onChange={() => {}}
          placeholder="Car transmission"
          background="bg-gray-100"
          label="Transmission"
          error=""
          width="w-8/12"
          listId="car-transmissions"
          listData={[]}
        />
      </div>

      {/* cta */}
      <VehicleCTA />
    </>
  );
};
export default Vehicle;
