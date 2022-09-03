import React from "react";
import { format } from "date-fns";
import { useTime } from "./useTime";

const Clock = () => {
  const time = useTime();
  return (
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
  );
};

export default Clock;
