import * as consts from "./constants";
import { magic } from "../../magic-auth/magic-auth";

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
