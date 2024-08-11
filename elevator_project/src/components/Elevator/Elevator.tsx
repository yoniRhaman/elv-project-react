import React, { FC } from "react";

type ElevatorProps = {
  alt: string;
  position: number; // Position in pixels or percentage from the bottom
  height: number; // Height of the elevator (and floor)
};

const Elevator: FC<ElevatorProps> = ({ alt, position, height }) => {
  return (
    <img
      src={"elv.png"}
      alt={alt}
      style={{
        position: "absolute",
        bottom: `${position}px`, // Add 20px space between the elevator and the floor
        left: `120px`, // Move the elevator 100px to the right
        height: `${height}px`, // Set the elevator's height to match the floor's height
        transition: "bottom 0.5s ease, left 0.5s ease", // Smooth transition when moving the elevator
      }}
    />
  );
};

export default Elevator;
