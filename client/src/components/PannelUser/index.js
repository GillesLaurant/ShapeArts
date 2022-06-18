import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import UserSection from "./UserSection";
import RecentlyShapes from "./RecentlyShapes";
import { toggleWindows } from "../../features/app/app.slice";
import "./style.scss";

const PannelUser = (props) => {
  const dispatch = useDispatch();
  const windowUser = useSelector((state) => state.app.pannelUser_open);

  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };
  return (
    <section className={`pannelUser ${windowUser && "pannelUser_open"}`}>
      <div className="pannelUser-head">
        <button type="button">Retour</button>

        <button type="button" name="pannelUser" onClick={handleWindows}>
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
