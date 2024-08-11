import React, { useState, useEffect } from "react";

type TimerProps = {
  initialCountdown: number;
  onComplete?: () => void; // Optional callback when countdown reaches zero
};

const Timer: React.FC<TimerProps> = ({ initialCountdown, onComplete }) => {
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          if (onComplete) onComplete();
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [onComplete]);

  return (
    <div className="metal timer">
      {countdown.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
