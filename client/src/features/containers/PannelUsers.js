import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSection from "../user";
import RecentlyShapes from "../tableRecentlyPlayers";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";
import { toggleWindows, navigate } from "../user/nav.slice";
import "./style.scss";
import GeneratorSVG from "../svg/GeneratorSVG";

const PannelUser = () => {
  const dispatch = useDispatch();
  const pannelUser = useSelector((state) => state.nav.pannelUser_open);

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
