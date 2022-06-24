import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserSection from "./UserSection";
import RecentlyShapes from "./RecentlyShapes";
import ButtonUserNav from "../../features/buttons&inputs/ButtonUserNav";
import { toggleWindows } from "../../features/app/app.slice";
import { navigate } from "../../features/app/navUser.slice";
import "./style.scss";
import GeneratorSVG from "../../features/svg/GeneratorSVG";

const PannelUser = () => {
  const dispatch = useDispatch();
  const { app, nav } = useSelector((state) => state);

  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <section
      className={`pannelUser ${app.pannelUser_open && "pannelUser_open"}`}
    >
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
