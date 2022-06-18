import React from "react";
import ButtonAction from "../../../features/buttons&inputs/ButtonAction";
import ButtonUserNav from "../../../features/buttons&inputs/ButtonUserNav";
import InputText from "../../../features/buttons&inputs/InputText";

const PannelRegister = () => {
  const formRegister = ["username", "mail", "password"];
  return (
    <div className="pannelRegister">
      <header className="pannelRegister-head">
        <h4 className="pannelRegister-head-text">
          Une adresse email est nécessaire pour votre inscription.
        </h4>
      </header>
      <form className="form form-register">
        {formRegister.map((input) => (
          <InputText key={input} nameInput={input} />
        ))}

        <footer className="pannelRegister-footer">
          <ButtonAction nameButton={"register"} />
          <ButtonUserNav nav={"back_SignIn"} />
        </footer>
      </form>
    </div>
  );
};

export default PannelRegister;
