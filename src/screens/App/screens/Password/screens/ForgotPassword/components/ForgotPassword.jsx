import React, { useState } from "react";
import axios from "../../../../../../../shared/caller";
import { useForm } from "../../../../../../../shared/Form/useForm";

import "./ForgotPassword.css";

function ForgotPassword() {
  async function ForgotPasswordAPI() {
    await axios
      .post("/user/password/forgot", values)
      .then((res) => {
        resetForms();

        if (res.status === 200)
          setReqErr("Password reset token is sent through your email");
      })
      .catch((err) => {
        if (err.response === undefined)
          setReqErr("Something went wrong. Try again");
        else setReqErr(err.response.data.error);
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

  const [reqErr, setReqErr] = useState("");

  return (
    <div id="forgotPassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Forgot Password</h2>
        </div>

        <div>
          <p>{reqErr}</p>
        </div>

        <div>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
          <label>{errors.email}</label>
        </div>

        <div>
          <button
            type="submit"
            className="submit-form"
            onClick={handleFormSubmit}
          >
            Email Reset Token
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
