import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateCounter } from "./redux/counter";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleChangeCounter = (difference) => {
    dispatch(updateCounter({ difference }));
  };

  return (
    <div className="App">
      <div onClick={() => handleChangeCounter(5)}>increment</div>
      <div>{count}</div>
      <div onClick={() => handleChangeCounter(-5)}>decrement</div>
    </div>
  );
}

export default App;
