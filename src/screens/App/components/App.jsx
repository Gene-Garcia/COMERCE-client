import React, { memo, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import route from "../route";
import axios from "../../../shared/caller";
import Alert, { StackedAlert } from "../../../shared/Components/pages/Alert";
import BusinessHeader from "../../../shared/Components/seller/BusinessHeader";
import UserNavigation from "./userNavigation/Navigation";
import SellerLogisticsNavigation from "./sellerLogisticsNavigation/Navigation";
import { logisticsNavLinks, sellerNavLinks } from "./data/linkData";
import {
  withLogisticsNavigation,
  withoutDefaultNavigation,
  withSellerNavigation,
  withSidebarNavigation,
} from "./data/urnData";

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
      <StackedAlert />

      <AppContent />
    </Router>
  );
};
export default App;

/*
 * obtaining the pathname is crucial for rendering components to have or not have
 * a navbar, footer, sidebar, different bg color.
 */
const AppContent = memo(() => {
  const { pathname: pathName } = useLocation();

  const navless = [
    "/login/user",
    "/sign-up/user",
    "/login/seller",
    "/sign-up/seller",
    "/login/logistics",
    "/sign-up/logistics",

    "/seller",
    "/seller/manage/products",
    "/seller/manage/inventory",
    "/seller/shipment/orders",
    "/seller/shipment/pack",
    "/seller/shipment/fulfilled",
    "/seller/orders/master",
    "/seller/settings/business",

    "/logistics/track/with-me",
    "/logistics/track/track-search",
    "/logistics/shipment/seller/pickup",
    "/logistics/shipment/customer/delivery",
  ];

  const withSellerNavigation = [
    "/seller",
    "/seller/manage/products",
    "/seller/manage/inventory",
    "/seller/shipment/orders",
    "/seller/shipment/pack",
    "/seller/shipment/fulfilled",
    "/seller/orders/master",
    "/seller/settings/business",
  ];

  const withLogisticsNavigation = [
    "/logistics/track/with-me",
    "/logistics/track/track-search",
    "/logistics/shipment/seller/pickup",
    "/logistics/shipment/customer/delivery",
  ];

  return (
    <div
      className={`h-full flex ${
        withSidebarNavigation.includes(pathName)
          ? "bg-white-tone flex-col lg:flex-row"
          : "flex-col"
      }`}
    >
      {/* navigation  */}
      <div
        className={`${
          withSidebarNavigation.includes(pathName) &&
          "lg:basis-1/2 xl:basis-[28%] 2xl:basis-[15%]"
        }`}
      >
        {withSellerNavigation.includes(pathName) ? (
          <SellerLogisticsNavigation links={sellerNavLinks} />
        ) : withLogisticsNavigation.includes(pathName) ? (
          <SellerLogisticsNavigation links={logisticsNavLinks} />
        ) : (
          !withoutDefaultNavigation.includes(pathName) && <UserNavigation />
        )}
      </div>

      {/* content */}
      <div
        className={`${
          withSidebarNavigation.includes(pathName) && "shrink grow "
        }`}
      >
        {withSellerNavigation.includes(pathName) && <BusinessHeader />}

        <Switch>
          <Route {...route.HOME} />

          <Route {...route.CATALOGUE} />
          <Route {...route.CATALOGUE.subroutes.PRODUCT_SHOWCASE} />

          <Route {...route.SIGN_UP.subroutes.USER} />
          <Route {...route.SIGN_UP.subroutes.SELLER} />
          <Route {...route.SIGN_UP.subroutes.LOGISTICS} />
          <Route {...route.LOGIN.subroutes.USER} />
          <Route {...route.LOGIN.subroutes.SELLER} />
          <Route {...route.LOGIN.subroutes.LOGISTICS} />
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
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.PACK} />
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.FULFILLED} />
          <Route {...route.SELLER.subroutes.ORDERS.subroutes.MASTER} />
          <Route {...route.SELLER.subroutes.SETTINGS.subroutes.BUSINESS} />

          <Route
            {...route.LOGISTICS.subroutes.TRACK.subroutes.TRACK_AND_SEARCH}
          />
          <Route {...route.LOGISTICS.subroutes.TRACK.subroutes.WITH_ME} />
          <Route
            {...route.LOGISTICS.subroutes.SHIPMENT.subroutes.SELLER_PICK_UP}
          />
          <Route
            {...route.LOGISTICS.subroutes.SHIPMENT.subroutes.CUSTOMER_DELIVERY}
          />

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

  return (
    <div
      className={`${
        withSellerNavigation.includes(pathName) ||
        withLogisticsNavigation.includes(pathName)
          ? "h-full flex flex-col md:flex-row bg-white-tone"
          : "bg-white"
      }`}
    >
      {!navless.includes(pathName) && <UserNavigation />}

      {/* Render sidebar navigation and pass nav links for seller */}
      {withSellerNavigation.includes(pathName) && (
        <div className="flex-grow-0">
          <SellerLogisticsNavigation links={sellerNavLinks} />
        </div>
      )}

      {/* Render sidebar navigation and pass nav links for logistics */}
      {withLogisticsNavigation.includes(pathName) && (
        <div className="flex-grow-0">
          <SellerLogisticsNavigation links={logisticsNavLinks} />
        </div>
      )}

      {/* 52-56-60 is also the width of the sidebar */}
      {/* the overflow scroll will be put here to avoid also scrolling the sidebar */}
      <div
        className={`${
          withSellerNavigation.includes(pathName) ||
          withLogisticsNavigation.includes(pathName)
            ? "overflow-y-auto md:flex-grow md:ml-52 lg:ml-56 2xl:ml-60"
            : ""
        }`} // "md:ml-52 lg:ml-56 2xl:ml-60 fixed"
      >
        {withSellerNavigation.includes(pathName) && <BusinessHeader />}

        {/* !IMPLEMENT DYNAMIC RENDERING OF ROUTE, FOR PRIVATE ROUTE JUST ADD NEW FIELD PRIVATE=TRUE IN ROUTE.JS FILES */}
        <Switch>
          <Route {...route.HOME} />

          <Route {...route.CATALOGUE} />
          <Route {...route.CATALOGUE.subroutes.PRODUCT_SHOWCASE} />

          <Route {...route.SIGN_UP.subroutes.USER} />
          <Route {...route.SIGN_UP.subroutes.SELLER} />
          <Route {...route.SIGN_UP.subroutes.LOGISTICS} />
          <Route {...route.LOGIN.subroutes.USER} />
          <Route {...route.LOGIN.subroutes.SELLER} />
          <Route {...route.LOGIN.subroutes.LOGISTICS} />
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
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.PACK} />
          <Route {...route.SELLER.subroutes.SHIPMENT.subroutes.FULFILLED} />
          <Route {...route.SELLER.subroutes.ORDERS.subroutes.MASTER} />
          <Route {...route.SELLER.subroutes.SETTINGS.subroutes.BUSINESS} />

          <Route
            {...route.LOGISTICS.subroutes.TRACK.subroutes.TRACK_AND_SEARCH}
          />
          <Route {...route.LOGISTICS.subroutes.TRACK.subroutes.WITH_ME} />
          <Route
            {...route.LOGISTICS.subroutes.SHIPMENT.subroutes.SELLER_PICK_UP}
          />
          <Route
            {...route.LOGISTICS.subroutes.SHIPMENT.subroutes.CUSTOMER_DELIVERY}
          />

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

const test = ({ pathname }) => {};
