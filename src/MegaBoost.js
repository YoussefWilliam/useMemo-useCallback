import React from "react";

const MegaBoost = ({ handleClick }) => {
  console.log("Render MegaBoost");

  return (
    <button className="mega-boost-button" onClick={handleClick}>
      MEGA BOOST!
    </button>
  );
};

export default React.memo(MegaBoost);
