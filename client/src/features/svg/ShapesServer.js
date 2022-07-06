import React, { useRef, useEffect } from "react";

/*******    GENERATOR SHAPES CLOTH     *******/

const ShapeServerGenerator = ({ num, shape, count, newCloth }) => {
  const svgTarget = useRef();
  const {
    id,
    name,
    pos_x,
    pos_y,
    size,
    rotation,
    rotation_x,
    rotation_y,
    color_primary,
    color_secondary,
    gradient_orientation,
    gradient_rayon,
    primary_opacity,
    secondary_opacity,
    gradient_selector,
    gradient_linear,
  } = shape;
  const userShape = shape.User.user_name;

  // List paths "Round" & "Square" & "Triangle" & "Star"
  const listPaths = {
    round: {
      path: (
        <path
          id={`recent_${id}`}
          fill={
            gradient_linear
              ? `url(#gradientLinear_${id})`
              : `url(#gradientRadial_${id})`
          }
          d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"
        ></path>
      ),
    },

    square: {
      path: (
        <path
          id={`recent_${id}`}
          fill={
            gradient_linear
              ? `url(#gradientLinear_${id})`
              : `url(#gradientRadial_${id})`
          }
          d="M80 80h352v352H80z"
        ></path>
      ),
    },

    triangle: {
      path: (
        <path
          id={`recent_${id}`}
          fill={
            gradient_linear
              ? `url(#gradientLinear_${id})`
              : `url(#gradientRadial_${id})`
          }
          d="M256 32L20 464h472L256 32z"
        ></path>
      ),
    },

    star: {
      path: (
        <path
          id={`recent_${id}`}
          fill={
            gradient_linear
              ? `url(#gradientLinear_${id})`
              : `url(#gradientRadial_${id})`
          }
          d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z"
        ></path>
      ),
    },
  };

  useEffect(() => {
    // Random number rotate
    const randomRotation = () => {
      return Math.floor(Math.random() * id * (720 - 50 + 1)) + 50;
    };
    // First cloth anime all shapes
    if (!newCloth) {
      svgTarget.current.animate(
        [
          {
            left: "450px",
            top: "350px",
            transform: `scale(0.1) rotate(${randomRotation()}deg) rotateX(${randomRotation()}deg) rotateY(${randomRotation()}deg)`,
          },
          {
            left: `${pos_x - 12}px`,
            top: `${pos_y - 12}px`,
            transform: `scale(1.${size}) rotate(${rotation}deg) rotateX(${rotation_x}deg) rotateY(${rotation_y}deg)`,
          },
        ],
        {
          duration: (3000 / count) * id,
          delay: id,
          fill: "forwards",
          easing: "cubic-bezier(0.12, 0.61, 1, 0.64)",
        }
      );
    }
    // New shape anime last shape
    else if (newCloth && num === count - 1) {
      svgTarget.current.animate(
        [
          {
            left: "450px",
            top: "350px",
            transform: `scale(2.5) rotate(${randomRotation()}deg) rotateX(${randomRotation()}deg) rotateY(${randomRotation()}deg)`,
          },
          {
            left: `${pos_x - 12}px`,
            top: `${pos_y - 12}px`,
            transform: `scale(1.${size}) rotate(${rotation}deg) rotateX(${rotation_x}deg) rotateY(${rotation_y}deg)`,
          },
        ],
        {
          duration: 2000,
          fill: "forwards",
          easing: "cubic-bezier(0, 1, 0, 1.02)",
        }
      );
    }
  }, [
    id,
    name,
    pos_x,
    pos_y,
    size,
    rotation,
    rotation_x,
    rotation_y,
    color_primary,
    color_secondary,
    gradient_orientation,
    gradient_rayon,
    primary_opacity,
    secondary_opacity,
    gradient_selector,
    gradient_linear,
    count,
    newCloth,
    num,
  ]);

  return (
    <svg
      ref={svgTarget}
      className={`${userShape}_${id}`}
      viewBox="0 0 512 512"
      height="1.5em"
      width="1.5em"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: "450px",
        top: "350px",
        transform: `scale(0.${size}) rotate(${rotation}deg) rotateX(${rotation_x}deg) rotateY(${rotation_y}deg)`,
        transition: "all 0.3s easeOut",
        zIndex: `${id}`,
      }}
    >
      <defs>
        {/* LINEAR GRADIENT */}
        <linearGradient
          id={`gradientLinear_${id}`}
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
            stopColor={gradient_selector ? color_secondary : color_primary}
            stopOpacity={
              gradient_selector ? secondary_opacity : primary_opacity
            }
          />
        </linearGradient>

        {/* RADIAL GRADIENT */}
        <radialGradient id={`gradientRadial_${id}`} r={gradient_rayon}>
          {/* PRIMARY COLOR */}
          <stop
            offset={"0%"}
            stopColor={color_primary}
            stopOpacity={primary_opacity}
          />

          {/* SECONDARY COLOR || primary color if not gradient */}
          <stop
            offset={"100%"}
            stopColor={gradient_selector ? color_secondary : color_primary}
            stopOpacity={
              gradient_selector ? secondary_opacity : primary_opacity
            }
          />
        </radialGradient>
      </defs>

      {listPaths[name].path}
    </svg>
  );
};

export default ShapeServerGenerator;
