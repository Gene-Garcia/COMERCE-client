import React, { useState } from "react";

import useQuery from "../../../../../../../shared/Route/useQuery";

import "./ResetPassword.css";

function ResetPassword() {
  const query = useQuery();
  const token = query.get("token");

  const [values, setValues] = useState({ password: "" });

  function onInputChange({ target: { name, value } }) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div id="forgotPassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Change Password</h2>
        </div>

        <div>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={onInputChange}
          />
        </div>

        <div>
          <button type="submit" className="submit-form" onClick={submitForm}>
            Submit New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
