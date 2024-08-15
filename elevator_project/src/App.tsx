import React from "react";
import Building from "./components/Building/Building";
import "./reset.css";
import "./index.css";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "row", gap: "160px" }}
    >
      {/* Example Building with Floors and an Elevator */}
      <Building numFloors={10} height={100} buildingId={1}>
        {/* You can now pass children here if needed */}
      </Building>
      <Building numFloors={10} height={100} buildingId={2}>
        {/* You can now pass children here if needed */}
      </Building>
    </div>
  );
}

export default App;
