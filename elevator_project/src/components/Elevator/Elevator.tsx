import React, { FC } from "react";

type ElevatorProps = {
  alt: string;
  position: number; // Position in pixels or percentage
};

const Elevator: FC<ElevatorProps> = ({ alt, position }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/elv.png`}
      alt={alt}
      style={{
        position: "absolute",
        top: `${position}px`, // Or use percentage
        transition: "top 0.5s ease", // Smooth transition when moving the elevator
      }}
    />
  );
};

export default Elevator;
