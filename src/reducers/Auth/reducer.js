import * as consts from "./constants";

const initialState = {
  loading: false,
  error: null,
  isAuth: localStorage.getItem("token") ? true : false,
  user: localStorage.getItem("user"),
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
        user: action.payload.userMetaData,
      };
    case consts.AUTH_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return {
        ...state,
      };
  }
}
