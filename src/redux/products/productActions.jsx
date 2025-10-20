import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SINGLE_REQUEST
} from "./productTypes";

// Fetch All Products
export const fetchProductsRequest = () => ({
  type: PRODUCT_FETCH_REQUEST,
});

// Fetch Single Product
export const fetchSingleProductRequest = (id) => ({
  type: PRODUCT_FETCH_SINGLE_REQUEST,
  payload: id,
});