import React from "react";
import ShapeUserGenerator from "../../features/svg/ShapeUserGenerator";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { togglePosition } from "../../features/shape/shape.slice";

/*******    CLOTH USER SHAPE     *******/

const UserCloth = (props) => {
  const dispatch = useDispatch();
  const { pos_X, pos_Y } = useSelector((state) => state.shape);

  // Set position shape
  const handleLayout = (ev) => {
    ev.preventDefault();
    let position;
    // If click on SVG
    if (ev.target.nodeName === "path" || ev.target.nodeName === "svg") {
      position = {
        posX: pos_X - 12 + ev.nativeEvent.layerX,
        posY: pos_Y - 12 + ev.nativeEvent.layerY,
      };
    } else {
      position = {
        posX: ev.nativeEvent.layerX,
        posY: ev.nativeEvent.layerY,
      };
    }
    dispatch(togglePosition(position));
  };

  return (
    <div className="userCloth">
      <div className="userCloth-container-shape" onClick={handleLayout}>
        <ShapeUserGenerator />
      </div>
    </div>
  );
};

UserCloth.propTypes = {};

export default UserCloth;
