import React from "react";
import PropTypes from "prop-types";
import TitleApp from "./TitleApp";
import ClothsContainer from "../ClothsContainer";
import TextApp from "./TextApp";
import "./style.scss";

/*******    MAIN APP     *******/

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      <TitleApp />
      <ClothsContainer />
      <TextApp />
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
