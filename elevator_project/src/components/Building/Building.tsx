import React from "react";
import Floor from "../Floor";

type BuildingProps = {
  numFloors: number;
  height: number;
  buildingId: number;
};

const Building: React.FC<BuildingProps> = ({ numFloors, height, buildingId }) => {
  const floors = Array.from({ length: numFloors }, (_, i) => (
    <Floor key={i} number={i + 1} height={height} buildingId={buildingId} />
  ));

  return (
    <div className="building floor ">
      {floors}
    </div>
  );
};

export default Building;
