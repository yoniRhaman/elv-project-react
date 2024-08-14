import React, { FC, useState, useEffect } from "react";

type ElevatorProps = {
  alt: string;
  position: number; // Position in pixels from the bottom
  height: number; // Height of the elevator (and floor)
  destinationFloor?: number;
};

const Elevator: FC<ElevatorProps> = ({ alt, position, height, destinationFloor }) => {
  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    if (destinationFloor !== undefined) {
      const floorsToMove = Math.abs(destinationFloor - 1); // Assuming the elevator starts from floor 1
      const travelTime = floorsToMove * 0.5; // 0.5 seconds per floor

      setCurrentPosition((destinationFloor - 1) * height);

      setTimeout(() => {
        // Delay of 2 seconds on arrival
      }, travelTime * 1000 + 2000);
    }
  }, [destinationFloor, height]);

  return (
    <img
      src={"elv.png"}
      alt={alt}
      style={{
        position: "absolute",
        bottom: `${currentPosition}px`,
        left: "120px",
        height: `${height}px`,
        transition: "bottom 0.5s ease", // Smooth transition when moving the elevator
      }}
    />
  );
};

export default Elevator;
