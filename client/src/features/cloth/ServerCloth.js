import React, { useEffect } from "react";
import { render, hydrateRoot } from "react-dom";
import { createRoot } from "react-dom/client";
import PropTypes from "prop-types";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCloth } from "./cloth.slice";
import ShapeServerGenerator from "../svg/ShapesServer";

/*******    SERVER CLOTH     *******/

const ServerCloth = () => {
  const cloth = useSelector((state) => state.cloth);

  return (
    <div id="serverCloth" className="serverCloth">
      {cloth.content.map((shape, index) => (
        <ShapeServerGenerator
          key={index}
          num={index}
          shape={shape}
          count={cloth.count}
          newCloth={cloth.newShape}
        />
      ))}
    </div>
  );
};

ServerCloth.propTypes = {};

export default ServerCloth;
