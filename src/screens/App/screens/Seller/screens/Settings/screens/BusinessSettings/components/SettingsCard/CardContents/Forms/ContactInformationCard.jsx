import React, { useState } from "react";
import { batch, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "../../../../../../../../../../../../hooks/useForm";
import { FormButton } from "../../../../../../../../../../../../shared/Components/button/ButtonBase";
import { InputFirst } from "../../../../../../../../../../../../shared/Components/input/InputBase";
import ErrorContainer from "../../../utils/ErrorContainer";
import axios from "../../../../../../../../../../../../shared/caller";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../../../../../../redux/Alert/AlertAction";

const ContactInformationCard = () => {
  // redux
  const dispatch = useDispatch();

  const history = useHistory();

  const [formError, setFormError] = useState("");

  //#region use form configuration
  const ChangeContactInformationAPI = async () => {
    await axios
      .patch("/api/seller/business/update", {
        data: {
          contactInfo: { ...values },
          businessInfo: {},
          address: {},
        },
      })
      .then((res) => {
        setIsLoading(false);
        setFormError("");

        if (res.status === 201) {
          // alert message
          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage("Contact information updated successfully"));
          });
        }
      })
      .catch((err) => {
        resetForms();
        setIsLoading(false);

        if (!err.response)
          setFormError("Cannot update contact information. Try again.");
        else if (err.response.status === 403) history.push("/forbidden");
        else if (err.response.status === 401) history.push("/unauthorized");
        else setFormError(err.response.data.error);
      });
  };

  const validate = (data, setErrors) => {};

  const contactNumberPattern = /^d+$/;
  const formIsValid = (submitCallback) => {
    let isValid;

    // nothing to save in database if all input are empty
    if (!values.businessEmail && !values.contactNumber) {
      setFormError(
        "Nothing to save. You may edit atleast 1 field before submit"
      );

      isValid = false;
    } else if (values.contactNumber) {
      if (!contactNumberPattern.test(values.contactNumber)) {
        setFormError("Contact number must be numerical.");
        isValid = false;
      } else if (
        !values.contactNumber.startsWith("9") ||
        values.contactNumber.length !== 10
      ) {
        setFormError("Invalid phone contact number");
        isValid = false;
      } else {
        setFormError("");
        isValid = true;
      }
    } else {
      setFormError = false;
      isValid = true;
    }

    submitCallback(isValid);
  };

  const init = { businessEmail: "", contactNumber: "" };
  const {
    values,
    errors,
    handleInput,
    handleFormSubmit,
    isLoading,
    setIsLoading,
    resetForms,
  } = useForm(init, init, validate, ChangeContactInformationAPI, formIsValid);
  //#endregion end use form configuration

  return (
    <div className="space-y-4">
      <div className={`${formError ? "block" : "hidden"}`}>
        <ErrorContainer message={formError} />
      </div>

      <div className="space-y-4">
        <InputFirst
          type="email"
          name="businessEmail"
          value={values.businessEmail}
          onChange={handleInput}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="Business Email"
          error={errors.businessEmail}
          focusWithin="focus-within:border-my-accent"
        />

        <InputFirst
          type="number"
          name="contactNumber"
          value={values.contactNumber}
          onChange={handleInput}
          inputStyle="bg-transparent rounded-t-sm px-2 text-base"
          border="py-1.5 border-b-2 rounded-t shadow"
          label="Contact Number"
          error={errors.contactNumber}
          focusWithin="focus-within:border-my-accent"
          icon={<div className="px-2 text-my-accent font-semibold">+63</div>}
        />
      </div>

      <div className="ml-auto w-max">
        <FormButton
          isLoading={isLoading}
          size="REGULAR"
          text="SAVE CHANGES"
          uppercase="uppercase"
          onClick={handleFormSubmit}
          textColor="text-white"
          type="BUTTON"
        />
      </div>
    </div>
  );
};

export default ContactInformationCard;
