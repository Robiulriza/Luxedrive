
import React, { useEffect, useState } from "react";

const Countdown = ({ onTimeChange,className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 78,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
  
   const endDate = new Date("2026-10-27T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        const zeroTime = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };

        setTimeLeft(zeroTime);
        onTimeChange?.(zeroTime);

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      const newTime = {
        days,
        hours,
        minutes,
        seconds,
      };

      setTimeLeft(newTime);

      // Parent component-এ value পাঠাবে
      onTimeChange?.(newTime);
    };

    // প্রথমবার সাথে সাথে update
    updateCountdown();

    // প্রতি 1 second পর update
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [onTimeChange]);

  return (
    <div className={className}>
      {/* Days */}
      <div className="rounded-xl bg-black px-8 py-5 text-center text-white">
        <h2 className="text-4xl font-bold">
          {timeLeft.days}
        </h2>

        <p className="mt-1 text-sm">
          Days
        </p>
      </div>

      {/* Time */}
      <div className="rounded-xl bg-black px-8 py-5 text-center text-white">
        <h2 className="text-4xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
          {" : "}
          {String(timeLeft.minutes).padStart(2, "0")}
          {" : "}
          {String(timeLeft.seconds).padStart(2, "0")}
        </h2>

        <p className="mt-1 text-sm">
          Hours : Minutes : Seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;

