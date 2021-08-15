function AuthUserReducer(state, action) {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: { ...action.payload }, // id and email
      };

    case "SIGN_IN_USER":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case "SIGN_OUT_USER":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      throw Error;
  }
}
export default AuthUserReducer;
