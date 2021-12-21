import React from "react";
import { useForm } from "../../../../../../../../../../hooks/useForm";
import Button from "../../../../../../../../../../shared/Components/button/Button";
import { DefaultInput } from "../../../../../../../../../../shared/Components/seller/InputField";

function AddInventoryForm() {
  // makes the value of the onHand same as the inventory
  const copyQuantity = () => {
    if (values.inventory != "" && !isNaN(values.inventory)) {
      setValues((prev) => ({ ...prev, ["onHand"]: prev.inventory }));
    }
  };

  const SubmitNewInventory = () => {};

  const validate = (data, setErrors) => {
    let tempErrs = { ...errors };

    if ("inventory" in data) {
      tempErrs.inventory = data.inventory ? "" : "Required";

      if (!tempErrs.inventory)
        tempErrs.inventory = isNaN(data.inventory) ? "Must be numeric" : "";

      if (!tempErrs.inventory) {
        const temp = parseInt(data.inventory);
        tempErrs.inventory = temp < 0 ? "No negative value" : "";
      }
    }

    if ("onHand" in data) {
      tempErrs.onHand = data.onHand ? "" : "Required";

      if (!tempErrs.onHand)
        tempErrs.onHand = isNaN(data.onHand) ? "Must be numeric" : "";

      if (!tempErrs.onHand) {
        const temp = parseInt(data.onHand);
        tempErrs.onHand = temp < 0 ? "No negative value" : "";
      }

      if (!tempErrs.onHand) {
        const tempOnHand = parseInt(data.onHand);
        const tempInventory = parseInt(values.inventory);
        tempErrs.onHand =
          tempOnHand > tempInventory ? "Higher than inventory" : "";
      }
    }

    setErrors(tempErrs);
  };

  const init = {
    onHand: "",
    inventory: "",
  };
  const {
    values,
    errors,
    isLoading,
    setIsLoading,
    resetForms,
    handleInput,
    handleFormSubmit,
    setValues,
  } = useForm(init, init, validate, SubmitNewInventory);

  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-semibold text-gray-600 text-md">Add Inventory</p>

      <div className="inline-flex items-center gap-8">
        <DefaultInput
          type="number"
          label="Inventory"
          width="w-auto"
          name="inventory"
          value={values.inventory}
          error={errors.inventory}
          onChange={handleInput}
        />

        <button
          onClick={copyQuantity}
          className="text-gray-700 rounded p-2 
        place-self-end
        transition duration-150 ease-linear
        active:text-my-accent hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>

        <DefaultInput
          type="number"
          label="Onhand"
          width="w-auto"
          name="onHand"
          value={values.onHand}
          error={errors.onHand}
          onChange={handleInput}
        />
      </div>

      <Button
        isLoading={isLoading}
        onClick={handleFormSubmit}
        buttonClass="uppercase text-sm font-semibold text-white
      bg-my-accent py-2.5 px-7 w-max rounded
      transition duration-200 ease-linear
      hover:ring-2 hover:ring-my-accent hover:ring-offset-2 hover:ring-opacity-70
      active:bg-my-accent-mono hover:ring-my-accent-mono"
      >
        Save Inventory
      </Button>
    </div>
  );
}

export default AddInventoryForm;
