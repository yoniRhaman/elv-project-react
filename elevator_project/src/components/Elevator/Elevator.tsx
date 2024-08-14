import React, { FC, useState, useEffect } from "react";

type ElevatorProps = {
  alt: string;
  position: number; // Position in pixels from the bottom
  height: number; // Height of the elevator (and floor)
  destinationFloor?: number;
};

const Elevator: FC<ElevatorProps> = ({
  alt,
  position,
  height,
  destinationFloor,
}) => {
  const [currentPosition, setCurrentPosition] = useState(position);
  const [floorsToMove, setFloorsToMove] = useState(0);
  useEffect(() => {
    if (destinationFloor !== undefined) {
      const _floorsToMove = Math.abs(destinationFloor - currentPosition - 1); // Assuming the elevator starts from floor 1
      // const travelTime = _floorsToMove * 0.5; // 0.5 seconds per floor
      setFloorsToMove(_floorsToMove);
      setCurrentPosition(destinationFloor - 1);

      // setTimeout(() => {
      //   // Delay of 2 seconds on arrival
      // }, travelTime * 1000 + 2000);
    }
  }, [destinationFloor, height]);

  return (
    <img
      src={"elv.png"}
      alt={alt}
      style={{
        position: "absolute",
        bottom: `${currentPosition * height}px`,
        // left: "120px",
        height: `${height}px`,
        transition: `bottom ${floorsToMove}s ease`, // Smooth transition when moving the elevator
      }}
    />
  );
};

export default Elevator;
