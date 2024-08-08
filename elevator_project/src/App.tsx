import React from "react";
import Building from "./components/Building/Building";
import Floor from "./components/Floor";
import Elevator from "./components/Elevator/Elevator";
import "./reset.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* Example Building with Floors and an Elevator */}
      <Building numFloors={10} height={500} buildingId={1} >
        <Floor number={1} height={100} buildingId={1} />
        <Floor number={2} height={100} buildingId={1} />
        <Floor number={3} height={100} buildingId={1} />
        {/* Add more floors as needed */}
        <Elevator src="/elv.png" alt="Elevator" position={100} />
      </Building>
    </div>
  );
}

export default App;
