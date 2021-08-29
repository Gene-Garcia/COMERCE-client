import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import validateUser from "../../../../../shared/Auth/Validation";
import Loading from "../../../../../shared/Loading/Loading";

function UserIndex({ history }) {
  const [loading, setLoading] = useState(true);

  const cookies = new Cookies();

  useEffect(() => {
    validateUser((s) => {
      if (s === "SUCCESS") setLoading(false);
      else if (s === "FAILED") history.push("/login");
      else if (s === "UNAUTHORIZED") history.push("/unauthorized");
      else if (s === "FORBIDDEN") history.push("/forbidden");
    });

    console.log(cookies.get("first"));
  }, []);

  function Component() {
    return (
      <>
        <h1>User Index</h1>

        <p>Welcome</p>
        <br />

        <Link to="/user/change-password">Change Password</Link>
      </>
    );
  }

  return <>{loading ? <Loading /> : <Component />}</>;
}

export default UserIndex;
