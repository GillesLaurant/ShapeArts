import React from "react";
import ServerCloth from "./ServerCloth";
import UserCloth from "./UserCloth";

/*******    CLOTHS CONTAINER     *******/

const ClothsContainer = () => {
  return (
    <div className="clothsContainer">
      <UserCloth />
      <ServerCloth />
    </div>
  );
};

export default ClothsContainer;
