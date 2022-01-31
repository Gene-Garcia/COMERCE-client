import React, { memo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import route from "../route";
import axios from "../../../shared/caller";
import Alert from "../../../shared/Components/pages/Alert";
import { CartCountProvider } from "../../../context/CartCountContext";
import { ShoppingCartProvider } from "../../../context/ShoppingCartContext";
import { OrdersProvider } from "../../../context/OrdersContext";
import { RateProvider } from "../../../context/RateContext";
import { ProductPaginationProvider } from "../../../context/ProductPaginationContext";
import { SellerRegistrationProvider } from "../../../context/SellerRegistrationContext";
import BusinessHeader from "../../../shared/Components/seller/BusinessHeader";
import UserNavigation from "./userNavigation/Navigation";
import SellerNavigation from "./sellerNavigation/Navigation";
import { ManageProductProvider } from "../../../context/ManageProductContext";
import { ManageInventoryProvider } from "../../../context/ManageInventoryContext";

const App = () => {
  // call server function to set XSRF-TOKEN in the cookie
  useEffect(() => {
    const fetchCookieProtection = async () => {
      await axios.get("/api/cs").catch((err) => {
        console.error(err);
        console.log("Unable to contact our server. Please try again.");
      });
    };

    fetchCookieProtection();
  }, []);

  return (
    <Router>
      {/* Global message notification */}
      <Alert />

      <ProductPaginationProvider>
        <CartCountProvider>
          <ShoppingCartProvider>
            <OrdersProvider>
              <RateProvider>
                <SellerRegistrationProvider>
                  <ManageProductProvider>
                    <ManageInventoryProvider>
                      <AppContent />
                    </ManageInventoryProvider>
                  </ManageProductProvider>
                </SellerRegistrationProvider>
              </RateProvider>
            </OrdersProvider>
          </ShoppingCartProvider>
        </CartCountProvider>
      </ProductPaginationProvider>
    </Router>
  );
};
export default App;

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
    "/seller/manage/products",
    "/seller/manage/inventory",
    "/seller/shipment/orders",
    "/seller/shipment/fulfilled",
  ];
  const withSellerNavigation = [
    "/seller",
    "/seller/manage/products",
    "/seller/manage/inventory",
    "/seller/shipment/orders",
    "/seller/shipment/fulfilled",
  ];

  return (
    <div
      className={`h-full ${
        withSellerNavigation.includes(pathname)
          ? "flex flex-col md:flex-row bg-my-white-tone"
          : "bg-white"
      }`}
    >
      {!navless.includes(pathname) && <UserNavigation />}
      {withSellerNavigation.includes(pathname) && <SellerNavigation />}

      {/* 72 is also the width of the sidebar */}
      <div
        className={`w-full ${
          withSellerNavigation.includes(pathname) &&
          "md:ml-52 lg:ml-56 2xl:ml-60"
        }`}
      >
        {withSellerNavigation.includes(pathname) && <BusinessHeader />}

        {/* !IMPLEMENT DYNAMIC RENDERING OF ROUTE, FOR PRIVATE ROUTE JUST ADD NEW FIELD PRIVATE=TRUE IN ROUTE.JS FILES */}
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
          <Route {...route.SELLER.subroutes.MANAGE.subroutes.PRODUCT} />
          <Route {...route.SELLER.subroutes.MANAGE.subroutes.INVENTORY} />
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.ORDERS} />
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.FULFILLED} />

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
