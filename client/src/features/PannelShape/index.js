import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorSection from "../../features/error/ErrorSection";
import SelectShape from "./SelectShape";
import ConfigLayout from "./ConfigLayout";
import ConfigDisplay from "./ConfigDisplay";
import ConfigColors from "./ConfigColors";
import ValidShape from "./ValidShape";
import GeneratorSVG from "../../features/svg/GeneratorSVG";
import { toggleWindows } from "../user/nav.slice";
import "./style.scss";

/*******    PANNEL CONFIG SHAPE     *******/

const PannelCommand = () => {
  const dispatch = useDispatch();
  const windowCommand = useSelector(
    (state) => state.nav.windows.pannelCommand_open
  );

  // Handle Open || Close pannel
  const handleWindows = (ev) => {
    ev.preventDefault();
    dispatch(toggleWindows(ev.target.name));
  };

  return (
    <section
      className={`pannelCommand ${windowCommand && "pannelCommand_open"}`}
    >
      {/* HEAD SECTION & BUTTON CLOSE WINDOW */}
      <div className="pannelCommand-head">
        <button
          type="button"
          className=" buttonsWindow button_closeCommand"
          name="pannelCommand"
          onClick={handleWindows}
        >
          <GeneratorSVG nameSvg={"closeWindows"} />
        </button>
      </div>
      {/* ERROR EVENT */}
      <ErrorSection errorTarget={"shape"} />

      {/* 4 BUTTONS SELECTED SHAPE */}
      <SelectShape />

      {/* CONFIG AXE X && AXE Y */}
      <ConfigLayout />

      {/* CONFIG AXE Z, SIZE, ROTATION, ROTATION X, ROTATION Y */}
      <ConfigDisplay />

      {/* CONFIG COLOR NORMAL || COLORS GRADIENT */}
      <ConfigColors />

      {/* VALID || RESET SHAPE CONFIG */}
      <ValidShape />
    </section>
  );
};

export default PannelCommand;
