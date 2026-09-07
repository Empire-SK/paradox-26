import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate = 'September 17, 2026 09:00:00' }) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 md:gap-4 w-full max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 md:mb-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center flex-1 max-w-[72px] sm:max-w-[80px]">
          {/* Box with Red Number */}
          <div className="w-full aspect-square bg-[#0c0c0e] border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]/60 transition-colors rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <span className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-tight">
              {unit.value}
            </span>
          </div>
          {/* Label below box */}
          <span className="text-[10px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-1.5 text-center">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

