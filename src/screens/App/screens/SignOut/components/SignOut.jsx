import React, { useEffect } from "react";
import { batch, useDispatch } from "react-redux";
import { useGetCartCount } from "../../../../../hooks/useCart";
import {
  setMessage,
  setSeverity,
} from "../../../../../redux/Alert/AlertAction";
import { clearUserPersistData } from "../../../../../shared/Auth/Login";
import axios from "../../../../../shared/caller";

function SignOut({ history }) {
  // redux
  const dispatch = useDispatch();

  const { setCartCount } = useGetCartCount();

  useEffect(() => {
    async function signOut() {
      await axios
        .get("/api/signout")
        .then((res) => {
          clearUserPersistData();

          setCartCount(0);

          batch(() => {
            dispatch(setSeverity("success"));
            dispatch(setMessage("Sign Out Success"));
          });

          history.push("/login/user");
        })
        .catch((err) => {
          clearUserPersistData();

          if (!err.response)
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage("Something went wrong. Please try again."));
            });
          else if (err.response.status === 401) history.push("/unauthorized");
          else if (err.response.status === 403) history.push("/forbidden");
          else
            batch(() => {
              dispatch(setSeverity("error"));
              dispatch(setMessage(err.response.data.error));
            });
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
