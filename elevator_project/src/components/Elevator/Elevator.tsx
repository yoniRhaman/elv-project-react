import React, { FC, useState, useEffect } from "react";

type ElevatorProps = {
  alt: string;
  position: number; // מיקום התחלתי בפיקסלים מהתחתית
  height: number; // גובה המעלית (והקומה)
  destinationFloor?: number; // הקומה אליה המעלית מיועדת להגיע
  blacklineHeight?: number; // גובה הקו השחור בין הקומות
  setInUse: React.Dispatch<React.SetStateAction<boolean[]>>;
  inUse: boolean;
  elevatorToMove: number;
  elevatorNumber: number;
};

const Elevator: FC<ElevatorProps> = ({
  alt,
  position,
  height,
  destinationFloor,
  blacklineHeight = 7, // גובה הקו השחור מוגדר כברירת מחדל ל־7 פיקסלים
  setInUse,
  inUse,
  elevatorToMove,
  elevatorNumber,
}) => {
  const [currentPosition, setCurrentPosition] = useState(position);
  const [floorsToMove, setFloorsToMove] = useState(0);

  useEffect(() => {
    if (destinationFloor === undefined) {
      return;
    }
    if (elevatorToMove !== elevatorNumber) {
      return;
    }
    console.log(elevatorToMove, "bar");

    // חישוב המיקום החדש בהתחשב בגובה הקומה ובגובה הקו השחור
    const newPosition = (destinationFloor - 1) * (height + blacklineHeight);
    const _floorsToMove = Math.abs(newPosition - currentPosition);

    // חישוב הזמן שייקח למעלית להגיע
    setFloorsToMove((_floorsToMove / (height + blacklineHeight)) * 0.5);
    setCurrentPosition(newPosition);
    setTimeout(() => {
      setInUse((prev) => {
        

        const copy = [...prev];
        copy[elevatorToMove] = false;

        
        return copy;
      });
    }, 3000);
  }, [destinationFloor]);
  

  return (
    <img
      src={"elv.png"}
      alt={alt}
      style={{
        position: "relative",
        top: `-${currentPosition}px`,
        height: `${height}px`,
        transition: `${floorsToMove}s ease`, // מעבר חלק
      }}
    />
  );
};

export default Elevator;
