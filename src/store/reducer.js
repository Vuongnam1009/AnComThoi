const initialLoginState = {
  accessToken: null,
  isLoading: true,
  verifying: false,
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        user: action.payload.user,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        accessToken: action.payload.access_token,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoading: false,
        user: null,
        accessToken: null,
      };
    case "REGISTER":
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
}
export { initialLoginState };
export default authReducer;
