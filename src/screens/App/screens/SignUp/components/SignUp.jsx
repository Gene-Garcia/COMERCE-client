import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";
import { useForm } from "../../../../../shared/Form/useForm";

import "./SignUp.css";

function SignUp({ history }) {
  async function SignUpAPI() {
    await axios
      .post("/signup", values)
      .then((res) => {
        if (res.status === 200) {
          resetForms();

          //clear
          history.push("/sign-in");
        }
      })
      .catch((err) => {
        if (err.response) setReqErr(err.response.data);
        else setReqErr("Something went wrong. Try again.");
      });
  }

  function validate(formData, setErrors) {
    let tempErrs = { ...errors };

    if ("email" in formData)
      tempErrs.email =
        formData.email === "" || formData.email === null
          ? "Email is required"
          : "";

    if ("username" in formData)
      tempErrs.username =
        formData.username === "" || formData.username === null
          ? "Username is required"
          : "";

    if ("password" in formData)
      tempErrs.password =
        formData.password === "" || formData.password === null
          ? "Password is required"
          : "";

    setErrors(tempErrs);
  }

  const initialState = { email: "", username: "", password: "" };
  const { values, errors, handleInput, handleFormSubmit, resetForms } = useForm(
    initialState,
    initialState,
    validate,
    SignUpAPI
  );

  // Request error message
  const [reqErr, setReqErr] = useState("");

  return (
    <div id="signUp" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign Up</h2>
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
            onChange={handleInput}
            value={values.email}
          />
          <label>{errors.email}</label>
        </div>

        <div>
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
            onChange={handleInput}
            value={values.username}
          />
          <label>{errors.username}</label>
        </div>

        <div>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={values.password}
          />
          <label>{errors.password}</label>
        </div>

        <div>
          <input
            type="submit"
            className="submit-form"
            value="Create Account"
            onClick={handleFormSubmit}
          />
          <Link to="/sign-in" className="sign-in-link">
            Already have an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
