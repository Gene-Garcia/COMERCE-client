import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "../caller";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(p) => (true ? <Component {...p} /> : <Redirect to="/sign-in" />)}
    />
  );
}

export default PrivateRoute;
