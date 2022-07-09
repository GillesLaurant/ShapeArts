import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDisplay } from "../PannelShape/shape.slice";

/*******    RANGE INPUTS     *******/

const InputRange = ({ name, label, min, max, step }) => {
  const dispatch = useDispatch();
  const valueInput = useSelector((state) => state.shape[name]);

  // HANDLE RANGE
  const handleDisplay = (ev) => {
    ev.preventDefault();
    dispatch(toggleDisplay({ name: ev.target.name, value: ev.target.value }));
  };

  // SIZE || ROTATION || ROTATION X || ROTATION Y || ORIENTATION || RAYON || OPACITY
  return (
    <div className="configDisplay-inputs">
      {/* LABEL */}
      <label htmlFor="" className="configDisplay-label">
        {label}
      </label>

      {/* RANGE */}
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
