import * as consts from "./constants";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export default function Products(state = initialState, action) {
  switch (action.type) {
    case consts.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case consts.PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case consts.PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
