import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// Get cart items (simulate with products)
export const getCartItems = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  // console.log("API Response:", response.data);
  return response.data;
};

// Add item to cart
export const addCartItem = async (item) => {
  const response = await axios.post(`${BASE_URL}/carts`, item);
  return response.data;
};

// Remove item from cart
export const removeCartItem = async (id) => {
  const response = await axios.delete(`${BASE_URL}/carts/${id}`);
  return response.data;
};
