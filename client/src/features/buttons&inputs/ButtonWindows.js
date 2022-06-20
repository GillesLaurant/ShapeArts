import React from "react";
import PropTypes from "prop-types";
import Svg from "../svg/generatorSVG";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindows } from "../app/app.slice";
import "./style.scss";

/*******    WINDOW TOGGLE BUTTONS     *******/

export const ButtonWindows = ({ nameClass, name }) => {
  const dispatch = useDispatch();

  // Handle Open || Close windows
  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <button
      type="button"
      className={`buttons ${nameClass}`}
      name={name}
      onClick={handleWindows}
    >
      Open
    </button>
  );
};

ButtonWindows.propTypes = {};
