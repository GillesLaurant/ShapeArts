import React from "react";
import PropTypes from "prop-types";

/*******    PANNEL MAIL EDIT     *******/

const GeneratorSVG = ({ nameSvg }) => {
  const normalView = "0 0 512 512";
  const listSVGs = {
    closeWindows: {
      view: normalView,
      path: (
        <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
      ),
    },
    backNav: {
      view: "0 0 96 96",
      path: (
        <g>
          <path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
        </g>
      ),
    },
    avatar: {
      view: "0 0 24 24",
      path: (
        <g>
          <circle cx="12" cy="8" r="4" />
          <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" />
        </g>
      ),
    },
    shapes: {
      view: "0 0 512 512",
      path: (
        <g>
          <path d="M363.27 336H4.73L184 16z" />

          <path d="M336 160a160.54 160.54 0 00-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160z" />
        </g>
      ),
    },
    round: {
      view: normalView,
      path: (
        <path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
      ),
    },
    square: {
      view: normalView,
      path: <path d="M80 80h352v352H80z" />,
    },
    triangle: {
      view: normalView,
      path: <path d="M256 32L20 464h472L256 32z" />,
    },
    star: {
      view: normalView,
      path: (
        <path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z" />
      ),
    },
  };
  return (
    <svg
      className="svg_model"
      fill="current-color"
      stroke="current-color"
      viewBox={listSVGs[nameSvg].view}
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      {listSVGs[nameSvg].path}
    </svg>
  );
};

GeneratorSVG.propTypes = {
  nameSvg: PropTypes.string.isRequired,
};

export default GeneratorSVG;
