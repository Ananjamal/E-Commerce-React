import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

// Get single product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product');
  }
};

// Cart functions (your existing ones)
export const getCartItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/carts/1`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cart items');
  }
};

export const addCartItem = async (item) => {
  try {
    const response = await axios.post(`${BASE_URL}/carts`, item);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add item to cart');
  }
};

export const removeCartItem = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/carts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to remove item from cart');
  }
};