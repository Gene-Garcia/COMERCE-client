const navbarLinks = [
  { name: "Home", to: "/" },
  { name: "Catalogue", to: "/catalogue" },
  { name: "be a Seller", to: "/sign-up/seller" },
];

const sidebarLinks = {
  MANAGE: {
    name: "Manage",

    links: {
      PRODUCTS: {
        name: "Manage Products",
        to: "/seller/manage/products",
        svgD: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      },
      INVENTORIES: {
        name: "Manage Inventories",
        to: "/seller/manage/products",
        svgD: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      },
    },
  },

  SHIPMENT: {
    name: "Shipment",

    links: {
      S_ORDERS: {
        name: "Ship Orders",
        to: "#",
        svgD: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
      },
      F_SHIPMENTS: {
        name: "Fulfilled Shipments",
        to: "#",
        svgD: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
      },
    },
  },

  ORDERS: {
    name: "Orders",

    links: {
      F_ORDERS: {
        name: "Fulfilled Orders",
        to: "#",
        svgD: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
      },
      P_RATINGS: {
        name: "Product Ratings",
        to: "#",
        svgD: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      },
    },
  },

  SETTINGS: {
    name: "Settings",

    links: {
      BUSINESS: {
        name: "Business Settings",
        to: "#",
        svgD: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
      },
      ACCOUNT: {
        name: "My Account Settings",
        to: "#",
        svgD: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
      },
    },
  },
};

export { navbarLinks, sidebarLinks };
