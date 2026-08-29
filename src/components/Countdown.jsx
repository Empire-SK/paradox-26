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
      <div key={interval} className="flex flex-col items-center justify-center bg-black/80 border-2 border-[var(--color-arcade-neon-green)] p-3 sm:p-4 rounded-lg shadow-[0_0_10px_var(--color-arcade-neon-green)] min-w-[70px] sm:min-w-[90px]">
        <span className="font-heading text-lg sm:text-2xl neon-text-green mb-2 text-[var(--color-arcade-neon-green)]">
          {timeLeft[interval].toString().padStart(2, '0')}
        </span>
        <span className="font-heading text-[8px] sm:text-[10px] text-white uppercase tracking-widest">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 my-8">
      {timerComponents.length ? timerComponents : <span className="font-heading text-xl text-[var(--color-arcade-neon-pink)] neon-text-pink">GAME OVER!</span>}
    </div>
  );
};

export default Countdown;
