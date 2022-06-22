import React from "react";
import PannelUser from "../PannelUser";
import PannelCommand from "../PannelCommand";
import MainContainer from "../MainContainer";
import { ButtonWindows } from "../../features/buttons&inputs/ButtonWindows";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindows } from "../../features/app/app.slice";

import "./App.scss";
import ProgressBar from "../../features/timing/ProgressBar";

function App() {
  const dispatch = useDispatch();
  const windowUser = useSelector((state) => state.app.pannel);

  return (
    <div className="App ">
      <ButtonWindows name={"pannelUser"} />
      <ButtonWindows name={"pannelCommand"} />

      {/* <ProgressBar /> */}
      <PannelUser />
      <MainContainer />
      <PannelCommand />
    </div>
  );
}

export default App;
