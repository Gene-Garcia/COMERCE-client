import React, { useState } from "react";
import axios from "../../../../../../../shared/caller";
import { useForm } from "../../../../../../../shared/Form/useForm";

import "./ChangePassword.css";

function ChangePassword({ history }) {
  async function ChangePasswordAPI() {
    await axios
      .post("/user/password/change", values, {
        headers: { Authorization: "Bearer " + localStorage.getItem("auth") },
      })
      .then((res) => {
        console.log(res);
        resetForms();

        if (res.status === 200) setReqErr("Successfully changed password");
        else setReqErr(res.data.message);
      })
      .catch((err) => {
        console.log(err.response);

        if (err.response === undefined)
          setReqErr("Something went wrong. Try again.");
        else if (err.response.status === 401) history.push("/sign-in");
        else setReqErr(err.response.data.error);
      });
  }

  function validate(formData, setErrors) {
    const tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    if ("oldPassword" in formData)
      tempErrs.oldPassword =
        formData.oldPassword === "" || formData.oldPassword === null
          ? "This password is required"
          : "";

    if ("newPassword" in formData)
      tempErrs.newPassword =
        formData.newPassword === "" || formData.newPassword === null
          ? "This password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", oldPassword: "", newPassword: "" };
  const { values, errors, handleInput, resetForms, handleFormSubmit } = useForm(
    initialState,
    initialState,
    validate,
    ChangePasswordAPI
  );

  // req message
  const [reqErr, setReqErr] = useState("");

  return (
    <div id="changePassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Change Password</h2>
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
          <input
            type="password"
            className="input"
            placeholder="Old Password"
            name="oldPassword"
            value={values.oldPassword}
            onChange={handleInput}
          />
          <label>{errors.oldPassword}</label>
        </div>

        <div>
          <input
            type="password"
            className="input"
            placeholder="New Password"
            name="newPassword"
            value={values.newPassword}
            onChange={handleInput}
          />
          <label>{errors.newPassword}</label>
        </div>

        <div>
          <button
            type="submit"
            className="submit-form"
            onClick={handleFormSubmit}
          >
            Change My Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
