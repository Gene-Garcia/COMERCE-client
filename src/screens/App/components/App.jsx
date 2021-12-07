import React, { memo, useEffect } from "react";
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
import { OrdersProvider } from "../../../context/OrdersContext";
import { RateProvider } from "../../../context/RateContext";
import { ProductPaginationProvider } from "../../../context/ProductPaginationContext";
import { SellerRegistrationProvider } from "../../../context/SellerRegistrationContext";
import Sidebar from "./Sidebar";
import BusinessHeader from "../../../shared/Components/seller/BusinessHeader";

/*
 * the entire function is wrapped in withRouter in order to access the location object
 * and obtain the pathname.
 *
 * obtaining the pathname is crucial for rendering components to have or not have a navbar and footer.
 */
const AppContent = memo(
  withRouter(({ location: { pathname } }) => {
    const navles = [
      "/login/user",
      "/sign-up/user",

      "/login/seller",
      "/sign-up/seller",
      "/seller",
    ];

    const sidebared = ["/seller"];

    return (
      <div className={`${sidebared.includes(pathname) ? "flex flex-row" : ""}`}>
        <>{!navles.includes(pathname) && <Navbar />}</>

        {sidebared.includes(pathname) && (
          <div className="w-72 bg-my-accent-shade h-screen">
            <Sidebar />
          </div>
        )}

        <div className={`${sidebared.includes(pathname) && "w-screen"}`}>
          {sidebared.includes(pathname) && (
            <>
              <BusinessHeader />
            </>
          )}

          <Switch>
            <Route {...route.HOME} />

            <Route {...route.CATALOGUE} />
            <Route {...route.CATALOGUE.subroutes.PRODUCT_SHOWCASE} />

            <Route {...route.SIGN_UP.subroutes.USER} />
            <Route {...route.SIGN_UP.subroutes.SELLER} />
            <Route {...route.LOGIN.subroutes.USER} />
            <Route {...route.LOGIN.subroutes.SELLER} />
            <Route {...route.SIGN_OUT} />

            <Route {...route.PASSWORD.subroutes.FORGOT_PASSWORD} />
            <Route {...route.PASSWORD.subroutes.RESET_PASSWORD} />

            <Route {...route.CHECKOUT} />

            <Route {...route.USER} />

            <Route {...route.USER.subroutes.CART} />
            <Route {...route.USER.subroutes.ORDERS} />
            <Route {...route.USER.subroutes.ORDERS.subroutes.RATE} />

            <Route {...route.USER.subroutes.CHANGE_PASSWORD} />

            {/* seller routes */}
            <Route {...route.SELLER} />

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
        </div>
        {/* <>{!navles.includes(pathname) && <Footer />}</> */}
      </div>
    );
  })
);

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

        <ProductPaginationProvider>
          <CartCountProvider>
            <ShoppingCartProvider>
              <CheckoutProvider>
                <OrdersProvider>
                  <RateProvider>
                    <SellerRegistrationProvider>
                      <AppContent />
                    </SellerRegistrationProvider>
                  </RateProvider>
                </OrdersProvider>
              </CheckoutProvider>
            </ShoppingCartProvider>
          </CartCountProvider>
        </ProductPaginationProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
