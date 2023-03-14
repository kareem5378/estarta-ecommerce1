import * as consts from "./constants";

const initialState = {
  token: null,
  loading: false,
  error: null,
  isAuth: !!localStorage.getItem("token") || false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case consts.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case consts.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.userData,
        token: action.payload.token,
      };
    case consts.AUTH_FAILED:
      return { ...state, loading: false, error: action.payload };
    case consts.CLEAR:
      return {
        token: "",
        isAuth: false,
        user: {},
        loading: false,
        error: null,
      };
    case consts.RESET:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
