import React, { FC } from "react";

type FloorProps = {
  number: number; // מספר הקומה
  height: number; // גובה הקומה בפיקסלים
  buildingId: number; // מזהה הבניין
};

const Floor: FC<FloorProps> = ({ number, height, buildingId }) => {
  return (
    <div className="floor" key={number} style={{ height: `${height}px` }}>
      <button className=" metal linear ">{number}</button>
    </div>
  );
};

export default Floor;
