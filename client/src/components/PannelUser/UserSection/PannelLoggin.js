import React from "react";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import InputText from "../../../features/buttons&inputs/InputText";

const PannelLoggin = () => {
  // List inputs
  const formRegister = ["mail", "password"];
  return (
    <div className="pannelLoggin">
      <header className="pannelLoggin-head">
        <h3 className="pannelLoggin-head-text">Ravis de vous revoir !</h3>
      </header>

      {/* FORM LOGGIN */}
      <form className="form form-register">
        {formRegister.map((input) => (
          <InputText key={input} nameInput={input} />
        ))}

        <footer className="pannelLoggin-footer">
          {/* BUTTON LOGGIN ACTION */}
          <ButtonAction nameButton={"loggin"} />

          {/* BUTTON BACK NAV */}
          <ButtonUserNav nav={"back_SignUp"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelLoggin;
