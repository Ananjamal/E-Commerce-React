import { takeLatest, call, put } from "redux-saga/effects";
import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  PRODUCT_FETCH_SINGLE_REQUEST,
  PRODUCT_FETCH_SINGLE_SUCCESS,
  PRODUCT_FETCH_SINGLE_FAILURE
} from "./productTypes";
import { getProducts, getProductById } from "../../routes/api";

// Fetch All Products
function* fetchProducts() {
  try {
    const products = yield call(getProducts);
    yield put({ type: PRODUCT_FETCH_SUCCESS, payload: products });
  } catch (error) {
    yield put({ type: PRODUCT_FETCH_FAILURE, payload: error.message });
  }
}

// Fetch Single Product
function* fetchSingleProduct(action) {
  try {
    const product = yield call(getProductById, action.payload);
    yield put({ type: PRODUCT_FETCH_SINGLE_SUCCESS, payload: product });
  } catch (error) {
    yield put({ type: PRODUCT_FETCH_SINGLE_FAILURE, payload: error.message });
  }
}

// Watcher Saga
export function* watchProductSaga() {
  yield takeLatest(PRODUCT_FETCH_REQUEST, fetchProducts);
  yield takeLatest(PRODUCT_FETCH_SINGLE_REQUEST, fetchSingleProduct);
}