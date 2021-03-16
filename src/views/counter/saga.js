import { delay, put, takeEvery } from "redux-saga/effects";
import { Creators, Types } from "./reducer";

export function* incrementAsync() {
  yield delay(1000);
  yield put(Creators.incrementCount());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCounterIncrementAsync() {
  yield takeEvery(Types.INCREMENT_ASYNC, incrementAsync);
}
