import {
  CART_FETCH_ITEMS_REQUEST,
  CART_ADD_ITEM_REQUEST,
  CART_REMOVE_ITEM_REQUEST
} from "./cartTypes";

// Fetch Cart Items
export const fetchCartItemsRequest = () => ({
  type: CART_FETCH_ITEMS_REQUEST,
});

// Add Item
export const addItemToCartRequest = (item) => ({
  type: CART_ADD_ITEM_REQUEST,
  payload: item,
});

// Remove Item
export const removeItemFromCartRequest = (id) => ({
  type: CART_REMOVE_ITEM_REQUEST,
  payload: id,
});
