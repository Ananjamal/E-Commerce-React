import { all } from "redux-saga/effects";
import { watchCartSaga } from "./cart/cartSaga";

export default function* rootSaga() {
  yield all([watchCartSaga()]);
}
