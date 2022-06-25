import React from "react";
import PropTypes from "prop-types";
import ClothsContainer from "../ClothsContainer";
import "./style.scss";
import { useSelector } from "react-redux";

/*******    MAIN APP     *******/

const MainContainer = (props) => {
  const windowCommand = useSelector((state) => state.app.pannelCommand_open);

  return (
    <div
      className="mainContainer"
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
