function clearUserPersistData() {
  localStorage.removeItem(process.env.REACT_APP_LS_EMAIL_KEY);
  localStorage.removeItem(process.env.REACT_APP_LS_USERNAME_KEY);
}

function setUserPersistData(email, username) {
  localStorage.setItem(process.env.REACT_APP_LS_EMAIL_KEY, email);
  localStorage.setItem(process.env.REACT_APP_LS_USERNAME_KEY, username);
}

export { clearUserPersistData, setUserPersistData };
