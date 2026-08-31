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
      <div key={interval} className="flex flex-col items-center justify-center bg-[#050505]/60 backdrop-blur-sm border border-white/40 p-4 rounded-xl min-w-[80px] sm:min-w-[100px] aspect-square">
        <span className="font-sans text-3xl sm:text-4xl text-white font-semibold mb-2 tracking-wide">
          {timeLeft[interval].toString().padStart(2, '0')}
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] text-white/90 uppercase tracking-widest font-medium">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-6 my-8 mx-auto w-fit place-items-center">
      {timerComponents.length ? timerComponents : <span className="font-heading text-xl text-[var(--color-arcade-neon-pink)] neon-text-pink">GAME OVER!</span>}
    </div>
  );
};

export default Countdown;
