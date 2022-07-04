import React from "react";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";

/*******    PANNEL TOGGLE EDITS     *******/

const PannelNavEdit = () => {
  return (
    <div className="pannelNavEdit">
      <header className="pannelNavEdit-head">
        <h2 className="pannelNavEdit-head-title">Modifer</h2>
      </header>

      <div className="pannelNavEdit-content">
        {/* EDIT USERNAME NAV */}
        <ButtonUserNav nav={"nav_EditUsername"} />

        {/* EDIT MAIL NAV */}
        <ButtonUserNav nav={"nav_EditMail"} />

        {/* EDIT PASSWORD NAV */}
        <ButtonUserNav nav={"nav_EditPwd"} />
      </div>

      <footer className="pannelNavEdit-footer">
        {/* BACK ACCOUT */}
        <ButtonUserNav nav={"back_EditToggle"} />
      </footer>
    </div>
  );
};

export default PannelNavEdit;
