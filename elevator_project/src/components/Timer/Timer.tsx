import React, { useState, useEffect } from 'react';

type TimerProps = {
  initialCountdown: number; // Initial countdown value in seconds
  onComplete?: () => void;  // Optional callback function when countdown reaches zero
};

const Timer: React.FC<TimerProps> = ({ initialCountdown, onComplete }) => {
  const [countdown, setCountdown] = useState<number>(
    Math.max(initialCountdown, 0) // Ensure the initial countdown is not negative
  );

  useEffect(() => {
    // If countdown is zero or negative, do nothing
    if (countdown <= 0) return;

    // Set up an interval to update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          // If countdown is 1 or less, call the onComplete callback and stop the interval
          if (onComplete) onComplete();
          clearInterval(intervalId); // Stop the interval
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000); // Update every second

    // Cleanup the interval on component unmount or when countdown changes
    return () => clearInterval(intervalId);
  }, [countdown, onComplete]);

  return (
    <div className="metal timer">
      {countdown.toString().padStart(2, '0')} {/* Display countdown with leading zero */}
    </div>
  );
};

export default Timer;
