import React from "react";
import PropTypes from "prop-types";
import ButtonSelectShape from "../../features/buttons/ButtonSelectShape";
import "./style.scss";

const SelectShape = (props) => {
  const allShapes = ["round", "square", "triangle", "star"];
  return (
    <section className="selectShape">
      {allShapes.map((shape) => (
        <ButtonSelectShape key={shape} nameShape={shape} />
      ))}
    </section>
  );
};

SelectShape.propTypes = {};

export default SelectShape;
