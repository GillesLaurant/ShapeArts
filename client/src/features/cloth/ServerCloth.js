import React from "react";
import { useSelector } from "react-redux";
import ShapeServerGenerator from "../svg/ShapesServer";
import "./style.scss";

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
