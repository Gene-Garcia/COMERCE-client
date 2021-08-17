import React, { useState } from "react";
import axios from "../../../../../../../shared/caller";
import useQuery from "../../../../../../../shared/Route/useQuery";
import { useForm } from "../../../../../../../shared/Form/useForm";

import "./ResetPassword.css";

function ResetPassword() {
  const query = useQuery();
  const token = query.get("token");

  async function ResetPasswordAPI() {
    await axios
      .put("/user/password/reset", {
        ...values,
        resetPasswordToken: token,
      })
      .then((res) => {
        resetForms();

        if (res.status === 200) setReqErr("Password changed succesfully");
        else setReqErr(res.data.message);
      })
      .catch((err) => {
        if (err.response === undefined)
          setReqErr("Something went wrong. Try again.");
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

    if ("password" in formData)
      tempErrs.password =
        formData.password === "" || formData.password === null
          ? "Password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", password: "" };
  const { values, errors, handleInput, resetForms, handleFormSubmit } = useForm(
    initialState,
    initialState,
    validate,
    ResetPasswordAPI
  );

  const [reqErr, setReqErr] = useState("");

  return (
    <div id="forgotPassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Change Password</h2>
        </div>

        <div>
          <p>{reqErr}</p>
        </div>

        {/* replace this with session stored */}
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
          <input
            type="password"
            className="input"
            placeholder="New Password"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
          <label>{errors.password}</label>
        </div>

        <div>
          <button
            type="submit"
            className="submit-form"
            onClick={handleFormSubmit}
          >
            Submit New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
