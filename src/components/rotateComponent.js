import React from "react";
import RotateSquares from "./RotateSquares";

class RotateComponent extends React.Component {
  render() {
    return (
      <RotateSquares timing={150}>
        <div className="square"></div>
      </RotateSquares>
    );
  }
}

export default RotateComponent;