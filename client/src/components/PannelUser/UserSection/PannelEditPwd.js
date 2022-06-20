import React from "react";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import InputText from "../../../features/buttons&inputs/InputText";

/*******    PANNEL PASSWORD EDIT     *******/

const PannelEditPwd = () => {
  return (
    <div className="pannelEdit">
      <header className="pannelEdit-head">
        <h3 className="pannelEdit-head-text">Modifer</h3>
      </header>

      {/* FORM EDIT HOLD & NEW PASSWORD */}
      <form className="form form-edit">
        <InputText nameInput={"holdPwd"} />
        <InputText nameInput={"newPwd"} />

        <footer className="pannelEdit-footer">
          {/* EDIT PASSWORD ACTION */}
          <ButtonAction nameButton={"editPwd"} />

          {/* BACK EDIT TOGGLE */}
          <ButtonUserNav nav={"back_EditPwd"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelEditPwd;
