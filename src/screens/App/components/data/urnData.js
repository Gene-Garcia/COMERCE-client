const withDefaultNavigation = [];

const withoutDefaultNavigation = [
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

const withSidebarNavigation = [
  ...withSellerNavigation,
  ...withLogisticsNavigation,
];

export {
  withDefaultNavigation,
  withSidebarNavigation,
  withLogisticsNavigation,
  withSellerNavigation,
  withoutDefaultNavigation,
};
