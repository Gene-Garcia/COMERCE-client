import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../../../shared/caller";

import "./ForgotPassword.css";

function ForgotPassword() {
  const [values, setValues] = useState({ email: "" });

  function onInputChange({ target: { name, value } }) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();

    ForgotPasswordAPI();
  }

  async function ForgotPasswordAPI() {
    await axios
      .post("/user/password/forgot", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response != undefined) console.log(err.response.data);
      });
  }

  return (
    <div id="forgotPassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Forgot Password</h2>
        </div>

        <div>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onInputChange}
          />
        </div>

        <div>
          <button type="submit" className="submit-form" onClick={submitForm}>
            Email Reset Token
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
