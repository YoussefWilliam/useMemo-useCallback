import React from "react";

import "./App.css";
import PrimeCalculator from "./PrimeCalculator";
import Clock from "./Clock";
import { useTime } from "./useTime";
import { format } from "date-fns";

function App() {
  const time = useTime();
  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            margin: 0,
            padding: 0,
            fontFamily: "monospace",
          }}
        >
          {format(time, "hh:mm:ss")}
        </p>
        <PrimeCalculator />
      </header>
    </div>
  );
}

export default App;
