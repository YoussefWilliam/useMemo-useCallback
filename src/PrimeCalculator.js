import React, { useState, useMemo } from "react";

import "./App.css";
import { isPrime } from "./utils";

const PrimeCalculator = () => {
  const [selectedNum, setSelectedNum] = useState(100);

  const handleOnChangeNumber = (e) => {
    e.preventDefault();
    setSelectedNum(Math.min(e.target.value, 100_000));
  };

  const allPrimes = useMemo(() => {
    const result = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      if (isPrime(counter)) {
        result.push(counter);
      }
    }
    return result;
  }, [selectedNum]);
  return (
    <div>
      <form>
        <label htmlFor="num">Your Number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={handleOnChangeNumber}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum} {"  "}
        <div className="prime-list">{allPrimes.join(", ")}</div>
      </p>
    </div>
  );
};

export default React.memo(PrimeCalculator);
