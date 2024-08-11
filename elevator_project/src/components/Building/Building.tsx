import React from "react";
import { Floor } from "../Floor";
import { Timer } from "../Timer";

type BuildingProps = {
  numFloors: number;
  height: number;
  buildingId: number;
} & React.PropsWithChildren;

const Building: React.FC<BuildingProps> = ({
  numFloors,
  height,
  buildingId,
  children,
}) => {
  // Create floors in descending order (from top to bottom)
  const floors = Array.from({ length: numFloors }, (_, i) => (
    <React.Fragment key={i}>
      <Floor number={numFloors - i} height={height} buildingId={buildingId} />
      {i < numFloors - 1 && <div className="blackline" />} {/* Black line between each floor */}
    </React.Fragment>
  ));

  return (
    <div className="building">
      <Timer initialCountdown={10} /> {/* Add timer above the top floor */}
      {floors}
      {children} {/* Display children here */}
    </div>
  );
};

export default Building;
