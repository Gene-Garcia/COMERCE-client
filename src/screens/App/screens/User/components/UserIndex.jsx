import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";

function UserIndex({ history }) {
  // Validates if the user is logged in and has access to this site
  // Logic of validation highly depends on the backend
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/user")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err.response === undefined || err.response.status === 401)
            history.push("/sign-in");
          else console.log(err.response.data.error);
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>User Index</h1>

      <p>Welcome</p>
      <br />

      <Link to="/user/change-password">Change Password</Link>
    </>
  );
}

export default UserIndex;
