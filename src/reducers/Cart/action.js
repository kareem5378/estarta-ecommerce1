import * as constants from "./constants";

//Import custom alert
import MySwal from "sweetalert2";

export const addToCart = (product) => async (dispatch) => {
  dispatch({ type: constants.ADD_TO_CART, payload: product });
  MySwal.fire({
    title: `${product.name}`,
    html: ` has been added!`,
    icon: "success",
  });
};
export const removeFromCart = (product) => async (dispatch) => {
  dispatch({ type: constants.REMOVE_FROM_CART, payload: product });
  MySwal.fire({
    title: `${product.name}`,
    html: ` has been removed!`,
    icon: "error",
  });
};
