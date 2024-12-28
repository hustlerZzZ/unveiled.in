"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
    const endTime = new Date("2025-01-10T12:00:00+05:30").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = endTime - now;

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (timeRemaining <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);

    return (
        <p className="text-4xl">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
        </p>
    );
};

export default Countdown;
