import React from "react";
import { Link } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
  return (
    <div id="signUp" className="page-content">
      <div className="only-content">
        <div>
          <h2>Sign Up</h2>
        </div>

        <div>
          <input type="email" className="input" placeholder="Email" />
        </div>

        <div>
          <input type="text" className="input" placeholder="Username" />
        </div>

        <div>
          <input type="password" className="input" placeholder="Password" />
        </div>

        <div>
          <input type="submit" className="submit-form" value="Create Account" />
          <Link to="/sign-in" className="sign-in-link">
            Already have an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
