import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GeneratorSVG from "../svg/GeneratorSVG";
import { selectShape } from "./shape.slice";
import "./style.scss";

/*******    SELECT SHAPE     *******/

const SelectShape = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.isLoggin);

  // List shapes
  const allShapes = ["round", "square", "triangle", "star"];

  // Click shapes
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
          onClick={logged ? handleShape : () => {}}
        >
          <GeneratorSVG nameSvg={shape} />
        </button>
      ))}
    </section>
  );
};

export default SelectShape;
