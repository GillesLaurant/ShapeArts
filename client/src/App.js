import React, { useEffect, useRef } from "react";
import PannelUser from "./features/containers/PannelUsers";
import PannelCommand from "./features/PannelShape";
import MainContainer from "./features/containers/Main";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "./features/timing/ProgressBar";
import TitleApp from "./features/main/TitleApp";
import TextApp from "./features/main/TextApp";
import { ButtonWindows } from "./features/buttons&inputs/ButtonWindows";
import { connectSocket } from "./features/socket/socket.slice";
import { requestCloth } from "./features/cloth/cloth.slice";
import "./styles/styles.scss";

function App() {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.status);

  console.log(
    "test",
    useSelector((state) => state)
  );
  useEffect(() => {
    socket === "idle" && dispatch(connectSocket());
  }, []);

  return (
    <div className="App ">
      <TitleApp />
      <ButtonWindows name={"pannelUser"} />
      <ButtonWindows name={"pannelCommand"} />
      <TextApp />
      {/* <ProgressBar /> */}
      <PannelUser />
      <MainContainer />
      <PannelCommand />
    </div>
  );
}

export default App;
