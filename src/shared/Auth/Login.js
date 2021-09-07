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

  cookies.remove(process.env.REACT_APP_LS_EMAIL_KEY);
  cookies.remove(process.env.REACT_APP_LS_USERNAME_KEY);
}

function setUserPersistData(email, username) {
  const cookies = new Cookies();

  const options = {
    path: "/",
    expires: getExpiration(),
  };

  cookies.set(process.env.REACT_APP_LS_EMAIL_KEY, email, options);
  cookies.set(process.env.REACT_APP_LS_USERNAME_KEY, username, options);
}

function checkLoggedIn() {
  const cookies = new Cookies();

  return (
    cookies.get(process.env.REACT_APP_LS_EMAIL_KEY) &&
    cookies.get(process.env.REACT_APP_LS_USERNAME_KEY)
  );
}

function getExpiration() {
  // 15 minutes, the server also uses 15-minute expiry
  const date = new Date();
  date.setMinutes(date.getMinutes() + 15);

  return date;
}

export { clearUserPersistData, setUserPersistData, checkLoggedIn };
