import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toggleWindows } from "../user/nav.slice";
import "./style.scss";

/*******    WINDOW TOGGLE BUTTONS     *******/

export const ButtonWindows = ({ name }) => {
  const dispatch = useDispatch();

  // List SVG buttons
  const listSVGs = {
    pannelCommand: (
      <svg
        className="svg_window"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="5" cy="8" r="2" />
          <line x1="7" x2="32" y1="8" y2="8" />
          <circle cx="5" cy="24" fill="none" r="2" />
          <line x1="7" x2="32" y1="24" y2="24" />
          <circle cx="27" cy="16" r="2" />
          <line x1="25" x2="0" y1="16" y2="16" />
          <line x1="3" x2="0" y1="8" y2="8" />
          <line x1="29" x2="32" y1="16" y2="16" />
          <line x1="3" x2="0" y1="24" y2="24" />
        </g>
      </svg>
    ),
    pannelUser: (
      <svg
        className="svg_window"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" x2="12" y1="2" y2="12" />
        </g>
      </svg>
    ),
  };

  // Handle Open || Close windows
  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <button
      type="button"
      className={`buttons_windows button_${name}`}
      name={name}
      onClick={handleWindows}
    >
      {listSVGs[name]}
    </button>
  );
};

ButtonWindows.propTypes = {
  name: PropTypes.string.isRequired,
};
