import { createActions } from "reduxsauce";
import produce from "immer";

export const { Types, Creators } = createActions(
  {
    incrementCount: null,
    incrementAsync: null,
    decrementCount: null,
  },
  {}
);

const INITIAL_STATE = { value: 0, someotherData: { a: 1, b: 2 } };

/* eslint-disable default-case, no-param-reassign */
const counterReducer = produce((draftState, action) => {
  switch (action.type) {
    case Types.INCREMENT_COUNT:
      draftState.value += 1;
      break;
    case Types.DECREMENT_COUNT:
      draftState.value -= 1;
      break;
  }
}, INITIAL_STATE);

export default counterReducer;
