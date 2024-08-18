// App.tsx

import React from "react";
import BuildingFactory from "./factories/BuildingFactory";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "row", gap: "260px" }}
    >
      {/* יצירת בניינים באמצעות ה-Factory */}
      {BuildingFactory.createBuilding({
        numFloors: 10,
        height: 100,
        buildingId: 1,
        numElevators: 3,
      })}
      {BuildingFactory.createBuilding({
        numFloors: 5,
        height: 100,
        buildingId: 2,
        numElevators: 1,
      })}
      
      {BuildingFactory.createBuilding({
        numFloors: 5,
        height: 100,
        buildingId: 3,
        numElevators: 5,
      })}
    </div>
  );
}

export default App;
