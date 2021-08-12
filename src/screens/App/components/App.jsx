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
        <Route {...route.USER} />
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
