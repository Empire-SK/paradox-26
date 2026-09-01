import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flux-card flex flex-col items-center justify-center p-4 min-w-[80px] sm:min-w-[100px] aspect-square">
        <span className="font-sans text-3xl sm:text-4xl text-[var(--color-primary)] font-semibold mb-1 tracking-wide">
          {timeLeft[interval].toString().padStart(2, '0')}
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] text-gray-400 uppercase tracking-widest font-medium">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-4 w-full">
      {timerComponents.length ? timerComponents : <span className="font-sans text-xl text-[var(--color-primary)] font-bold">GAME OVER!</span>}
    </div>
  );
};

export default Countdown;
