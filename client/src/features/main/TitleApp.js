import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAllWindows } from "../user/nav.slice";

/*******    TITLE APP     *******/

const TitleApp = () => {
  const dispatch = useDispatch();

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

TitleApp.propTypes = {};

export default TitleApp;
