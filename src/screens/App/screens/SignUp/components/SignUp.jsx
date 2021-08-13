import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";

import "./SignUp.css";

function SignUp() {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });

  function onInputChange(e) {
    const {
      target: { name, value },
    } = e;

    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();

    SignUpAPI();
  }

  async function SignUpAPI() {
    await axios
      .post("/signup", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data);
      });
  }

  return (
    <div id="signUp" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign Up</h2>
        </div>

        <div>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            onChange={onInputChange}
            value={values.email}
          />
        </div>

        <div>
          <input
            type="text"
            className="input"
            placeholder="Username"
            name="username"
            onChange={onInputChange}
            value={values.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            onChange={onInputChange}
            value={values.password}
          />
        </div>

        <div>
          <input
            type="submit"
            className="submit-form"
            value="Create Account"
            onClick={submitForm}
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
