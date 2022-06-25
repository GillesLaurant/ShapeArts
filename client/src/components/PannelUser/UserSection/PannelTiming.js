import React from "react";
import { useSelector } from "react-redux";
import Timer from "../../../features/timing/Timer";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";

/*******    PANNEL TIMING     *******/

const PannelTiming = () => {
  // Username
  const user = useSelector((state) => state.user.username);

  return (
    <div className="pannelTiming">
      <header className="pannelTiming-head">
        <h2 className="pannelTiming-head-title">Merci d'avoir joué !</h2>

        <h4 className="pannelTiming-head-user">{user}</h4>
      </header>

      {/* TEXT TIMER */}
      <div className="pannelTiming-content">
        <p className="pannelTiming-content-text">Vous devez attendre</p>

        {/* TIMER */}
        <div className="timer">
          <Timer />
        </div>

        <p className="pannelTiming-content-text">
          avant de placer une autre forme.
        </p>
      </div>

      <footer className="pannelTiming-footer">
        {/* ACCOUNT NAV */}
        <ButtonUserNav nav={"nav_Account"} />

        {/* LOGGIN NAV */}
        <ButtonAction nameButton={"loggout"} />
      </footer>
    </div>
  );
};

export default PannelTiming;
