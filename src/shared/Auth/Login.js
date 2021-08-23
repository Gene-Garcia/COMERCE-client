function clearUserPersistData() {}

function setUserPersistData(email, username) {
  localStorage.setItem(process.env.REACT_APP_LS_EMAIL_KEY, email);
  localStorage.setItem(process.env.REACT_APP_LS_USERNAME_KEY, username);
}

export { clearUserPersistData, setUserPersistData };
