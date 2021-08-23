import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../../../shared/caller";
import Loading from "../../../../../shared/Loading/Loading";

function UserIndex({ history }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("/api/user/validate")
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
          } else {
            localStorage.removeItem(process.env.REACT_APP_LS_EMAIL_KEY);
            localStorage.removeItem(process.env.REACT_APP_LS_USERNAME_KEY);
          }
        })
        .catch((err) => {
          localStorage.removeItem(process.env.REACT_APP_LS_EMAIL_KEY);
          localStorage.removeItem(process.env.REACT_APP_LS_USERNAME_KEY);

          if (err.response === undefined) history.push("/login");
          if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
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
