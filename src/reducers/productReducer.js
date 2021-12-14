import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_LOADING,
  GET_PRODUCT,
  UPDATE_PRODUCT,
  PRODUCT_ERRORS,
  CLEAR_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return action.payload;
          } else {
            return product;
          }
        }),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case PRODUCT_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};
