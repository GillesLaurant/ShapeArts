import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSection from ".";
import RecentlyShapes from "../tableRecentlyPlayers";
import GeneratorSVG from "../svg/GeneratorSVG";
import { toggleWindows } from "./nav.slice";
import "./style.scss";

/*******   WINDOW USERS     *******/

const PannelUser = () => {
  const dispatch = useDispatch();
  const pannelUser = useSelector((state) => state.nav.windows.pannelUser_open);

  // Handle close window user
  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <section className={`pannelUser ${pannelUser && "pannelUser_open"}`}>
      <div className="pannelUser-head">
        {/* BUTTON CLOSE WINDOW */}
        <button
          type="button"
          className="buttonsWindow button_closeUser"
          name="pannelUser"
          onClick={handleWindows}
        >
          <GeneratorSVG nameSvg={"closeWindows"} />
        </button>
      </div>

      {/* CONTAINER PANNELS USER */}
      <UserSection />

      {/* TABLE RECENTLY PLAYERS */}
      <RecentlyShapes />
    </section>
  );
};

export default PannelUser;
