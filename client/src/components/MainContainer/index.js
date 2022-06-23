import React from "react";
import PropTypes from "prop-types";
import { ButtonWindows } from "../../features/buttons&inputs/ButtonWindows";
import TitleApp from "../App/TitleApp";
import ClothsContainer from "../ClothsContainer";
import TextApp from "../App/TextApp";
import "./style.scss";

/*******    MAIN APP     *******/

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      {/* <TitleApp /> */}
      <ClothsContainer />
      {/* <TextApp /> */}
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
