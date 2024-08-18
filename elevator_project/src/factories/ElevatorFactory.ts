// factories/ElevatorFactory.ts

import React from "react";
import Elevator from "../components/Elevator/Elevator";

interface ElevatorConfig {
  alt: string;
  position: number; // מיקום התחלתי בפיקסלים מהתחתית
  height: number; // גובה המעלית (והקומה)
  destinationFloor?: number; // הקומה אליה המעלית מיועדת להגיע
  blacklineHeight?: number; // גובה הקו השחור בין הקומות
  setInUse: React.Dispatch<React.SetStateAction<boolean[]>>;
  inUse: boolean;
  elevatorToMove: number;
  elevatorNumber:number;
}

class ElevatorFactory {
  static createElevator(config: ElevatorConfig) {
    return React.createElement(Elevator, {
      alt: config.alt,
      position: config.position,
      height: config.height,
      destinationFloor: config.destinationFloor,
      blacklineHeight: config.blacklineHeight,
      inUse: config.inUse,
      setInUse: config.setInUse,
      elevatorToMove: config.elevatorToMove,
      elevatorNumber:config.elevatorNumber,
    });
  }
}

export default ElevatorFactory;
