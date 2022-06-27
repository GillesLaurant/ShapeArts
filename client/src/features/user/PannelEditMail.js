import React from "react";
import { useSelector } from "react-redux";
import ButtonAction from "../buttons&inputs/ButtonAction";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";
import InputText from "../buttons&inputs/InputText";

/*******    PANNEL MAIL EDIT     *******/

const PannelEditMail = () => {
  // Mail
  const user = useSelector((state) => state.user.mail);

  return (
    <div className="pannelEdit">
      <header className="pannelEdit-head">
        <h3 className="pannelEdit-head-text">Modifer</h3>

        <h4 className="pannelEdit-head-user">{user}</h4>
      </header>

      {/* FORM EDIT MAIL */}
      <form className="form form-edit">
        <InputText nameInput={"mailEdited"} />

        <footer className="pannelEdit-footer">
          {/* EDIT MAIL ACTION */}
          <ButtonAction nameButton={"editMail"} />

          {/* BACK EDIT TOGGLE */}
          <ButtonUserNav nav={"back_EditMail"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelEditMail;
