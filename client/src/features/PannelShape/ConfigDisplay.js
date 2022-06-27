import React from "react";
import InputRange from "../buttons&inputs/InputRange";
import PropTypes from "prop-types";

/*******    CONFIG DISPLAY SHAPE     *******/

const ConfigDisplay = (props) => {
  // List inputs pos_z & size & rotation & rotation_x & rotation_y
  const inputs = [
    {
      name: "size",
      label: "Taille",
      min: 10,
      max: 70,
      step: 1,
    },
    {
      name: "rotation",
      label: "Rotation",
      min: 0,
      max: 360,
      step: 1,
    },
    {
      name: "rotation_X",
      label: "Rotation x",
      min: 0,
      max: 360,
      step: 1,
    },
    {
      name: "rotation_Y",
      label: "Rotation Y",
      min: 0,
      max: 360,
      step: 1,
    },
  ];

  return (
    <section className="configDisplay">
      {inputs.map((input) => (
        <InputRange
          key={input.name}
          name={input.name}
          label={input.label}
          min={input.min}
          max={input.max}
          step={input.step}
        />
      ))}
    </section>
  );
};

ConfigDisplay.propTypes = {};

export default ConfigDisplay;
