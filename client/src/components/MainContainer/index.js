import React from "react";
import PropTypes from "prop-types";
import ClothPrevious from "../ClothsContainer/clothPrevious";
import TitleApp from "./TitleApp";
import TextApp from "./TextApp";
import "./style.scss";

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      <TitleApp />
      <ClothPrevious />
      <TextApp />
    </div>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
