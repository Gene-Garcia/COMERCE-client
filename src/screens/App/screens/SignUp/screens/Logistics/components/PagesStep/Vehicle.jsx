import React from "react";

import { batch, useDispatch } from "react-redux";
import { loadVehicleData } from "../../../../../../../../redux/Logistics/LogisticsRegistration/LogisticsRegistrationAction";
import { proceedToNextStep } from "../../../../../../../../redux/Steps/StepsAction";

import { useForm } from "../../../../../../../../hooks/useForm";

import { EmbossedInput } from "../../../../../../../../shared/Components/input/Inputs";
import { VehicleCTA } from "./CallToAction";

const Vehicle = () => {
  // redux
  const dispatch = useDispatch();

  const SubmitVehicleForm = async () => {
    batch(() => {
      dispatch(loadVehicleData(values));
      dispatch(proceedToNextStep(3));
    });
  };

  const validate = (data, setErrors) => {
    const temp = { ...errors };

    if ("maker" in data) temp.maker = data.maker ? "" : "Required";

    if ("plateNumber" in data)
      temp.plateNumber = data.plateNumber ? "" : "Required";

    if ("classification" in data)
      temp.classification = data.classification ? "" : "Required";

    if ("registeredOwner" in data)
      temp.registeredOwner = data.registeredOwner ? "" : "Required";

    if ("fuel" in data) temp.fuel = data.fuel ? "" : "Required";

    if ("engineCapacity" in data) {
      temp.engineCapacity = data.engineCapacity ? "" : "Required";

      if (!temp.engineCapacity)
        temp.engineCapacity = isNaN(data.engineCapacity)
          ? "Must be numeric"
          : "";

      const engineCCParsed = parseInt(data.engineCapacity);
      if (!temp.engineCapacity)
        temp.engineCapacity =
          engineCCParsed <= 0 ? "Must be greater than 1" : "";
    }

    if ("transmission" in data)
      temp.transmission = data.transmission ? "" : "Required";

    setErrors(temp);
  };

  const initial = {
    maker: "",
    plateNumber: "",
    classification: "",
    registeredOwner: "",
    fuel: "",
    engineCapacity: "",
    transmission: "",
  };
  // use form
  const { values, errors, handleInput, handleFormSubmit } = useForm(
    initial,
    initial,
    validate,
    SubmitVehicleForm
  );

  return (
    <>
      {/* form field */}
      <div className="flex flex-col gap-5">
        <EmbossedInput
          type="text"
          name="maker"
          value={values.maker}
          onChange={handleInput}
          placeholder="Car manufacturer"
          background="bg-gray-100"
          label="Maker"
          error={errors.maker}
          width="w-full"
        />

        <div className="flex flex-row gap-4 justify-between">
          <EmbossedInput
            type="text"
            name="plateNumber"
            value={values.plateNumber}
            onChange={handleInput}
            placeholder="Car plate number"
            background="bg-gray-100"
            label="Plate Number"
            error={errors.plateNumber}
            width="w-full"
          />

          <EmbossedInput
            type="datalist"
            name="classification"
            value={values.classification}
            onChange={handleInput}
            placeholder="Car classification"
            background="bg-gray-100"
            label="Classification"
            error={errors.classification}
            width="w-full"
            listId="car-classifications"
            listData={[]}
          />
        </div>

        <EmbossedInput
          type="text"
          name="registeredOwner"
          value={values.registeredOwner}
          onChange={handleInput}
          placeholder="Registered car owner"
          background="bg-gray-100"
          label="Registered Owner"
          error={errors.registeredOwner}
          width="w-full"
        />

        <div className="flex flex-row gap-4 justify-between">
          <EmbossedInput
            type="text"
            name="fuel"
            value={values.fuel}
            onChange={handleInput}
            placeholder="Used car fuel"
            background="bg-gray-100"
            label="Fuel"
            error={errors.fuel}
            width="w-full"
          />

          <EmbossedInput
            type="number"
            name="engineCapacity"
            value={values.engineCapacity}
            onChange={handleInput}
            placeholder="Car engine CC"
            background="bg-gray-100"
            label="Engine CC"
            error={errors.engineCapacity}
            width="w-full"
          />
        </div>

        <EmbossedInput
          type="datalist"
          name="transmission"
          value={values.transmission}
          onChange={handleInput}
          placeholder="Car transmission"
          background="bg-gray-100"
          label="Transmission"
          error={errors.transmission}
          width="w-8/12"
          listId="car-transmissions"
          listData={[]}
        />
      </div>

      {/* cta */}
      <VehicleCTA onClick={handleFormSubmit} />
    </>
  );
};
export default Vehicle;
