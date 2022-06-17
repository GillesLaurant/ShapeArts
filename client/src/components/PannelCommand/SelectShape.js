import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectShape } from "../../features/shape/shape.slice";
import GeneratorSVG from "../../features/svg/generatorSVG";
import "./style.scss";

const SelectShape = () => {
  const dispatch = useDispatch();
  const allShapes = ["round", "square", "triangle", "star"];

  const handleShape = (ev) => {
    ev.preventDefault();
    dispatch(selectShape(ev.target.name));
  };
  return (
    <section className="selectShape">
      {allShapes.map((shape) => (
        <button
          key={shape}
          type="button"
          className="selectShape-buttons"
          name={shape}
          onClick={handleShape}
        >
          <GeneratorSVG nameSvg={shape} />
        </button>
      ))}
    </section>
  );
};

SelectShape.propTypes = {};

export default SelectShape;
