import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(p) =>
        localStorage.getItem("auth") ? (
          <Component {...p} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    />
  );
}

export default PrivateRoute;
