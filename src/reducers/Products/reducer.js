import * as constants from "./constants";

const initialState = {
  product: [],
  error: null,
  loading: false,
};

export default function Products(state = initialState, action) {
  switch (action.type) {
    case constants.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case constants.PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
