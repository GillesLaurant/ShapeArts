import React from "react";
import PannelUser from "../PannelUser";
import PannelCommand from "../PannelCommand";
import MainContainer from "../MainContainer";
import { ButtonWindows } from "../../features/buttons/ButtonWindows";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindows } from "../../features/app/app.slice";

import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const windowUser = useSelector((state) => state.app.pannel);

  return (
    <div className="App ">
      <ButtonWindows
        nameClass={"toggleContainerPannel toggleUser"}
        svg={"pannelCommand"}
        name={"pannelUser"}
      />
      <ButtonWindows
        nameClass={"toggleContainerPannel toggleCommand"}
        svg={"pannelCommand"}
        name={"pannelCommand"}
      />
      <PannelUser />
      <MainContainer />
      <PannelCommand />
    </div>
  );
}

export default App;
