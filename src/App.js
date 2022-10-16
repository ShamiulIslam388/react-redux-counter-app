import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { incrementCount, decrementCount, resetCount } from "./state/actions";

export default function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(incrementCount())}>increment</button>
      <button onClick={() => dispatch(decrementCount())}>decrement</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  );
}
