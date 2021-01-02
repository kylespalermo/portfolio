import React from "react";

function RotateSquares({ timing = 200 }) {
  const [rotater, setRotater] = React.useState(0);
  const style = {
    backfaceVisibility: "hidden",
    transform: rotater > 0 ? `rotate(${rotater}deg)` : `rotate(${0}deg)`,
    transition: `transform ${timing}ms ease-in-out`
  };
  
  return (
    <div
      className="square"
      onMouseEnter={() => setRotater(rotater + 90)}
      style={style}
    ></div>
  );
}

export default RotateSquares;
