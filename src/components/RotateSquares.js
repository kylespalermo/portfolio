import React, { useState, useEffect } from "react";

function RotateSquares({ timing = 200 }) {
  const [rotater, setRotater] = useState(0);
  const style = {
    backfaceVisibility: "hidden",
    transform: rotater > 0 ? `rotate(${rotater}deg)` : `rotate(${0}deg)`,
    transition: `transform ${timing}ms ease-in-out`
  };
  useEffect(() => {
    const timer = setInterval(() => {
      var randomHelper = Math.floor(Math.random() * 9);
      if (randomHelper === 8) {
        setRotater(rotater + 90)
        };
      }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div
      className="square"
      onMouseEnter={() => setRotater(rotater + 90)}
      style={style}
    ></div>
  );
}

export default RotateSquares;
