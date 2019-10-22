import * as Types from "./../constants/ActionTypes";
import callApi from "../ultis/apiCaller";

//show products
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

//add product
export const actAddProducts = product => {
  return {
    type: Types.ADD_PRODUCT,
    product
  };
};

export const actAddProductsRequest = product => {
  return dispatch => {
    callApi(`products`, "POST", product).then(res => {
      dispatch(actAddProducts(res.data));
    });
  };
};
//delete product
export const actDeleteProducts = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  };
};

export const actDeleteProductsRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteProducts(id));
    });
  };
};
//edit product
export const actUpdateProducts = product => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  };
};

export const actUpdateProductsRequest = product => {
  return dispatch => {
    callApi(`products/${product.id}`, "PUT", product).then(res => {
      dispatch(actUpdateProducts(res.data));
    });
  };
};
//get product
export const actGetProducts = product => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  };
};

export const actGetProductsRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, "GET", null).then(res => {
      dispatch(actGetProducts(res.data));
    });
  };
};
