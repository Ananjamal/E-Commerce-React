import { all } from "redux-saga/effects";
import { watchCartSaga } from "./cart/cartSaga";
import { watchProductSaga } from "./products/productSaga";

export default function* rootSaga() {
  yield all([
    watchCartSaga(),
    watchProductSaga(),
  ]);
}