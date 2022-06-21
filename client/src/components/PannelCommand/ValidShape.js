import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetShape } from "../../features/shape/shape.slice";
import ButtonAction from "../../features/buttons&inputs/ButtonAction";

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
      {/* <button
        type="submit"
        className="validShape-buttons validShape-submit"
        onClick={handleClick}
      >
        Envoyer
      </button> */}
    </section>
  );
};

export default ValidShape;
