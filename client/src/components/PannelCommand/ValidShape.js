import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetShape } from "../../features/shape/shape.slice";

const ValidShape = () => {
  const dispatch = useDispatch();

  const handleClick = (ev) => {
    ev.preventDefault();
    // ev.target.type === "submit" && ;
    ev.target.type === "reset" && dispatch(resetShape());
  };
  return (
    <section className="validShape">
      <button
        type="reset"
        className="validShape-buttons validShape-reset"
        onClick={handleClick}
      >
        Reset
      </button>
      <button
        type="submit"
        className="validShape-buttons validShape-submit"
        onClick={handleClick}
      >
        Envoyer
      </button>
    </section>
  );
};

export default ValidShape;
