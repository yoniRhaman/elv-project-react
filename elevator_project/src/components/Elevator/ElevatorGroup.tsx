import React, { FC, useState, useEffect } from "react";
import Elevator from "./Elevator";
import { Building } from "../Building";

type ElevatorGroupProps = {
  numElevators: number;
  height: number;
  destinationFloor?: number;
  blacklineHeight?: number;
  buildingId: number;
};

const ElevatorGroup: FC<ElevatorGroupProps> = ({
  numElevators,
  height,
  destinationFloor,
  blacklineHeight = 7,
  buildingId,
}) => {
  const [elevators, setElevators] = useState<number[]>([]);
  const [elevatorToMove, setElevatorToMove] = useState(-1);
  const [inUse, setInUse] = useState<boolean[]>(
    Array(numElevators).fill(false)
  );

  useEffect(() => {
    const initialPositions = Array(numElevators).fill(0);
    setElevators(initialPositions);
  }, [numElevators]);

  useEffect(() => {
    if (destinationFloor === -1) {
      return;
    }

    for (let i = 0; i < numElevators; i++) {
      if (inUse[i]) {
        continue;
      }
      setElevatorToMove(i);
      setInUse((prev) => {
        const copy = [...prev];
        copy[i] = true;
        return copy;
      });
      break;
    }
    console.log(elevatorToMove);
  }, [destinationFloor]);
  return (
    <div
      key={buildingId}
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
            key={`${buildingId} ${index}`}
            setInUse={setInUse}
            inUse={inUse[index]}
            elevatorToMove={elevatorToMove}
            elevatorNumber={index}
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
