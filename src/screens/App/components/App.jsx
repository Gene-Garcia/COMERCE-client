import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";

// Route
import route from "../route";

function Navbar() {
  return (
    <div className="bg-my-contrast shadow-lg w-full p-5">
      <p className="text-my-accent transition duration-200 hover:bg-my-dim hover:text-my-contrast">
        App Bar
      </p>
    </div>
  );
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
      <>{!navles.includes(pathname) && <Navbar />}</>

      <Switch>
        <Route {...route.SIGN_UP} />
        <Route {...route.SIGN_IN} />
        <Route {...route.PASSWORD.subroutes.FORGOT_PASSWORD} />
        <Route {...route.PASSWORD.subroutes.RESET_PASSWORD} />

        <Route {...route.USER} />
        <Route {...route.USER.subroutes.CHANGE_PASSWORD} />

        {/* <PrivateRoute
          path={route.USER.path}
          component={route.USER.component}
          exact={route.USER.exact}
        />
        <PrivateRoute
          path={route.USER.subroutes.CHANGE_PASSWORD.path}
          component={route.USER.subroutes.CHANGE_PASSWORD.component}
          exact={route.USER.subroutes.CHANGE_PASSWORD.exact}
        /> */}
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
