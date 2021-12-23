import React from "react";
import useAlert from "../../../../../../../hooks/useAlert";
import axios from "../../../../../../../shared/caller";
import Title from "../../../../../../../shared/Components/pages/Title";
import { useForm } from "../../../../../../../hooks/useForm";
import {
  CustomerAccountInput,
  EmbossedInput,
} from "../../../../../../../shared/Components/input/Inputs";

function ForgotPassword() {
  // form hooks
  async function ForgotPasswordAPI() {
    await axios
      .post("/api/user/password/forgot", values)
      .then((res) => {
        resetForms();
        setSeverity("success");
        setMessage(res.data.message);
      })
      .catch((err) => {
        setSeverity("error");

        if (!err.response) setMessage("Something went wrong. Try again");
        else setMessage(err.response.data.error);
      });
  }

  function validate(formData, setErrors) {
    let tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    setErrors(tempErrs);
  }

  const intialState = { email: "" };
  const { values, errors, resetForms, handleInput, handleFormSubmit } = useForm(
    intialState,
    intialState,
    validate,
    ForgotPasswordAPI
  );

  // alert context
  const { setMessage, setSeverity } = useAlert();

  return (
    <div>
      <Title title="Forgot Password" />

      <div className="w-4/5 mx-auto mt-12 space-y-16">
        <div className="space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">
            How to reset your password?
          </h1>

          <p className="">
            Enter your registered email, and we will email you a link where you
            can reset your password.
          </p>

          <p className="">
            Ensure that still have access to this email to obtain the reset
            link.
          </p>

          <p>
            Thank you,
            <br />
            <span className="font-semibold text-my-accent text-md">
              COMERCE Team
            </span>
          </p>
        </div>

        <div className="w-3/5 space-y-6">
          <EmbossedInput
            label="EMAIL"
            error={errors.email}
            type="email"
            name="email"
            value={values.email}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-my-accent mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />

          <button
            onClick={handleFormSubmit}
            className="transition bg-my-accent text-white font-semibold rounded-md px-4 py-1.5 border border-transparent hover:bg-my-accent-mono active:ring active:ring-my-accent-mono active:ring-offset-2 active:ring-opacity-80"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
