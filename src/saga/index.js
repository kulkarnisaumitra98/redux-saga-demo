import { all } from "@redux-saga/core/effects";
import { watchCounterIncrementAsync } from "../views/counter/saga";

export default function* rootSaga() {
  yield all([watchCounterIncrementAsync()]);
}
