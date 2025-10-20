// src/redux/rootReducer.js
import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer"; // Now imports from .js file
import { productReducer } from "./products/productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;