import React, { useState, useLayoutEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

/*******    TIMER     *******/

const Timer = () => {
  //   const shapeTimeCreated = useSelector((state) => state.shape);
  const shapeTimeCreated = Date();
  const [timer, setTimer] = useState({
    min: 5,
    sec: 0,
  });

  // CALCUL TIME LEFT SECONDS
  const timeLeft = (time) => {
    const timeCreated = dayjs(time);
    const timeLimit = dayjs(timeCreated).add(5, "minute").toString();
    const timeLess = dayjs(timeLimit).diff(dayjs(), "second");
    return timeLess;
  };

  // CONVERT TIME
  const timerPlay = (time) => {
    const timeDecompt = {
      min: Math.floor(timeLeft(time) / 60),
      sec: Math.floor(timeLeft(time) % 60),
    };
    return timeDecompt;
  };
  //   console.log(shapeTimeCreated);
  useLayoutEffect(() => {
    // TIMER PLAY
    // const time = setInterval(() => {
    //   setTimer({
    //     min: timerPlay(shapeTimeCreated).min,
    //     sec: timerPlay(shapeTimeCreated).sec,
    //   });
    // }, 1000);
    // return () => clearInterval(time);
  }, [timer]);

  return (
    <p className="timer-text">
      {(timer.min < 10 ? "0" : "") +
        timer.min +
        " : " +
        (timer.sec < 10 ? "0" : "") +
        timer.sec}
    </p>
  );
};

export default Timer;
