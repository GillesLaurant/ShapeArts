import React from "react";
import PropTypes from "prop-types";
import ClothsContainer from "../cloth";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeAllWindows } from "../user/nav.slice";

/*******    MAIN APP     *******/

const MainContainer = () => {
  const dispatch = useDispatch();
  const windowCommand = useSelector((state) => state.nav.pannelCommand_open);
  const logged = useSelector((state) => state.user.isLoggin);

  const handleClick = (ev) => {
    ev.preventDefault();
    logged && dispatch(closeAllWindows());
  };

  return (
    <div
      className="mainContainer"
      onClick={handleClick}
      style={{
        marginRight:
          window.innerWidth > 576 && window.innerWidth < 1200
            ? windowCommand
              ? "35%"
              : "auto"
            : 0,
      }}
    >
      <ClothsContainer />
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
