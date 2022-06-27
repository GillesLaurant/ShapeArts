import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toggleLayout } from "./shape.slice";
import "./style.scss";

/*******    CONFIG LAYOUT SHAPE     *******/

const ConfigLayout = () => {
  const dispatch = useDispatch();
  const { pos_X, pos_Y } = useSelector((state) => state.shape);

  // Handle psoition with inputs
  const handleLayout = (ev) => {
    ev.preventDefault();
    const option = {
      pos: ev.target.name.slice(0, 5),
      op: ev.target.name.slice(6, 9),
    };
    dispatch(toggleLayout(option));
  };

  return (
    <section className="configLayout">
      {/* LAYOUT X */}
      <div className="configLayout-containers posX">
        <label htmlFor="" className="posX-label">
          Horizontalement
        </label>

        {/* POSITION X */}
        <label className="pos-live">{pos_X}</label>

        {/* BUTTON SUB X  */}
        <button
          type="button"
          className="configLayout-buttons pos_sub "
          name="pos_X_sub"
          onClick={handleLayout}
        >
          -
        </button>

        {/* BUTTON ADD X */}
        <button
          type="button"
          className="configLayout-buttons pos_add "
          name="pos_X_add"
          onClick={handleLayout}
        >
          +
        </button>
      </div>

      {/* LAYOUT Y */}
      <div className="configLayout-containers posY">
        <label htmlFor="" className="posY-label">
          Verticalement
        </label>

        {/* POSITION Y */}
        <label htmlFor="" className="pos-live">
          {pos_Y}
        </label>

        {/* BUTTON SUB Y */}
        <button
          type="button"
          className="configLayout-buttons pos_sub "
          name="pos_Y_sub"
          onClick={handleLayout}
        >
          -
        </button>

        {/* BUTTON ADD Y */}
        <button
          type="button"
          className="configLayout-buttons pos_add "
          name="pos_Y_add"
          onClick={handleLayout}
        >
          +
        </button>
      </div>
    </section>
  );
};

ConfigLayout.propTypes = {};

export default ConfigLayout;
