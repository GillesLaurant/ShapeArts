import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShape } from "../shape/shape.slice";
import PropTypes from "prop-types";
import GeneratorSVG from "../svg/generatorSVG";
import "./buttons.scss";

const ButtonSelectShape = ({ nameShape }) => {
  const dispatch = useDispatch();

  const handleShape = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    dispatch(selectShape(ev.target.name));
  };
  return (
    <button
      className="selectShape-buttons"
      name={nameShape}
      onClick={handleShape}
    >
      <GeneratorSVG nameSvg={nameShape} />
    </button>
  );
};

ButtonSelectShape.propTypes = {};

export default ButtonSelectShape;
