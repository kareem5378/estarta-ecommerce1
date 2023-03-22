//Import constants
import * as constants from "./constants";
//Import Magic
import { magic } from "../../magic-auth/magic-auth";

//Login
export const Login = (email) => async (dispatch) => {
  dispatch({ type: constants.AUTH_LOADING });
  try {
    const res = await magic.auth.loginWithMagicLink({ email });
    const userData = await magic.user.getMetadata();
    const Token = await magic.user.getIdToken();
    localStorage.setItem("token", Token);
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch({
      type: constants.AUTH_SUCCESS,
      payload: { userData, Token },
    });
  } catch (error) {
    dispatch({ type: constants.AUTH_FAILED, payload: error });
  }
};

//Logout
export const Logout = () => async (dispatch) => {
  dispatch({ type: constants.AUTH_LOADING });
  try {
    await magic.user.logout();
    localStorage.clear();
    dispatch({
      type: constants.CLEAR,
    });
  } catch (error) {
    dispatch({
      type: constants.AUTH_FAILED,
      payload: error,
    });
  }
};

//Check if token is valid
export const checkValidation = () => async (dispatch) => {
  dispatch({
    type: constants.AUTH_LOADING,
  });
  try {
    const magicToken = await magic.user.getIdToken();
    if (magicToken) {
      dispatch({ type: constants.RESET });
    }
  } catch (error) {
    localStorage.clear();
    dispatch({
      type: constants.CLEAR,
    });
    return false;
  }
};
