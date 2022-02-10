import React from "react";
import axios from "../../../../../../../shared/caller";
import useQuery from "../../../../../../../hooks/useQuery";
import { useForm } from "../../../../../../../hooks/useForm";
import Title from "../../../../../../../shared/Components/pages/Title";
import { Link } from "react-router-dom";
import { EmbossedInput } from "../../../../../../../shared/Components/input/Inputs";
import { FormButton } from "../../../../../../../shared/Components/button/ButtonBase";
import { batch, useDispatch } from "react-redux";
import {
  setMessage,
  setSeverity,
} from "../../../../../../../redux/Alert/AlertAction";

function ResetPassword({ history }) {
  // redux
  const dispatch = useDispatch();

  // query
  const query = useQuery();
  const token = query.get("token");

  async function ResetPasswordAPI() {
    await axios
      .put("/api/user/password/reset", {
        ...values,
        resetPasswordToken: token,
      })
      .then((res) => {
        setIsLoading(false);
        resetForms();

        batch(() => {
          dispatch(setSeverity("success"));
          dispatch(setMessage(res.data.message));
        });

        history.push("/login/user");
      })
      .catch((err) => {
        setIsLoading(false);

        if (!err.response)
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage("Something went wrong. Try again."));
          });
        else if (err.response.status === 403) history.push("/forbidden");
        else
          batch(() => {
            dispatch(setSeverity("error"));
            dispatch(setMessage(err.response.data.error));
          });
      });
  }

  function validate(formData, setErrors) {
    let tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    if ("password" in formData)
      tempErrs.password =
        formData.password === "" || formData.password === null
          ? "Password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", password: "" };
  const {
    values,
    errors,
    handleInput,
    resetForms,
    handleFormSubmit,
    isLoading,
    setIsLoading,
  } = useForm(initialState, initialState, validate, ResetPasswordAPI);

  return (
    <div className="">
      <Title title="Forgot Password" />

      {/* replace this with session stored */}
      <div className="w-3/5 mt-12 mx-auto space-y-16">
        <div className="space-y-6">
          <h1 className="text-xl font-semibold text-gray-800">
            What to do here?
          </h1>

          <p className="">
            Enter the email that you've used to receive our email, and your new
            password.
          </p>

          <p className="">
            Avoid tampering the link as it holds the password reset token. This
            token will expire within 15 minutes
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
          />

          <EmbossedInput
            label="NEW PASSWORD"
            error={errors.password}
            type="password"
            name="password"
            value={values.password}
            onChange={handleInput}
            background="bg-gray-100"
            shadow="shadow-md"
          />

          <div className="flex flex-row gap-x-6">
            <FormButton
              size="regular"
              onClick={handleFormSubmit}
              text="Save New Password"
              isLoading={isLoading}
              textColor="text-white"
            ></FormButton>

            <Link
              className="transition bg-transparent text-black font-semibold rounded-md px-4 py-1.5 border border-black hover:text-my-accent hover:border-my-accent active:ring active:ring-my-accent-mono active:ring-offset-2 active:ring-opacity-80"
              to="/password/forgot"
            >
              Resend Token
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
