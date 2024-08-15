import React, { useState, useEffect } from 'react';

type TimerProps = {
  initialCountdown: number; // ערך ההתחלתי של הטיימר בשניות
  onComplete?: () => void;  // פונקציה אופציונלית שתיקרא כאשר הטיימר מגיע לאפס
};

const Timer: React.FC<TimerProps> = ({ initialCountdown, onComplete }) => {
  const [countdown, setCountdown] = useState<number>(
    Math.max(initialCountdown, 0) // מבטיח שהערך ההתחלתי של הטיימר לא יהיה שלילי
  );

  useEffect(() => {
    // אם הטיימר הוא אפס או שלילי, לא עושים כלום
    if (countdown <= 0) return;

    // יצירת אינטרוול לעדכון הטיימר כל שניה
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          // אם הטיימר הוא 1 או פחות, לקרוא לפונקציה onComplete ולעצור את האינטרוול
          if (onComplete) onComplete();
          clearInterval(intervalId); // עצירת האינטרוול
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000); // לעדכן כל שניה

    // ניקוי האינטרוול כאשר הקומפוננטה מתפרקת או כאשר הטיימר משתנה
    return () => clearInterval(intervalId);
  }, [countdown, onComplete]);

  return (
    <div className="metal timer">
      {countdown.toString().padStart(2, '0')} {/* מציג את הטיימר עם אפסים מובילים במקרה הצורך */}
    </div>
  );
};

export default Timer;
