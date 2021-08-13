import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "../../../shared/Route/PrivateRoute";

// Route
import route from "../route";

function Navbar() {
  return <h3>This is a navbar</h3>;
}

function Footer() {
  return <h3>This is a Footer</h3>;
}

const AppContent = withRouter(({ location: { pathname } }) => {
  const navles = [
    "/sign-in",
    "/sign-up",
    "/password/forgot",
    "/password/reset",
  ];

  return (
    <>
      <>{!navles.includes(pathname) || (pathname.cont && <Navbar />)}</>

      <Switch>
        <Route {...route.SIGN_UP} />
        <Route {...route.SIGN_IN} />
        <Route {...route.PASSWORD.subroutes.FORGOT_PASSWORD} />
        <Route {...route.PASSWORD.subroutes.RESET_PASSWORD} />

        <PrivateRoute
          path={route.USER.path}
          component={route.USER.component}
          exact={route.USER.exact}
        />
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>

      <>{!navles.includes(pathname) && <Footer />}</>
    </>
  );
});

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
