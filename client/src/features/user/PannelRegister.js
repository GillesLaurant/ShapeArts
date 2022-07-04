import React from "react";
import ButtonAction from "../buttons&inputs/ButtonAction";
import ButtonUserNav from "../buttons&inputs/ButtonUserNav";
import InputText from "../buttons&inputs/InputText";

/*******    PANNEL REGISTER     *******/

const PannelRegister = () => {
  // List inputs
  const formRegister = ["username", "mail", "password"];
  return (
    <div className="pannelRegister">
      <header className="pannelRegister-head">
        <h4 className="pannelRegister-head-text">
          Une adresse email est nécessaire pour votre inscription.
        </h4>
      </header>

      {/* FORM REGISTER with USERNAME & MAIL & PASSWORD inputs */}
      <form className="form form-register">
        {formRegister.map((input) => (
          <InputText key={input} nameInput={input} />
        ))}

        <footer className="pannelRegister-footer">
          {/* REGISTER ACTION */}
          <ButtonAction nameButton={"register"} />

          {/* BACK START */}
          <ButtonUserNav nav={"back_SignIn"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelRegister;
