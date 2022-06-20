import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDisplay,
  toggleGradient,
  toggleGradientType,
} from "../../features/shape/shape.slice";
import "./style.scss";

/*******    CONFIG COLORS SHAPE     *******/

const ConfigColors = () => {
  const dispatch = useDispatch();
  // Shape
  const shape = useSelector((state) => state.shape);

  // Handle type Normal || Gradient colors
  const handleColorsType = (ev) => {
    ev.preventDefault();
    dispatch(toggleGradient());
  };

  // Handle Linear || Radial gradient colors
  const handleGradients = (ev) => {
    ev.preventDefault();
    dispatch(toggleGradientType());
  };

  // Handle colors
  const handleColors = (ev) => {
    ev.preventDefault();
    dispatch(toggleDisplay({ name: ev.target.name, value: ev.target.value }));
  };

  return (
    <section className="configColors">
      <label htmlFor="" className="configColors-label">
        Couleur<span style={{ opacity: shape.selector_gradient && 1 }}>s</span>
      </label>

      {/* TOGGLE NORMAL || GRADIENT COLOR */}
      <div className="configColors-head" onClick={handleColorsType}>
        <button
          className={`configColors-toggle ${
            shape.selector_gradient && "toggle_color_disab"
          }`}
        >
          Normale
        </button>
        <button
          className={`configColors-toggle ${
            !shape.selector_gradient && "toggle_color_disab"
          }`}
        >
          Gradient
        </button>
      </div>

      <div className="configColors-containers">
        {/* CONTAINER NORMAL */}
        <div
          className="containerNormal"
          style={{
            transform: shape.selector_gradient && "translateX(-100%)",
          }}
        >
          <div className="containerNormal-opacity">
            {/* PRIMARY OPACITY */}
            <label className="normal-label-opacity">Opacité</label>
            <input
              type="range"
              name="primary_opacity"
              className="normal-range-opacity"
              min={0}
              max={1}
              step={0.01}
              value={shape.primary_opacity}
              onChange={handleColors}
            />
          </div>

          <input
            type="color"
            name="color_primary"
            className="normal-color-input"
            value={shape.color_primary}
            onChange={handleColors}
            style={{
              opacity: `${shape.primary_opacity}`,
            }}
          />
        </div>

        {/* CONTAINER GRADIENT */}
        <div
          className="containerGradient"
          style={{
            transform: shape.selector_gradient && "translateX(0%)",
          }}
        >
          {/* TOGGLE GRADIENT LINEAR || RADIAL */}
          <div className="gradient-selector" onClick={handleGradients}>
            {/* LINEAR */}
            <p
              className={`gradient-selector-toggle ${
                !shape.selector_linear && "selector_toggle_disab"
              }`}
            >
              Linéaire
            </p>

            {/* RADIAL */}
            <p
              className={`gradient-selector-toggle ${
                shape.selector_linear && "selector_toggle_disab"
              }`}
            >
              Radiale
            </p>
          </div>
          {/* RANGE ORIENTATION || RAYON */}
          <div className="gradient-orientation">
            <label htmlFor="" className="gradient-orientation-label">
              {shape.selector_linear ? "Orientation" : "Rayon"}
            </label>

            <input
              type="range"
              className="gradient-orientation-input"
              name={
                shape.selector_linear
                  ? "gradient_orientation"
                  : "gradient_rayon"
              }
              value={
                shape.selector_linear
                  ? shape.gradient_orientation
                  : shape.gradient_rayon
              }
              onChange={handleColors}
              min={0}
              max={shape.selector_linear ? 360 : 1}
              step={shape.selector_linear ? 1 : 0.001}
            />
          </div>

          {/* COLORS INPUTS */}
          <div className="gradient-inputs">
            {/* PRIMARY GRADIENT */}
            <div className="gradient-inputs-colors">
              {/* PRIMARY OPACITY */}
              <label className="gradient-label-opacity">Opacité</label>
              <input
                type="range"
                name="primary_opacity"
                className="gradient-range-opacity"
                min={0}
                max={1}
                step={0.01}
                value={shape.primary_opacity}
                onChange={handleColors}
              />

              {/* PRIMARY COLOR */}
              <input
                type="color"
                name="color_primary"
                className="gradient-color-input primary-color"
                value={shape.color_primary}
                onChange={handleColors}
                style={{
                  opacity: `${shape.primary_opacity}`,
                }}
              />
            </div>

            {/* SECONDARY GRADIENT */}
            <div className="gradient-inputs-colors">
              <label className="gradient-label-opacity">Opacité</label>

              {/* SECONDARY OPACITY */}
              <input
                type="range"
                name="secondary_opacity"
                className="gradient-range-opacity"
                min={0}
                max={1}
                step={0.01}
                value={shape.secondary_opacity}
                onChange={handleColors}
              />

              {/* SECONDARY COLOR */}
              <input
                type="color"
                name="color_secondary"
                className="gradient-color-input secondary-color"
                value={shape.color_secondary}
                onChange={handleColors}
                style={{
                  opacity: `${shape.secondary_opacity}`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfigColors;
