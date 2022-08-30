import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWindows } from "./features/buttons&inputs/ButtonWindows";
import ClothsContainer from "./features/cloth";
import TextApp from "./features/main/TextApp";
import TitleApp from "./features/main/TitleApp";
import PannelCommand from "./features/PannelShape";
import { connectSocket } from "./features/socket/socket.slice";
import ProgressBar from "./features/timing/ProgressBar";
import PannelUser from "./features/user/PannelUsersWindow";
import "./styles/styles.scss";

function App() {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket_connected);
  const command = useSelector((state) => state.nav.windows.pannelCommand_open);
  const userConnected = useSelector((state) => state.user.id);

  // Start connect server
  useEffect(() => {
    !socket && dispatch(connectSocket());
  }, [dispatch, socket]);

  return (
    <div className="App ">
      <TitleApp />
      <ButtonWindows name={"pannelUser"} />
      <ButtonWindows name={"pannelCommand"} />
      <TextApp />
      <ProgressBar />
      <PannelUser />
      <div
        className="mainContainer"
        style={{
          transform:
            // Translate -15% if pannel command open in mobile screen
            window.innerWidth > 767
              ? "translateY(0)"
              : command
              ? "translateY(-15%)"
              : "translateY(0)",
          // Add margin to open pannel command
          marginRight:
            window.innerWidth > 767 && window.innerWidth < 1200
              ? command
                ? "31%"
                : "auto"
              : "auto",
          // Height 65% if pannel command open in mobile screen
          height: window.innerWidth > 767 ? "auto" : command ? "65vh" : "80%",
          borderRadius: userConnected !== -1 ? 0 : "20px",
        }}
      >
        <ClothsContainer />
      </div>

      <PannelCommand />
    </div>
  );
}

export default App;
