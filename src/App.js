import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MegaBoost from "./MegaBoost";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1024);
  };

  const handleCallBackClick = useCallback(() => {
    setCount((prevState) => prevState + 1024);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>Count : {count}</div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click here
        </button>
        <MegaBoost handleClick={handleCallBackClick} />
      </header>
    </div>
  );
}

export default App;
