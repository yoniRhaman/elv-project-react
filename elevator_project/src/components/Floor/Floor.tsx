import React, { FC, useState } from "react";
import { Timer } from "../Timer";

type FloorProps = {
  number: number;
  height: number;
  buildingId: number;
  onRequestElevator: (floorNumber: number) => void;
};

const Floor: FC<FloorProps> = ({ number, height, buildingId, onRequestElevator }) => {
  const [showTimer, setShowTimer] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleButtonClick = () => {
    const timeToArrival = Math.abs(number - 1) * 0.5; // Assuming elevator starts from the first floor
    setCountdown(Math.ceil(timeToArrival));
    setShowTimer(true);
    onRequestElevator(number);

    setTimeout(() => setShowTimer(false), timeToArrival * 1000 + 2000); // Hide timer after elevator arrives
  };

  return (
    <div className="floor" key={number} style={{ height: `${height}px`, border: "1px solid black" }}>
      <button onClick={handleButtonClick} className="metal linear">
        {number}
      </button>
      {showTimer && <Timer initialCountdown={countdown} />}
    </div>
  );
};

export default Floor;
