import React from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

function SignIn() {
  return (
    <div id="signIn" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign In</h2>
        </div>

        <div>
          <input type="email" className="input" placeholder="Email" />
        </div>

        <div>
          <input type="password" className="input" placeholder="Password" />
        </div>

        <div>
          <input type="submit" className="submit-form" value="Login" />
          <Link to="/sign-up" className="sign-up-link">
            Don't have an account yet
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
