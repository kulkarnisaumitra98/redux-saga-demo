import { Provider } from "react-redux";
import "./App.css";
import Counter from "./views/counter/Counter";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
