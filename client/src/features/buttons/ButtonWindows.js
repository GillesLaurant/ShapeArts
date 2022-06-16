import React from "react";
import PropTypes from "prop-types";
import Svg from "../svg/generatorSVG";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindows } from "../app/app.slice";
import "./buttons.scss";

export const ButtonWindows = ({ nameClass, svg, name }) => {
  const dispatch = useDispatch();

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
