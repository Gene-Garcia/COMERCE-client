import React, { memo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
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
 * obtaining the pathname is crucial for rendering components to have or not have
 * a navbar, footer, sidebar, different bg color.
 */
const AppContent = memo(() => {
  const { pathname } = useLocation();

  const navless = [
    "/login/user",
    "/sign-up/user",
    "/login/seller",
    "/sign-up/seller",
    "/seller",
  ];
  const withSidebar = ["/seller"];

  return (
    <div
      className={`${
        withSidebar.includes(pathname)
          ? "flex flex-row bg-my-white-tone"
          : "bg-white"
      }`}
    >
      {!navless.includes(pathname) && <Navbar />}
      {withSidebar.includes(pathname) && <Sidebar />}

      <div className="w-full">
        {withSidebar.includes(pathname) && <BusinessHeader />}

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
    </div>
  );
});

function App() {
  // call server function to set XSRF-TOKEN in the cookie
  useEffect(() => {
    async function fetchCookieProtection() {
      await axios.get("/api/cs").catch((err) => {
        console.error(err);
        console.log("Unable to contact our server. Please try again.");
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
