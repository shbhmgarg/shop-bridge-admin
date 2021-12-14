import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_LOADING,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERRORS,
  CLEAR_PRODUCT
} from "./types";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      setLoading();

      const res = await fetch("/products");
      const data = await res.json();

      dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERRORS,
        payload: err.response.statusText,
      });
    }
  };
};

export const getProduct = (productId) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/products/${productId}`);
      const data = await res.json();
      
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERRORS,
        payload: err.response,
      });
    }
  };
};

export const clearProduct = () => {
  return {
    type: CLEAR_PRODUCT
  }
}

export const updateProducts = (product) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`/products/${product.id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: UPDATE_PRODUCT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERRORS,
        payload: err.response,
      });
    }
  };
};

export const addProduct = (product) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch('/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();

      dispatch({
        type: ADD_PRODUCT,
        payload: data,
      });      
    } catch (err) {
      dispatch({
        type: PRODUCT_ERRORS,
        payload: err.response,
      });
    }
  }
}

export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      setLoading();
      
      await fetch(`/products/${productId}`, {
        method: 'DELETE'
      });

      dispatch({
        type: DELETE_PRODUCT,
        payload: productId
      })
    } catch (err) {
      dispatch({
        type: PRODUCT_ERRORS,
        payload: err.response,
      });
    }
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
