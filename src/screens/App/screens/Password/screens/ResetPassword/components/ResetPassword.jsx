import React, { useState } from "react";
import axios from "../../../../../../../shared/caller";
import useQuery from "../../../../../../../shared/Route/useQuery";

import "./ResetPassword.css";

function ResetPassword() {
  const query = useQuery();
  const token = query.get("token");

  const [values, setValues] = useState({ email: "", password: "" });

  function onInputChange({ target: { name, value } }) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();

    ResetPasswordAPI();
  }

  async function ResetPasswordAPI() {
    await axios
      .put("/user/password/reset", {
        ...values,
        resetPasswordToken: token,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response !== undefined) console.log(err.response.data);
      });
  }

  return (
    <div id="forgotPassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Change Password</h2>
        </div>

        {/* replace this with session stored */}
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
          <input
            type="password"
            className="input"
            placeholder="New Password"
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
