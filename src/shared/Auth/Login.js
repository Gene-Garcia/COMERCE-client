/*
 * This file contains login-related functions.
 *
 * The application uses cookies to persist some user data which will also
 * be used as a determiner if a user is logged in.
 *
 * That is, we cannot use JWT immediately here in the client, because its decode function
 * can only be used in the server.
 *
 * Vulnerability lies, when the user knows that they can change the value of the username and email.
 * However, fortunately for us, the usernmae and email is only used for display and rendering purposes only.
 * Not, for actual server requests.
 *
 */

import Cookies from "universal-cookie";

function clearUserPersistData() {
  const cookies = new Cookies();

  cookies.remove(process.env.REACT_APP_LS_EMAIL_KEY, { path: "/" });
  cookies.remove(process.env.REACT_APP_LS_USERNAME_KEY, { path: "/" });

  // business related keys
  cookies.remove(process.env.REACT_APP_BS_NAME, { path: "/" });
  cookies.remove(process.env.REACT_APP_BS_LOGO, { path: "/" });
  cookies.remove(process.env.REACT_APP_BS_EMAIL, { path: "/" });
}

function setUserPersistData(
  email,
  username,
  businessName,
  businessLogo,
  businessEmail
) {
  const cookies = new Cookies();

  const options = {
    path: "/",
    expires: getExpiration(),
  };

  cookies.set(process.env.REACT_APP_LS_EMAIL_KEY, email, options);
  cookies.set(process.env.REACT_APP_LS_USERNAME_KEY, username, options);

  // if businessName, businessLogo, and businessEmail is defined, then the session is for seller
  if (businessName && businessLogo && businessEmail) {
    cookies.set(process.env.REACT_APP_BS_NAME, businessName, options);
    cookies.set(process.env.REACT_APP_BS_LOGO, businessLogo, options);
    cookies.set(process.env.REACT_APP_BS_EMAIL, businessEmail, options);
  }
}

function checkLoggedIn() {
  const cookies = new Cookies();

  return (
    cookies.get(process.env.REACT_APP_LS_EMAIL_KEY) &&
    cookies.get(process.env.REACT_APP_LS_USERNAME_KEY)
  );
}

function getExpiration() {
  // 120 minutes, the server also uses 120-minute expiry
  const date = new Date();
  date.setMinutes(date.getMinutes() + 120);

  return date;
}

function getCookieByKey(key) {
  const cookies = new Cookies();

  return cookies.get(key);
}

export {
  clearUserPersistData,
  setUserPersistData,
  checkLoggedIn,
  getCookieByKey,
};
