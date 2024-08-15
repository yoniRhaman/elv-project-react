import React, { FC, useState } from "react";
import { Timer } from "../Timer";

type FloorProps = {
  number: number; // מספר הקומה
  height: number; // גובה הקומה בפיקסלים
  buildingId: number; // מזהה הבניין
  onRequestElevator: (floorNumber: number) => void; // פונקציה שמופעלת כאשר מבקשים מעלית
};

const Floor: FC<FloorProps> = ({ number, height, buildingId, onRequestElevator }) => {
  const [showTimer, setShowTimer] = useState(false); // האם להציג את הטיימר או לא
  const [countdown, setCountdown] = useState(0); // זמן הספירה לאחור עד שהמעלית תגיע

  const handleButtonClick = () => {
    // חישוב הזמן הצפוי להגעת המעלית, בהנחה שהיא מתחילה בקומה הראשונה
    const timeToArrival = Math.abs(number - 1) * 0.5; 
    setCountdown(Math.ceil(timeToArrival)); // עיגול זמן ההגעה כלפי מעלה ושמירתו בטיימר
    setShowTimer(true); // הצגת הטיימר
    onRequestElevator(number); // הפעלת הפונקציה שמבקשת את המעלית

    // הסתרת הטיימר לאחר שהמעלית הגיעה
    setTimeout(() => setShowTimer(false), timeToArrival * 1000 + 2000); 
  };

  return (
    <div className="floor" key={number} style={{ height: `${height}px`, border: "1px solid black" }}>
      <button onClick={handleButtonClick} className="metal linear">
        {number} {/* הצגת מספר הקומה על הכפתור */}
      </button>
      {showTimer && <Timer initialCountdown={countdown} />} {/* הצגת הטיימר אם צריך */}
    </div>
  );
};

export default Floor;
