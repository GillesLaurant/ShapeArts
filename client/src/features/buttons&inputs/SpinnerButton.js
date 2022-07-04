import React from "react";
import "./style.scss";

/*******    SPINNER BUTTON     *******/

const SpinnerButton = () => {
  return (
    <div className="spinnerButton">
      <div className="spinnerButton-spinner spinner1" />
      <div className="spinnerButton-spinner spinner2" />
      <div className="spinnerButton-spinner spinner3" />
    </div>
  );
};

export default SpinnerButton;
