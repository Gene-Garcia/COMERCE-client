import React, { useEffect } from "react";
import { clearUserPersistData } from "../../../../../shared/Auth/Login";
import axios from "../../../../../shared/caller";

function SignOut({ history }) {
  useEffect(() => {
    async function signOut() {
      await axios
        .get("/api/signout")
        .then((res) => {
          clearUserPersistData();
          history.push("/login");
        })
        .catch((err) => {
          clearUserPersistData();

          if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else alert("Something went wrong. Sign out again");
        });
    }

    signOut();
  }, []);

  return (
    <div className="flex w-full h-full justify-center items-center">
      <h1 className="text-my-accent font-bold text-4xl">Signing You Out...</h1>
    </div>
  );
}
export default SignOut;
