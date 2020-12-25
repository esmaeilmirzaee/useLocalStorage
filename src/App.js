import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const App = ({ max, step = 1}) => {
  const [count, setCount] = useLocalStorage(0, "count");
  console.log(useLocalStorage(0, 'count'));
  const increment = () => {
    setCount((c) => {
      if (c >= max) {
        return c;
      }
      return c + step;
    });
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <div className="ui container">
      {console.log(count)}
      <h1>Hello CodeSandbox</h1>
      <div className="ui placeholder piled segment">
        <h1 className="ui label orange circular massive">{count}</h1>
        <div className="ui horizontal segments">
          <button onClick={increment} className="ui segment">
            +
          </button>
          <button onClick={reset} className="ui segment">
            Reset
          </button>
          <button onClick={decrement} className="ui segment">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
