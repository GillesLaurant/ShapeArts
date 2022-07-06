import React from "react";
import { useDispatch } from "react-redux";
import { closeAllWindows } from "../user/nav.slice";

/*******    TEXT APP     *******/

const TextApp = () => {
  const dispatch = useDispatch();

  // Close all windows
  const handleClick = (ev) => {
    ev.preventDefault();
    dispatch(closeAllWindows());
  };

  return (
    <p className="textApp" onClick={handleClick}>
      Une toile où tout le monde peut y laisser son Art !
    </p>
  );
};

TextApp.propTypes = {};

export default TextApp;
