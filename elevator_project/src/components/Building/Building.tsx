import React, { FC, useState } from "react";
import { Floor } from "../Floor";
import ElevatorGroup from "../Elevator/ElevatorGroup";

type BuildingProps = {
  numFloors: number;
  height: number;
  buildingId: number;
  numElevators: number;
  children?: React.ReactNode;
};

const Building: FC<BuildingProps> = ({
  numFloors,
  height,
  buildingId,
  numElevators,
  children,
}) => {
  const [requestedFloor, setRequestedFloor] = useState<number | undefined>();

  const handleRequestElevator = (floorNumber: number) => {
    setRequestedFloor(floorNumber);
  };

  const floors = Array.from({ length: numFloors }, (_, i) => (
    <React.Fragment key={i}>
      <Floor
        number={numFloors - i}
        height={height}
        buildingId={buildingId}
        onRequestElevator={handleRequestElevator}
      />
      {i < numFloors - 1 && <div className="blackline" />}
    </React.Fragment>
  ));

  return (
    <div
      className="building row"
      style={{ display: "flex", justifyContent: "end" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="floors-stack">{floors}</div>
        <ElevatorGroup
          numElevators={numElevators}
          height={height}
          destinationFloor={requestedFloor}
          blacklineHeight={7}
        />
        {children}
      </div>
    </div>
  );
};

export default Building;
