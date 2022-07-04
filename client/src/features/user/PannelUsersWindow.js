import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSection from ".";
import RecentlyShapes from "../tableRecentlyPlayers";
import GeneratorSVG from "../svg/GeneratorSVG";
import { toggleWindows } from "./nav.slice";
import "./style.scss";

const PannelUser = () => {
  const dispatch = useDispatch();
  const pannelUser = useSelector((state) => state.nav.windows.pannelUser_open);

  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <section className={`pannelUser ${pannelUser && "pannelUser_open"}`}>
      <div className="pannelUser-head">
        <button
          type="button"
          className="buttonsWindow button_closeUser"
          name="pannelUser"
          onClick={handleWindows}
        >
          <GeneratorSVG nameSvg={"closeWindows"} />
        </button>
      </div>

      <UserSection />
      <RecentlyShapes />
    </section>
  );
};

PannelUser.propTypes = {};

export default PannelUser;
