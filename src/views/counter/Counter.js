import { useDispatch, useSelector } from "react-redux";
import { Creators } from "./reducer";

const { decrementCount, incrementAsync } = Creators;

function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{value}</h3>
      <button
        style={{ marginRight: 8 }}
        onClick={() => dispatch(incrementAsync())}
      >
        +
      </button>
      <button onClick={() => dispatch(decrementCount())}>-</button>
    </div>
  );
}

export default Counter;
