import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const progressBar = useRef();
  const dateShape = useSelector((state) => state.shape.dateCreated);
  // CALCUL TIME LEFT SECONDS
  const timeLeft = (time) => {
    const timeCreated = dayjs(time);
    const timeLimit = dayjs(timeCreated).add(5, "minute").toString();
    const timeLess = dayjs(timeLimit).diff(dayjs(), "second");
    return timeLess;
  };

  useEffect(() => {
    if (dateShape) {
      progressBar.current.animate(
        [{ with: `${timeLeft(dateShape) / 3}vw` }, { width: "0vw" }],
        {
          duration: timeLeft(dateShape) * 1000,
          fill: "forwards",
        }
      );
    }
  }, [dateShape]);

  return (
    <div
      ref={progressBar}
      className="progressBar"
      style={{
        display: dateShape ? "flex" : "none",
        animation: dateShape
          ? `timeOut ${timeLeft(dateShape)}s linear forwards`
          : "none",
      }}
    />
  );
};

export default ProgressBar;
