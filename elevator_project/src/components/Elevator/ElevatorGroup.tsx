import React, { FC, useState, useEffect } from "react";
import Elevator from "./Elevator";

type ElevatorGroupProps = {
  numElevators: number;
  height: number;
  destinationFloor?: number;
  blacklineHeight?: number;
};

const ElevatorGroup: FC<ElevatorGroupProps> = ({
  numElevators,
  height,
  destinationFloor,
  blacklineHeight = 7,
}) => {
  const [elevators, setElevators] = useState<number[]>([]);

  useEffect(() => {
    const initialPositions = Array(numElevators).fill(0);
    setElevators(initialPositions);
  }, [numElevators]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      {elevators.map((position, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            position: "relative",
          }}
        >
          <Elevator
            key={index}
            alt={`Elevator ${index + 1}`}
            position={position}
            height={height}
            destinationFloor={destinationFloor}
            blacklineHeight={blacklineHeight}
          />
        </div>
      ))}
    </div>
  );
};

export default ElevatorGroup;
