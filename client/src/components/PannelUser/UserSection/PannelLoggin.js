import React from "react";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import InputText from "../../../features/buttons&inputs/InputText";

/*******    PANNEL LOGGIN     *******/

const PannelLoggin = () => {
  return (
    <div className="pannelLoggin">
      <header className="pannelLoggin-head">
        <h3 className="pannelLoggin-head-text">Ravis de vous revoir !</h3>
      </header>

      {/* FORM LOGGIN with MAIL & PASSWORD inputs */}
      <form className="form form-register">
        <InputText nameInput={"mail"} />
        <InputText nameInput={"password"} />

        <footer className="pannelLoggin-footer">
          {/* LOGGIN ACTION */}
          <ButtonAction nameButton={"loggin"} />

          {/* BACK START */}
          <ButtonUserNav nav={"back_SignUp"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelLoggin;
