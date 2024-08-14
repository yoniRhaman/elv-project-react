import React from "react";
import Building from "./components/Building/Building";
import Elevator from "./components/Elevator/Elevator"; // Add this line
import "./reset.css";
import "./index.css";

function App() {
  return (
    <div className="App row gap-20">
      {/* Example Building with Floors and an Elevator */}
      <Building numFloors={10} height={100} buildingId={1}>
        {/* You can now pass children here if needed */}
      </Building>
    </div>
  );
}

export default App;
