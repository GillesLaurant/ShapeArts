import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { resetTiming } from "../PannelShape/shape.slice";

/*******    TIMER     *******/

const Timer = () => {
  const dispatch = useDispatch();
  const timeShape = useSelector((state) => state.shape.dateCreated);

  // State timing
  const [timer, setTimer] = useState({
    min: 5,
    sec: 0,
  });

  useEffect(() => {
    // Calcul left time
    const timeLeft = (time) => {
      const timeCreated = dayjs(time);
      const timeLimit = dayjs(timeCreated).add(5, "minute").toString();
      const timeLess = dayjs(timeLimit).diff(dayjs(), "second");
      return timeLess;
    };

    // Convert time in seconds
    const timerPlay = (time) => {
      const timeDecompt = {
        min: Math.floor(timeLeft(time) / 60),
        sec: Math.floor(timeLeft(time) % 60),
      };
      return timeDecompt;
    };
    // Player time
    const time = setInterval(() => {
      setTimer({
        min: timerPlay(timeShape).min,
        sec: timerPlay(timeShape).sec,
      });
    }, 1000);
    // End time
    if (timer.min < 1) {
      if (timer.sec === 0) {
        dispatch(resetTiming());
      }
    }
    return () => clearInterval(time);
  }, [timeShape, timer, dispatch]);

  return (
    <p className="timer-text">
      {/* MINUTES & SECONDS */}
      {(timer.min < 10 ? "0" : "") +
        timer.min +
        " : " +
        (timer.sec < 10 ? "0" : "") +
        timer.sec}
    </p>
  );
};

export default Timer;
