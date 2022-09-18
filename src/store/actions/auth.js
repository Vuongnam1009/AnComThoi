import AsyncStorage from "@react-native-async-storage/async-storage";

export async function login(data) {
  const { access_token, user } = data;
  try {
    await AsyncStorage.setItem("accessToken", access_token);
  } catch (e) {
    console.log(e);
  }
  return {
    type: "LOGIN",
    payload: { user, access_token },
  };
}

export function loginSuccess(accessToken, user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    accessToken,
    user,
  };
}

export function loginFailure(code, message) {
  return {
    type: actionTypes.LOGIN_FAILURE,
    code,
    message,
  };
}

export function verifyToken(accessToken) {
  return {
    type: actionTypes.VERIFY_TOKEN,
    accessToken,
  };
}

export function verifyTokenSuccess(accessToken, user) {
  return {
    type: actionTypes.VERIFY_TOKEN_SUCCESS,
    accessToken,
    user,
  };
}

export function verifyTokenFailure() {
  return {
    type: actionTypes.VERIFY_TOKEN_FAILURE,
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT,
  };
}

export function updateUser(user) {
  return {
    type: actionTypes.UPDATE_USER,
    user,
  };
}
