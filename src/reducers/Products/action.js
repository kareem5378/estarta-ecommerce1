import * as constants from "./constants";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: constants.PRODUCT_LOADING });
  try {
    fetch("https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: constants.PRODUCT_SUCCESS,
          payload: data,
        });
      });
  } catch (error) {
    dispatch({ type: constants.PRODUCT_FAILED, payload: error });
  }
};
