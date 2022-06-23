import React from "react";
import { useSelector } from "react-redux";
import ServerCloth from "./ServerCloth";
import UserCloth from "./UserCloth";

/*******    CLOTHS CONTAINER     *******/

const ClothsContainer = () => {
  const command = useSelector((state) => state.app.pannelCommand_open);

  return (
    <div
      className="clothsContainer"
      style={{
        transform: command ? "translateY(-15%)" : "translateY(0)",
        height: command ? "65%" : "80%",
      }}
    >
      <UserCloth />
      <ServerCloth />
    </div>
  );
};

export default ClothsContainer;
