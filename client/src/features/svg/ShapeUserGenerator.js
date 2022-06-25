import React from "react";
import { useSelector } from "react-redux";

/*******    GENERATOR SHAPE USER     *******/

const ShapeUserGenerator = () => {
  // Shape
  const shape = useSelector((state) => state.shape);

  // List paths "Round" & "Square" & "Triangle" & "Star"
  const listPaths = {
    round: {
      path: (
        <path
          fill={
            shape.selector_linear
              ? "url(#gradientLinear)"
              : "url(#gradientRadial)"
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
            shape.selector_linear
              ? "url(#gradientLinear)"
              : "url(#gradientRadial)"
          }
          d="M80 80h352v352H80z"
        ></path>
      ),
    },

    triangle: {
      path: (
        <path
          fill={
            shape.selector_linear
              ? "url(#gradientLinear)"
              : "url(#gradientRadial)"
          }
          d="M256 32L20 464h472L256 32z"
        ></path>
      ),
    },

    star: {
      path: (
        <path
          fill={
            shape.selector_linear
              ? "url(#gradientLinear)"
              : "url(#gradientRadial)"
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
        left: `${shape.pos_X - 12}`,
        top: `${shape.pos_Y - 12}`,
        transform: `scale(1.${shape.size}) rotate(${shape.rotation}deg) rotateX(${shape.rotation_X}deg) rotateY(${shape.rotation_Y}deg)`,
        transition: "all 0.3s",
        zIndex: 3,
      }}
    >
      <defs>
        {/* LINEAR GRADIENT */}
        <linearGradient
          id="gradientLinear"
          gradientTransform={`rotate(${shape.gradient_orientation})`}
        >
          {/* PRIMARY COLOR */}
          <stop
            offset={"0%"}
            stopColor={shape.color_primary}
            stopOpacity={shape.primary_opacity}
          />

          {/* SECONDARY COLOR || primary color if not gradient */}
          <stop
            offset={"100%"}
            stopColor={
              shape.selector_gradient
                ? shape.color_secondary
                : shape.color_primary
            }
            stopOpacity={
              shape.selector_gradient
                ? shape.secondary_opacity
                : shape.primary_opacity
            }
          />
        </linearGradient>

        {/* RADIAL GRADIENT */}
        <radialGradient id="gradientRadial" r={shape.gradient_rayon}>
          {/* PRIMARY COLOR */}
          <stop
            offset={"0%"}
            stopColor={shape.color_primary}
            stopOpacity={shape.primary_opacity}
          />

          {/* SECONDARY COLOR || primary color if not gradient */}
          <stop
            offset={"100%"}
            stopColor={
              shape.selector_gradient
                ? shape.color_secondary
                : shape.color_primary
            }
            stopOpacity={
              shape.selector_gradient
                ? shape.secondary_opacity
                : shape.primary_opacity
            }
          />
        </radialGradient>
      </defs>

      {listPaths[shape.name].path}
    </svg>
  );
};

export default ShapeUserGenerator;
