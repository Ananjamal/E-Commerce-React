import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  PRODUCT_FETCH_SINGLE_REQUEST,
  PRODUCT_FETCH_SINGLE_SUCCESS,
  PRODUCT_FETCH_SINGLE_FAILURE
} from "./productTypes";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
    case PRODUCT_FETCH_SINGLE_REQUEST:
      return { ...state, loading: true, error: null };

    case PRODUCT_FETCH_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        products: action.payload, 
        error: null 
      };

    case PRODUCT_FETCH_SINGLE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        selectedProduct: action.payload, 
        error: null 
      };

    case PRODUCT_FETCH_FAILURE:
    case PRODUCT_FETCH_SINGLE_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
      };

    default:
      return state;
  }
};