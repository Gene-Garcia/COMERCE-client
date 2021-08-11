import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Route
import route from "../route";

function App() {
  return (
    <Router>
      {/* <h1>Welcome to the App</h1> */}

      <Switch>
        <Route {...route.SIGN_UP} />
        <Route {...route.SIGN_IN} />

        {/* <ProtectedRoute ...route /> */}
      </Switch>
    </Router>
  );
}

export default App;
