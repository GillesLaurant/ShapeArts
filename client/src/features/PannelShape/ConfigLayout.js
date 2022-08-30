import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GeneratorSVG from "../svg/GeneratorSVG";
import { toggleLayout } from "./shape.slice";
import "./style.scss";

/*******    CONFIG LAYOUT SHAPE     *******/

const ConfigLayout = () => {
  const dispatch = useDispatch();
  const { pos_X, pos_Y } = useSelector((state) => state.shape);
  const logged = useSelector((state) => state.user.isLoggin);

  // Handle psoition with inputs
  const handleLayout = (ev) => {
    ev.preventDefault();
    if (!logged) {
      return;
    }
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
        {/* POSITION X */}
        <label className="pos-live">{pos_X}</label>

        {/* BUTTON SUB X  */}
        <button
          type="button"
          className="configLayout-buttons pos_sub pos_sub_x"
          name="pos_X_sub"
          onClick={handleLayout}
        >
          <GeneratorSVG nameSvg="arrow" />
        </button>

        {/* BUTTON ADD X */}
        <button
          type="button"
          className="configLayout-buttons pos_add pos_add_x"
          name="pos_X_add"
          onClick={handleLayout}
        >
          <GeneratorSVG nameSvg="arrow" />
        </button>
      </div>

      {/* LAYOUT Y */}
      <div className="configLayout-containers posY">
        {/* POSITION Y */}
        <label htmlFor="" className="pos-live">
          {pos_Y}
        </label>

        {/* BUTTON SUB Y */}
        <button
          type="button"
          className="configLayout-buttons pos_sub pos_sub_y"
          name="pos_Y_sub"
          onClick={handleLayout}
        >
          <GeneratorSVG nameSvg="arrow" />
        </button>

        {/* BUTTON ADD Y */}
        <button
          type="button"
          className="configLayout-buttons pos_add pos_add_y"
          name="pos_Y_add"
          onClick={handleLayout}
        >
          <GeneratorSVG nameSvg="arrow" />
        </button>
      </div>
    </section>
  );
};

export default ConfigLayout;
