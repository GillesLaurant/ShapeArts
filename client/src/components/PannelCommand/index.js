import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import SelectShape from "./SelectShape";
import { toggleWindows } from "../../features/app/app.slice";
import "./style.scss";

const PannelCommand = (props) => {
  const dispatch = useDispatch();
  const windowCommand = useSelector((state) => state.app.pannelCommand_open);

  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };
  return (
    <section
      className={`pannelCommand ${windowCommand && "pannelCommand_open"}`}
    >
      <div className="pannelCommand-head">
        <button type="button" name="pannelCommand" onClick={handleWindows}>
          Fermer
        </button>
      </div>
      <SelectShape />
    </section>
  );
};

PannelCommand.propTypes = {};

export default PannelCommand;
