import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";

function UserIndex({ history }) {
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("auth"),
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);

          localStorage.removeItem("auth");
          history.push("/sign-in");
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>User Index</h1>

      <Link to="/user/change-password">Change Password</Link>
    </>
  );
}

export default UserIndex;
