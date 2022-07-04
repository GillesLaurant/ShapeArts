import React from "react";
import { useSelector } from "react-redux";

/*******    GENERATOR SHAPE USER     *******/

const ShapeUserGenerator = () => {
  // Shape
  const {
    name,
    pos_X,
    pos_Y,
    size,
    rotation,
    rotation_X,
    rotation_Y,
    color_primary,
    color_secondary,
    gradient_orientation,
    gradient_rayon,
    primary_opacity,
    secondary_opacity,
    selector_linear,
    selector_gradient,
    is_active,
  } = useSelector((state) => state.shape);
  const logged = useSelector((state) => state.user.isLoggin);

  // List paths "Round" & "Square" & "Triangle" & "Star"
  const listPaths = {
    round: {
      path: (
        <path
          fill={
            selector_linear ? "url(#gradientLinear)" : "url(#gradientRadial)"
          }
          id="roundSVG"
          d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"
        ></path>
      ),
    },

    square: {
      path: (
        <path
          fill={
            selector_linear ? "url(#gradientLinear)" : "url(#gradientRadial)"
          }
          d="M80 80h352v352H80z"
        ></path>
      ),
    },

    triangle: {
      path: (
        <path
          fill={
            selector_linear ? "url(#gradientLinear)" : "url(#gradientRadial)"
          }
          d="M256 32L20 464h472L256 32z"
        ></path>
      ),
    },

    star: {
      path: (
        <path
          fill={
            selector_linear ? "url(#gradientLinear)" : "url(#gradientRadial)"
          }
          d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"
        ></path>
      ),
    },
  };

  return (
    <svg
      className="svg_user"
      viewBox="0 0 512 512"
      height="1.5em"
      width="1.5em"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: `${pos_X - 12}`,
        top: `${pos_Y - 12}`,
        transform: `scale(1.${size}) rotate(${rotation}deg) rotateX(${rotation_X}deg) rotateY(${rotation_Y}deg)`,
        transition: "all 0.3s",
        zIndex: 3,
      }}
      display={logged && is_active ? "inline-flex" : "none"}
    >
      <defs>
        {/* LINEAR GRADIENT */}
        <linearGradient
          id="gradientLinear"
          gradientTransform={`rotate(${gradient_orientation})`}
        >
          {/* PRIMARY COLOR */}
          <stop
            offset={"0%"}
            stopColor={color_primary}
            stopOpacity={primary_opacity}
          />

          {/* SECONDARY COLOR || primary color if not gradient */}
          <stop
            offset={"100%"}
            stopColor={selector_gradient ? color_secondary : color_primary}
            stopOpacity={
              selector_gradient ? secondary_opacity : primary_opacity
            }
          />
        </linearGradient>

        {/* RADIAL GRADIENT */}
        <radialGradient id="gradientRadial" r={gradient_rayon}>
          {/* PRIMARY COLOR */}
          <stop
            offset={"0%"}
            stopColor={color_primary}
            stopOpacity={primary_opacity}
          />

          {/* SECONDARY COLOR || primary color if not gradient */}
          <stop
            offset={"100%"}
            stopColor={selector_gradient ? color_secondary : color_primary}
            stopOpacity={
              selector_gradient ? secondary_opacity : primary_opacity
            }
          />
        </radialGradient>
      </defs>

      {listPaths[name].path}
    </svg>
  );
};

export default ShapeUserGenerator;
