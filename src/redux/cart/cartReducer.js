// src/redux/cart/cartReducer.js
import {
  CART_FETCH_ITEMS_REQUEST,
  CART_FETCH_ITEMS_SUCCESS,
  CART_FETCH_ITEMS_FAILURE,
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAILURE,
  CART_REMOVE_ITEM_REQUEST,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAILURE
} from "./cartTypes";

const initialState = {
  items: {},
  error: null,
  loading: false
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_FETCH_ITEMS_REQUEST:
    case CART_ADD_ITEM_REQUEST:
    case CART_REMOVE_ITEM_REQUEST:
      return { ...state, loading: true, error: null };

    case CART_FETCH_ITEMS_SUCCESS:
      console.log("Reducer received cart data:", action.payload);
      return { ...state, items: action.payload, loading: false, error: null };

case CART_ADD_ITEM_SUCCESS:
  return { 
    ...state, 
    items: action.payload, 
    loading: false, 
    error: null 
  };
    case CART_REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        items: {
          ...state.items,
          products: state.items.products ? state.items.products.filter(
            product => product.productId !== action.payload
          ) : []
        },
        loading: false,
        error: null,
      };

    case CART_FETCH_ITEMS_FAILURE:
    case CART_ADD_ITEM_FAILURE:
    case CART_REMOVE_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};