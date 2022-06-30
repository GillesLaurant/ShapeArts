import React from "react";
import { useDispatch } from "react-redux";
import { resetShape } from "./shape.slice";
import ButtonAction from "../buttons&inputs/ButtonAction";

/*******    CONFIRM SHAPE     *******/

const ValidShape = () => {
  const dispatch = useDispatch();

  // Handle Reset
  const handleReset = (ev) => {
    ev.preventDefault();

    dispatch(resetShape());
  };
  return (
    <section className="validShape">
      {/* RESET SHAPE */}
      <button
        type="reset"
        className="validShape-buttons validShape-reset"
        onClick={handleReset}
      >
        Reset
      </button>

      {/* VALID SHAPE ACTION */}
      <ButtonAction nameButton={"validShape"} />
    </section>
  );
};

export default ValidShape;
