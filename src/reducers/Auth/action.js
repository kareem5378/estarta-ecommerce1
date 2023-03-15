//Import constants
import * as consts from "./constants";
//Import Magic
import { magic } from "../../magic-auth/magic-auth";

//Login
export const Login = (email) => async (dispatch) => {
  dispatch({ type: consts.AUTH_LOADING });
  try {
    const res = await magic.auth.loginWithMagicLink({ email });
    const userData = await magic.user.getMetadata();
    const Token = await magic.user.getIdToken();
    localStorage.setItem("token", Token);
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch({
      type: consts.AUTH_SUCCESS,
      payload: { userData, Token },
    });
  } catch (error) {
    dispatch({ type: consts.AUTH_FAILED, payload: error });
  }
};

//Logout
export const Logout = () => async (dispatch) => {
  dispatch({ type: consts.AUTH_LOADING });
  console.log("waad");
  try {
    // const res =
    await magic.user.logout();
    console.log("second");
    // if (res) {
    localStorage.clear();
    dispatch({
      type: consts.CLEAR,
    });
    // }
  } catch (error) {
    console.log("err");

    dispatch({
      type: consts.AUTH_FAILED,
      payload: error,
    });
  }
};

//Check if token is valid

export const checkValidation = () => async (dispatch) => {
  dispatch({
    type: consts.AUTH_LOADING,
  });
  try {
    const magicToken = await magic.user.getIdToken();
    if (magicToken) {
      dispatch({ type: consts.RESET });
    }
  } catch (error) {
    localStorage.clear();
    dispatch({
      type: consts.CLEAR,
    });
    return false;
  }
};
