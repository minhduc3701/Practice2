import * as Types from "./../constants/ActionTypes";
import callApi from "../ultis/apiCaller";

export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  };
};

export const actFetchProductsRequest = () => {
  return dispatch => {
    callApi(`products`, "GET", null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
};
