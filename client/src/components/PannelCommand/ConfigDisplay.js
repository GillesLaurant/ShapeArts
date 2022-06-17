import React from "react";
import InputRange from "../../features/buttons/InputRange";
import PropTypes from "prop-types";

const ConfigDisplay = (props) => {
  // INPUTS LIST
  const inputs = [
    {
      name: "pos_Z",
      label: "Profondeur",
      min: 0,
      max: 500,
      step: 1,
    },
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
      name: "opacity",
      label: "Opacité",
      min: 0,
      max: 100,
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
