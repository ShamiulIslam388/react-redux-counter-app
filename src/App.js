import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { incrementCount, decrementCount, resetCount } from "./state/actions";
import { connect } from "react-redux";

function App({ count, incrementCount }) {
  // const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={incrementCount}>increment</button>
      <button onClick={() => dispatch(decrementCount())}>decrement</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(incrementCount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
