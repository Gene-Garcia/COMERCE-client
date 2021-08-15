var UserProfile = (function () {
  let logInStatus = false;

  const getStatus = function () {
    return logInStatus;
  };

  const setStatus = function (x) {
    logInStatus = x;
  };

  return {
    getStatus,
    setStatus,
  };
})();

export default UserProfile;
