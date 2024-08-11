import React from "react";
import Building from "./components/Building/Building";
import { Floor } from "./components/Floor";
import Elevator from "./components/Elevator/Elevator";
import "./reset.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Example Building with Floors and an Elevator */}
      <Building numFloors={10} height={100} buildingId={1}>
        {/* Add more floors as needed */}
      </Building>
      <Elevator alt="Elevator" position={100} />
    </div>
  );
}

export default App;
