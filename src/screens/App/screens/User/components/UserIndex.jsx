import React from "react";
import { Link } from "react-router-dom";

function UserIndex() {
  return (
    <>
      <h1>User Index</h1>

      <Link to="/user/password/change">Change Password</Link>
    </>
  );
}

export default UserIndex;
