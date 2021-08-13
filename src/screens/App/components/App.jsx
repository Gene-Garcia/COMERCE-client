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
  console.log(pathname);
  return (
    <>
      <>{pathname !== "/sign-in" && pathname !== "/sign-up" && <Navbar />}</>

      <Switch>
        <Route {...route.SIGN_UP} />
        <Route {...route.SIGN_IN} />
        <PrivateRoute
          path={route.USER.path}
          component={route.USER.component}
          exact={route.USER.exact}
        />
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>

      <>{pathname !== "/sign-in" && pathname !== "/sign-up" && <Footer />}</>
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
