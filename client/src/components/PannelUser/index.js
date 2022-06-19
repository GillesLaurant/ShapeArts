import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import UserSection from "./UserSection";
import RecentlyShapes from "./RecentlyShapes";
import { toggleWindows } from "../../features/app/app.slice";
import "./style.scss";
import ButtonUserNav from "../../features/buttons&inputs/ButtonUserNav";
import { navigate } from "../../features/app/navUser.slice";

const PannelUser = () => {
  const dispatch = useDispatch();
  const { app, nav } = useSelector((state) => state);
  // const pannels = useSelector((state) => state.nav);

  const filterPannel = () => {
    let pannelOpened = [];
    for (const pannel in nav) {
      nav[pannel] && pannelOpened.push(pannel);
    }
    if (pannelOpened.length > 1) {
      console.log("SUP OPENED PANNELS", pannelOpened);
    }
    if (pannelOpened.length > 0) {
      pannelOpened = pannelOpened[0].split("_")[1];
      // console.log("test", pannelOpened);
      return pannelOpened;
    }
  };
  const backNav = (ev) => {
    ev.preventDefault();
    dispatch(navigate(ev.target.name));
  };

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
          className={`back_Pannel`}
          name={`nav_${filterPannel()}`}
          onClick={backNav}
        >
          retour
        </button>

        <button
          type="button"
          className="pannelUser-head-buttonWindow"
          name="pannelUser"
          onClick={handleWindows}
        >
          Fermer
        </button>
      </div>

      <UserSection />
      <RecentlyShapes />
    </section>
  );
};

PannelUser.propTypes = {};

export default PannelUser;
