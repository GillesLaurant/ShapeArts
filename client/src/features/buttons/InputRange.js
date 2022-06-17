import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../shape/shape.slice";

const InputRange = ({ name, label, min, max, step }) => {
  const dispatch = useDispatch();
  const valueInput = useSelector((state) => state.shape[name]);

  // HANDLE RANGE
  const handleDisplay = (ev) => {
    ev.preventDefault();
    dispatch(toggleDisplay({ name: ev.target.name, value: ev.target.value }));
  };
  return (
    <div className="configDisplay-inputs">
      {/* LABEL */}
      <label htmlFor="" className="configDisplay-label">
        {label}
      </label>

      {/* INPUT */}
      <input
        type="range"
        className="configDisplay-range"
        name={name}
        id=""
        min={min}
        max={max}
        step={step}
        value={valueInput}
        onChange={handleDisplay}
      />
    </div>
  );
};

export default InputRange;
