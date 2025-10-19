import {
  CART_FETCH_ITEMS_SUCCESS,
  CART_FETCH_ITEMS_FAILURE,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAILURE,
  CART_REMOVE_ITEM_SUCCESS,
  CART_REMOVE_ITEM_FAILURE
} from "./cartTypes";

const initialState = {
  items: [],
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_FETCH_ITEMS_SUCCESS:
        console.log("Reducer received fetched items:", action.payload);
      return { ...state, items: action.payload, error: null };
    case CART_FETCH_ITEMS_FAILURE:
      return { ...state, error: action.payload };

    case CART_ADD_ITEM_SUCCESS:
      return { ...state, items: [...state.items, action.payload], error: null };
    case CART_ADD_ITEM_FAILURE:
      return { ...state, error: action.payload };

    case CART_REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        error: null,
      };
    case CART_REMOVE_ITEM_FAILURE:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
