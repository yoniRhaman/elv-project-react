// factories/BuildingFactory.ts

import React from "react";
import Building from "../components/Building/Building";

interface BuildingConfig {
  numFloors: number;
  height: number;
  buildingId: number;
  numElevators: number;
  
  children?: React.ReactNode;

}

class BuildingFactory {
  static createBuilding(config: BuildingConfig) {
    return React.createElement(Building, {
      numFloors: config.numFloors,
      height: config.height,
      buildingId: config.buildingId,
      numElevators: config.numElevators,
      children: config.children,
      
    });
  }
}

export default BuildingFactory;
