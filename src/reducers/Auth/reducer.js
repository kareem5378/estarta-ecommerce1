import * as constants from "./constants";

const initialState = {
  token: null,
  loading: false,
  error: null,
  isAuth: !!localStorage.getItem("token") || false,
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case constants.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.userData,
        token: action.payload.token,
      };
    case constants.AUTH_FAILED:
      return { ...state, loading: false, error: action.payload };
    case constants.CLEAR:
      return {
        token: "",
        isAuth: false,
        user: {},
        loading: false,
        error: null,
      };
    case constants.RESET:
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
