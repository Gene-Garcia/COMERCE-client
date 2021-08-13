import React, { useState } from "react";
import axios from "../../../../../../../shared/caller";

import "./ChangePassword.css";

function ChangePassword({ history }) {
  const [values, setValues] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
  });

  function onInputChange({ target: { name, value } }) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(e) {
    e.preventDefault();

    ChangePasswordAPI();
  }

  async function ChangePasswordAPI() {
    await axios
      .post("/user/password/change", values, {
        headers: { Authorization: "Bearer " + localStorage.getItem("auth") },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response !== undefined) console.log(err.response.data);

        if (err.response.status === 401) history.push("/sign-in");
      });
  }

  return (
    <div id="changePassword" className="page-content">
      <div className="only-content">
        <div>
          <h2>Change Password</h2>
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
          <input
            type="password"
            className="input"
            placeholder="Old Password"
            name="oldPassword"
            value={values.oldPassword}
            onChange={onInputChange}
          />
        </div>

        <div>
          <input
            type="password"
            className="input"
            placeholder="New Password"
            name="newPassword"
            value={values.newPassword}
            onChange={onInputChange}
          />
        </div>

        <div>
          <button type="submit" className="submit-form" onClick={submitForm}>
            Chnage My Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
