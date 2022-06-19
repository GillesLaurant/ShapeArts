import React from "react";
import { useSelector } from "react-redux";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import InputText from "../../../features/buttons&inputs/InputText";

/*******    PANNEL USERNAME EDIT     *******/

const PannelEditPseudo = () => {
  // Username
  const user = useSelector((state) => state.user.username);

  return (
    <div className="pannelEdit">
      <header className="pannelEdit-head">
        <h3 className="pannelEdit-head-text">Modifer</h3>

        <h4 className="pannelEdit-head-user">{user}</h4>
      </header>

      {/* FORM EDIT USERNAME */}
      <form className="form form-edit">
        <InputText nameInput={"usernameEdited"} />

        <footer className="pannelEdit-footer">
          {/* EDIT USERNAME ACTION */}
          <ButtonAction nameButton={"editUsername"} />

          {/* BACK EDIT TOGGLE */}
          <ButtonUserNav nav={"back_EditUsername"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelEditPseudo;
