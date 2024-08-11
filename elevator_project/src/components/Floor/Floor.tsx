import React, { FC } from "react";
import { Timer } from "../Timer";

type FloorProps = {
  number: number;
  height: number;
  buildingId: number;
};

const Floor: FC<FloorProps> = ({ number, height, buildingId }) => {
  return (
    <div className="floor" style={{ height: `${height}px`, border: 1 }}>
      <button className="metal linear">{number}</button>
      <Timer initialCountdown={10} /> {/* Display timer on the floor */}
    </div>
  );
};

export default Floor;
