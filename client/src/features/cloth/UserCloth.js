import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePosition } from "../PannelShape/shape.slice";
import ShapeUserGenerator from "../svg/ShapeUserGenerator";
import { toggleWindows } from "../user/nav.slice";
import "./style.scss";

/*******    CLOTH USER SHAPE     *******/

const UserCloth = (props) => {
  const dispatch = useDispatch();
  const { pos_X, pos_Y } = useSelector((state) => state.shape);
  const logged = useSelector((state) => state.user.isLoggin);

  // Set position shape
  const handleLayout = (ev) => {
    ev.preventDefault();
    let position;

    // If click on SVG
    if (ev.target.nodeName === "path" || ev.target.nodeName === "svg") {
      position = {
        posX: pos_X - 12 + ev.nativeEvent.offsetX,
        posY: pos_Y - 12 + ev.nativeEvent.offsetY,
      };
    } else {
      position = {
        posX: ev.nativeEvent.offsetX,
        posY: ev.nativeEvent.offsetY,
      };
    }
    console.log(ev, position.posX, position.posY);
    dispatch(togglePosition(position));
  };

  return (
    <div className="userCloth">
      <div
        className="userCloth-container-shape"
        // If not logged open window user
        onClick={
          logged
            ? handleLayout
            : () => {
                dispatch(toggleWindows("pannelUser"));
              }
        }
      >
        <ShapeUserGenerator />
      </div>
    </div>
  );
};

UserCloth.propTypes = {};

export default UserCloth;
