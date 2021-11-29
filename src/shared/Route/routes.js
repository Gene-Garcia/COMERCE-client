const routes = {
  HOME: {
    path: "/",
    name: "Home",
  },

  CATALOGUE: {
    path: "/catalogue",
    name: "Catalogue",
    subroutes: {
      PRODUCT_SHOWCASE: {
        path: "/catalogue/item/:product",
        name: "Product Showcase",
      },
    },
  },

  SIGN_UP: {
    subroutes: {
      USER: {
        path: "/sign-up/user",
        name: "User Sign Up",
      },

      SELLER: {
        path: "/sign-up/seller",
        name: "Seller Sign Up",
      },
    },
  },

  LOGIN: {
    subroutes: {
      USER: {
        path: "/login/user",
        name: "User Login",
      },

      SELLER: {
        path: "/login/seller",
        name: "Seller Login",
      },
    },
  },

  SIGN_OUT: {
    path: "/sign-out",
    name: "Sign Out",
  },

  PASSWORD: {
    subroutes: {
      FORGOT_PASSWORD: {
        path: "/password/forgot",
        name: "Forgot Password",
      },

      RESET_PASSWORD: {
        path: "/password/reset",
        name: "Reset Password",
      },
    },
  },

  CHECKOUT: {
    path: "/checkout",
    name: "Checkout",
  },

  USER: {
    path: "/user",
    name: "Index User",
    subroutes: {
      ME: {
        path: "/user/me",
        name: "My Profile",
      },

      SIGN_OUT: {
        path: "/user/sign-out",
        name: "Sign Out",
      },

      CHANGE_PASSWORD: {
        path: "/user/change-password",
        name: "Change Password",
      },

      CART: {
        path: "/user/cart",
        name: "Shopping Cart",
      },

      ORDERS: {
        path: "/user/orders",
        name: "Orders",

        subroutes: {
          RATE: {
            path: "/user/orders/rate",
            name: "Rate",
          },
        },
      },
    },
  },

  SELLER: {
    path: "/seller",
    name: "Landing Page for Sellers",

    subroutes: {
      REGISTER: {
        path: "/seller/register",
        name: "Seller Registration",
      },
    },
  },
};

// /signin
// /signup
// /signout

// /user *landing page of user, orders?
// /user/me *profile

// /user/password/forgot
// /user/password/reset/:token

// /user/password/change

export default routes;
