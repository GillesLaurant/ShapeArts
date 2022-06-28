import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetShape } from "./shape.slice";
import ButtonAction from "../buttons&inputs/ButtonAction";

/*******    CONFIRM SHAPE     *******/

const ValidShape = () => {
  const dispatch = useDispatch();

  // Handle Reset || Valid
  const handleClick = (ev) => {
    ev.preventDefault();
    ev.target.type === "reset" && dispatch(resetShape());
  };
  return (
    <section className="validShape">
      {/* RESET SHAPE */}
      <button
        type="reset"
        className="validShape-buttons validShape-reset"
        onClick={handleClick}
      >
        Reset
      </button>

      {/* VALID SHAPE ACTION */}
      <ButtonAction nameButton={"validShape"} />
    </section>
  );
};

export default ValidShape;