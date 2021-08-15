import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";
import Loading from "../../../../../shared/Loading/Loading";

function UserIndex({ history }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/user")
        .then((res) => {
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          if (err.response === undefined || err.response.status === 401)
            history.push("/sign-in");
          else console.log(err.response.data.error);
        });
    }

    fetchData();
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
