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
  date.setMinutes(date.getMinutes() + 1);

  return date;
}

export { clearUserPersistData, setUserPersistData, checkLoggedIn };
