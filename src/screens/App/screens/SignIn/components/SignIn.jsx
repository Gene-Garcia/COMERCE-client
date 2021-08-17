import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";
import { useForm } from "../../../../../shared/Form/useForm";

import "./SignIn.css";

function SignIn({ history }) {
  async function SignInApi() {
    await axios
      .post("/signin", values)
      .then((res) => {
        if (res.status === 200) {
          resetForms();

          history.push("/user");
        }
      })
      .catch((err) => {
        if (err.response) setReqErr(err.response.data.error);
        else setReqErr("Something went wrong. Try again.");
        // else: was not able to connect to node
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
  const { values, errors, handleInput, handleFormSubmit, resetForms } = useForm(
    initialState,
    initialState,
    validate,
    SignInApi
  );

  // state variable for API message
  const [reqErr, setReqErr] = useState("");

  return (
    <div id="signIn" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign In</h2>
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
            placeholder="Password"
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
            Login
          </button>
          <Link to="/sign-up" className="sign-up-link">
            Don't have an account yet
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
