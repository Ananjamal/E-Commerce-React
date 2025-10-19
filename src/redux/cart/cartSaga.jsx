import { takeLatest, call, put } from "redux-saga/effects";
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
import { addCartItem, getCartItems, removeCartItem } from "../../routes/api";


// Fetch Items
function* fetchCartItems() {
  try {
    const items = yield call(getCartItems);
    // console.log("Fetched cart items:", items);
    yield put({ type: CART_FETCH_ITEMS_SUCCESS, payload: items });
  } catch (error) {
    yield put({ type: CART_FETCH_ITEMS_FAILURE, payload: error.message });
  }
}

// Add Item
function* addItemToCart(action) {
  try {
    const item = yield call(addCartItem, action.payload);
    yield put({ type: CART_ADD_ITEM_SUCCESS, payload: item });
  } catch (error) {
    yield put({ type: CART_ADD_ITEM_FAILURE, payload: error.message });
  }
}

// Remove Item
function* removeItemFromCart(action) {
  try {
    yield call(removeCartItem, action.payload);
    yield put({ type: CART_REMOVE_ITEM_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: CART_REMOVE_ITEM_FAILURE, payload: error.message });
  }
}

// Watcher Saga
export function* watchCartSaga() {
  yield takeLatest(CART_FETCH_ITEMS_REQUEST, fetchCartItems);
  yield takeLatest(CART_ADD_ITEM_REQUEST, addItemToCart);
  yield takeLatest(CART_REMOVE_ITEM_REQUEST, removeItemFromCart);
}
