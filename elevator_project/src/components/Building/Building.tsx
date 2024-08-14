import React, { FC, useState } from "react";
import { Floor } from "../Floor";
import { Elevator } from "../Elevator";

type BuildingProps = {
  numFloors: number;
  height: number;
  buildingId: number;
  children?: React.ReactNode;
};

const Building: FC<BuildingProps> = ({
  numFloors,
  height,
  buildingId,
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
    <div className="building row ">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>{floors}</div>
        <div style={{position: "relative", backgroundColor: "red"}}>
          <Elevator
            alt="Elevator"
            position={0}
            height={height}
            destinationFloor={requestedFloor}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Building;
