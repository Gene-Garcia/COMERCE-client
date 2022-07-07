import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../../../../../../../hooks/useForm";
import axios from "../../../../../../../../../../shared/caller";
import { EmbossedInput } from "../../../../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../../../../shared/Components/button/ButtonBase";
import { batch, useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../redux/Alert/AlertAction";
import {
  setSelectedProduct,
  triggerReload,
} from "../../../../../../../../../../redux/Seller/ManageInventory/ManageInventoryAction";

function AddInventoryForm() {
  const history = useHistory();

  // redux
  const dispatch = useDispatch();

  // redux manage inventory reducer & state
  const selected = useSelector(
    (state) => state.MANAGE_INVENTORY.selectedProduct
  );

  // makes the value of the onHand same as the inventory
  const copyQuantity = () => {
    if (values.inventory != "" && !isNaN(values.inventory)) {
      setValues((prev) => ({ ...prev, ["onHand"]: prev.inventory }));
    }
  };

  const SubmitNewInventory = async () => {
    setIsLoading(true);
    await axios
      .patch("/api/product/inventory/add", {
        productId: selected._id,
        onHand: values.onHand,
        inventory: values.inventory,
      })
      .then((res) => {
        setIsLoading(false);
        if (res.status === 201) {
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage(res.data.message));

            dispatch(triggerReload());
            dispatch(setSelectedProduct(null));
          });
          // reset form
          resetForms();
        }
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(
              setMessage(
                "Something went wrong, please refresh your browser and try again"
              )
            );
          });
        else if (err.response.status === 401) history.push("/unathorized");
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  };

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

      <div className="flex flex-row items-center justify-between gap-2">
        <EmbossedInput
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

        <EmbossedInput
          type="number"
          label="Onhand"
          width="w-auto"
          name="onHand"
          value={values.onHand}
          error={errors.onHand}
          onChange={handleInput}
        />
      </div>

      <FormButton
        size="REGULAR"
        isLoading={isLoading}
        onClick={handleFormSubmit}
        text="Save Inventory"
        textColor="text-white"
      />
    </div>
  );
}

export default AddInventoryForm;
