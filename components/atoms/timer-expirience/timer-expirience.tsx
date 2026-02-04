"use client";

import { useEffect, useState } from "react";
import "./timer-expirience.css";

const DATE_END = "2026-07-23 00:00:00";

export function TimerExpirience() {
  const [remaingTime, setRemaingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function calculateRemaingTime() {
    const date = new Date();
    const dateEnd = new Date(DATE_END);

    let secondsRemaing = dateEnd.getTime() / 1000 - date.getTime() / 1000;
    // console.log({ secondsRemaing });
    const days = Math.floor(secondsRemaing / 86400);
    secondsRemaing = secondsRemaing - days * 86400;
    const hours = Math.floor(secondsRemaing / 3600);
    secondsRemaing = secondsRemaing - hours * 3600;
    const minutes = Math.floor(secondsRemaing / 60);
    secondsRemaing = secondsRemaing - minutes * 60;

    setRemaingTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: Math.floor(secondsRemaing),
    });
  }

  useEffect(function () {
    setInterval(function () {
      calculateRemaingTime();
    }, 1000);
  }, []);

  return (
    <div className="timer-expiriance">
      <div className="timer-expiriance-container">
        <p className="timer-expiriance-number">{remaingTime.days}</p>
        <p className="timer-expiriance-text">Day</p>
      </div>
      <div className="timer-expiriance-container">
        <p className="timer-expiriance-number">{remaingTime.hours}</p>
        <p className="timer-expiriance-text">Hrs</p>
      </div>
      <div className="timer-expiriance-container">
        <p className="timer-expiriance-number">{remaingTime.minutes}</p>
        <p className="timer-expiriance-text">Min</p>
      </div>
      <div className="timer-expiriance-container">
        <p className="timer-expiriance-number">{remaingTime.seconds}</p>
        <p className="timer-expiriance-text">Sec</p>
      </div>
    </div>
  );
}
