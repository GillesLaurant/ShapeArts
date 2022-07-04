import React from "react";
import { useSelector } from "react-redux";
import ServerCloth from "./ServerCloth";
import UserCloth from "./UserCloth";

/*******    CLOTHS CONTAINER     *******/

const ClothsContainer = () => {
  const command = useSelector((state) => state.nav.windows.pannelCommand_open);
  console.log(command);

  return (
    <div
      className="clothsContainer"
      style={
        {
          // transform:
          //   // Translate -15% if pannel command open in mobile screen
          //   window.innerWidth > 767
          //     ? "translateY(0)"
          //     : command
          //     ? "translateY(-15%)"
          //     : "translateY(0)",
          // Height 65% if pannel command open in mobile screen
          // height: window.innerWidth > 767 ? "auto" : command ? "65vh" : "80%",
        }
      }
    >
      <UserCloth />
      <ServerCloth />
    </div>
  );
};

export default ClothsContainer;
