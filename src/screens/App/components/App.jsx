import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import route from "../route";
import Navbar from "./Navbar";
import axios from "../../../shared/caller";
import { AlertProvider } from "../../../context/AlertContext";
import Alert from "../../../shared/Components/pages/Alert";
import { CartCountProvider } from "../../../context/CartCountContext";
import { ShoppingCartProvider } from "../../../context/ShoppingCartContext";
import { CheckoutProvider } from "../../../context/CheckoutContext";

const AppContent = withRouter(({ location: { pathname } }) => {
  const navles = ["/login", "/sign-up", "/"];

  return (
    <>
      <>{!navles.includes(pathname) && <Navbar />}</>

      <Switch>
        <Route {...route.HOME} />

        <Route {...route.CATALOGUE} />
        <Route {...route.CATALOGUE.subroutes.PRODUCT_SHOWCASE} />

        <Route {...route.SIGN_UP} />
        <Route {...route.LOGIN} />
        <Route {...route.SIGN_OUT} />
        <Route {...route.PASSWORD.subroutes.FORGOT_PASSWORD} />
        <Route {...route.PASSWORD.subroutes.RESET_PASSWORD} />

        <Route {...route.USER} />

        <Route {...route.USER.subroutes.CART} />
        <Route {...route.USER.subroutes.CHECKOUT} />
        <Route {...route.USER.subroutes.ORDERS} />

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

      {/* <>{!navles.includes(pathname) && <Footer />}</> */}
    </>
  );
});

function App() {
  // call server function to set XSRF-TOKEN in the cookie
  useEffect(() => {
    async function fetchCookieProtection() {
      await axios
        .get("/api/cs")
        .then()
        .catch((err) => {
          console.log(
            "Unable to contact our server. Please try again. CREATED A FALLBACK PAGE FOR THIS ERRROR"
          );
        });
    }

    fetchCookieProtection();
  }, []);

  return (
    <Router>
      <AlertProvider>
        {/* Global message notification */}
        <Alert />

        <CartCountProvider>
          <ShoppingCartProvider>
            <CheckoutProvider>
              <AppContent />
            </CheckoutProvider>
          </ShoppingCartProvider>
        </CartCountProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
