import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";

import "./SignIn.css";

function SignIn({ history }) {
  const [values, setValues] = useState({
    email: "",
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

    SignInApi();
  }

  async function SignInApi() {
    await axios
      .post("/signin", values)
      .then((res) => {
        if (res.status === 200) {
          // set local storage
          localStorage.setItem("auth", res.data.token);
          history.push("/user");
        }
      })
      .catch((err) => {
        if (err.response) console.log(err.response.data);
        // else: was not able to connect to node
      });
  }

  return (
    <div id="signIn" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign In</h2>
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
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={onInputChange}
          />
        </div>

        <div>
          <button type="submit" className="submit-form" onClick={submitForm}>
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
