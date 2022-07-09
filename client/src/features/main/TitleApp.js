import React from "react";
import { useDispatch } from "react-redux";
import { closeAllWindows } from "../user/nav.slice";

/*******    TITLE APP     *******/

const TitleApp = () => {
  const dispatch = useDispatch();

  // Close all windows
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(closeAllWindows());
  };
  return (
    <h1 className="titleApp" onClick={handleClick}>
      SHAPEARTS
    </h1>
  );
};

export default TitleApp;
